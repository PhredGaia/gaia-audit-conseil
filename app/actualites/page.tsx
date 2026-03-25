import { Metadata } from 'next';
import { generatePageMetadata } from '@shared/config/seo';
import { client } from '@shared/utils/sanity.client';
import StructuredData from '@shared/components/StructuredData';
import Actualites from '@features/actualites';

const queryActualites = `
	*[_type == "actualite"] | order(publishedAt desc) {
		title,
		"slug": slug.current,
		publishedAt,
		category,
		coverImage,
		excerpt
	}
`;

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
	return generatePageMetadata({
		title: 'Actualités - GAIA',
		description: 'Retrouvez toutes les actualités de GAIA Audit & Conseil : nouvelles normes, annonces, événements et articles.',
		path: '/actualites'
	});
}

export default async function ActualitesPage() {
	const articles = await client.fetch(queryActualites);

	return (
		<>
			<StructuredData
				type="WebPage"
				data={{
					name: 'Actualités - GAIA',
					description: 'Retrouvez toutes les actualités de GAIA Audit & Conseil.',
					url: '/actualites'
				}}
			/>
			<Actualites articles={articles || []} />
		</>
	);
}
