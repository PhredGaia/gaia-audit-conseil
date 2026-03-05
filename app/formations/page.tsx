import { Metadata } from 'next';
import { generatePageMetadata } from '@shared/config/seo';
import { client } from '@shared/utils/sanity.client';
import StructuredData from '@shared/components/StructuredData';
import Formations from '@features/formations';

const queryFormations = `
	*[_type == "formations"][0]{
		seo,
		formations[]{
			title,
			duree,
			descriptifApprentissage,
			methodologie
		}
	}
`;

export const revalidate = 3600; // Cache 1 heure

export async function generateMetadata(): Promise<Metadata> {
	const data = await client.fetch(queryFormations);
	
	if (!data?.seo) {
		return generatePageMetadata({
			title: 'Formations - GAIA',
			description: 'Découvrez nos formations professionnelles en systèmes de management, audit interne, ISO, RSE et EPV.',
			path: '/formations'
		});
	}

	return generatePageMetadata({
		title: data.seo.metaTitle || 'Formations - GAIA',
		description: data.seo.metaDescription || 'Découvrez nos formations professionnelles en systèmes de management, audit interne, ISO, RSE et EPV.',
		path: '/formations',
		image: data.seo.openGraphImage
	});
}

export default async function FormationsPage() {
	const data = await client.fetch(queryFormations);

	return (
		<>
			{data?.seo && (
				<StructuredData
					type="WebPage"
					data={{
						name: data.seo.metaTitle || 'Formations - GAIA',
						description: data.seo.metaDescription,
						url: '/formations'
					}}
				/>
			)}
			<Formations formations={data?.formations || []} />
		</>
	);
}
