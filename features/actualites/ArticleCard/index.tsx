import Link from 'next/link';
import SanityImage from '@shared/components/SanityImage';
import { Article } from '../index';
import './style.scss';

interface ArticleCardProps {
	article: Article;
	categoryLabel: string;
}

export default function ArticleCard({ article, categoryLabel }: ArticleCardProps) {
	const date = new Date(article.publishedAt).toLocaleDateString('fr-FR', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	return (
		<Link href={`/actualites/${article.slug}`} className="article-card">
			<div className="article-card__image-wrapper">
				{article.coverImage ? (
					<SanityImage
						image={article.coverImage}
						alt={article.title}
						width={600}
						height={360}
						className="article-card__image"
						sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
					/>
				) : (
					<div className="article-card__image-placeholder" />
				)}
				<span className={`article-card__category article-card__category--${article.category}`}>
					{categoryLabel}
				</span>
			</div>
			<div className="article-card__body">
				<time className="article-card__date text-level-3">{date}</time>
				<h3 className="article-card__title">{article.title}</h3>
				{article.excerpt && (
					<p className="article-card__excerpt text-level-3">{article.excerpt}</p>
				)}
				<span className="article-card__link">Lire la suite →</span>
			</div>
		</Link>
	);
}
