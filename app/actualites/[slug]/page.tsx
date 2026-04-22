import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generatePageMetadata } from '@shared/config/seo';
import { client } from '@shared/utils/sanity.client';
import StructuredData from '@shared/components/StructuredData';
import ArticleDetail from '@features/actualites/ArticleDetail';

const queryArticle = `
	*[_type == "actualite" && slug.current == $slug][0] {
		title,
		"slug": slug.current,
		publishedAt,
		category,
		coverImage,
		excerpt,
		content,
		seo
	}
`;


export const dynamic = 'force-dynamic';

export async function generateMetadata({
	params
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const article = await client.fetch(queryArticle, { slug: params.slug });

	if (!article) {
		return generatePageMetadata({
			title: 'Actualités - GAIA',
			description: '',
			path: `/actualites/${params.slug}`
		});
	}

	return generatePageMetadata({
		title: article.seo?.metaTitle || `${article.title} - GAIA`,
		description: article.seo?.metaDescription || article.excerpt || '',
		path: `/actualites/${params.slug}`,
		image: article.seo?.openGraphImage || article.coverImage
	});
}

export default async function ArticlePage({
	params
}: {
	params: { slug: string };
}) {
	const article = await client.fetch(queryArticle, { slug: params.slug });

	if (!article) notFound();

	return (
		<>
			<StructuredData
				type="WebPage"
				data={{
					name: article.seo?.metaTitle || article.title,
					description: article.seo?.metaDescription || article.excerpt,
					url: `/actualites/${params.slug}`
				}}
			/>
			<ArticleDetail article={article} />
		</>
	);
}
