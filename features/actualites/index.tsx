import './style.scss';
import ActualitesGrid from './ActualitesGrid';

export interface Article {
	title: string;
	slug: string;
	publishedAt: string;
	category: string;
	coverImage?: any;
	excerpt?: string;
}

interface ActualitesProps {
	articles: Article[];
}

export default function Actualites({ articles }: ActualitesProps) {
	return (
		<div className="actualites">
			<div className="actualites__hero">
				<div className="container">
					<h1 className="actualites__title">Actualités</h1>
					<p className="actualites__subtitle text-level-1">
						Nouvelles normes, annonces, événements et articles de GAIA Audit & Conseil.
					</p>
				</div>
			</div>
			<ActualitesGrid articles={articles} />
		</div>
	);
}
