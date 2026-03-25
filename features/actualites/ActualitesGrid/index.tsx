'use client';

import ArticleCard from '../ArticleCard';
import { Article } from '../index';
import './style.scss';

const CATEGORY_LABELS: Record<string, string> = {
	norme: 'Nouvelle norme',
	annonce: 'Annonce',
	evenement: 'Événement',
	article: 'Article'
};

const CATEGORIES = ['', 'norme', 'annonce', 'evenement', 'article'];

interface ActualitesGridProps {
	articles: Article[];
}

export default function ActualitesGrid({ articles }: ActualitesGridProps) {
	return (
		<section className="actualites-grid-section">
			<div className="container">
				{articles.length === 0 ? (
					<p className="actualites-grid-section__empty text-level-2">
						Aucune actualité pour le moment.
					</p>
				) : (
					<div className="actualites-grid">
						{articles.map((article) => (
							<ArticleCard
								key={article.slug}
								article={article}
								categoryLabel={CATEGORY_LABELS[article.category] || article.category}
							/>
						))}
					</div>
				)}
			</div>
		</section>
	);
}
