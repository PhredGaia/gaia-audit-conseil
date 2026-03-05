import { Metadata } from 'next';
import { generatePageMetadata } from '@shared/config/seo';
import { client } from '@shared/utils/sanity.client';
import StructuredData from '@shared/components/StructuredData';
import Offres from '@features/offres';

const queryOffres = `
	*[_type == "offres"][0]{
		seo,
		sections[]{
			title,
			description,
			items[]{
				title,
				list
			},
			ctaBox{
				text,
				buttonLabel,
				buttonHref
			}
		}
	}
`;

export const revalidate = 3600; // Cache 1 heure

export async function generateMetadata(): Promise<Metadata> {
	const data = await client.fetch(queryOffres);
	
	if (!data?.seo) {
		return generatePageMetadata({
			title: 'Offres - GAIA',
			description: 'Découvrez nos offres d\'audit, conseil, accompagnement et formation en systèmes de management.',
			path: '/offres'
		});
	}

	return generatePageMetadata({
		title: data.seo.metaTitle || 'Offres - GAIA',
		description: data.seo.metaDescription || 'Découvrez nos offres d\'audit, conseil, accompagnement et formation en systèmes de management.',
		path: '/offres',
		image: data.seo.openGraphImage
	});
}

export default async function OffresPage() {
	const data = await client.fetch(queryOffres);

	return (
		<>
			{data?.seo && (
				<StructuredData
					type="WebPage"
					data={{
						name: data.seo.metaTitle || 'Offres - GAIA',
						description: data.seo.metaDescription,
						url: '/offres'
					}}
				/>
			)}
			<Offres sections={data?.sections || []} />
		</>
	);
}
