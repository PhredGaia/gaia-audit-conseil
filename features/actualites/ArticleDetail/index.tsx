import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import SanityImage from '@shared/components/SanityImage';
import './style.scss';

const CATEGORY_LABELS: Record<string, string> = {
	norme: 'Nouvelle norme',
	annonce: 'Annonce',
	evenement: 'Événement',
	article: 'Article'
};

const portableTextComponents = {
	types: {
		image: ({ value }: any) => (
			<figure className="article-detail__figure">
				<SanityImage
					image={value}
					alt={value.alt || ''}
					width={900}
					height={540}
					className="article-detail__content-image"
					sizes="(max-width: 768px) 100vw, 860px"
				/>
				{value.caption && (
					<figcaption className="article-detail__caption">{value.caption}</figcaption>
				)}
			</figure>
		)
	},
	block: {
		h2: ({ children }: any) => <h2 className="article-detail__h2">{children}</h2>,
		h3: ({ children }: any) => <h3 className="article-detail__h3">{children}</h3>,
		normal: ({ children }: any) => <p className="article-detail__paragraph">{children}</p>
	}
};

interface ArticleDetailProps {
	article: {
		title: string;
		slug: string;
		publishedAt: string;
		category: string;
		coverImage?: any;
		excerpt?: string;
		content?: any[];
	};
}

export default function ArticleDetail({ article }: ArticleDetailProps) {
	const date = new Date(article.publishedAt).toLocaleDateString('fr-FR', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	const categoryLabel = CATEGORY_LABELS[article.category] || article.category;

	return (
		<article className="article-detail">
			<div className="article-detail__hero">
				{article.coverImage && (
					<div className="article-detail__cover-wrapper">
						<SanityImage
							image={article.coverImage}
							alt={article.title}
							width={1400}
							height={560}
							className="article-detail__cover"
							sizes="100vw"
							priority
						/>
						<div className="article-detail__cover-overlay" />
					</div>
				)}
				<div className="container article-detail__hero-content">
					<span className={`article-detail__category article-detail__category--${article.category}`}>
						{categoryLabel}
					</span>
					<h1 className="article-detail__title">{article.title}</h1>
					<time className="article-detail__date text-level-3">{date}</time>
				</div>
			</div>

			<div className="container">
				<div className="article-detail__body">
					{article.excerpt && (
						<p className="article-detail__excerpt">{article.excerpt}</p>
					)}
					{article.content && article.content.length > 0 && (
						<div className="article-detail__content">
							<PortableText
								value={article.content}
								components={portableTextComponents}
							/>
						</div>
					)}
					<div className="article-detail__back">
						<Link href="/actualites" className="button-secondary">
							← Retour aux actualités
						</Link>
					</div>
				</div>
			</div>
		</article>
	);
}
