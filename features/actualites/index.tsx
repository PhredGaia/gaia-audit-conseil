import Hero from '@shared/components/Hero';
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
		<div>
			<Hero>
				<>
					<h1 className="hero__title">Actualités</h1>
					<p className="hero__description text-level-1">
						Nouvelles normes, annonces, événements et articles de GAIA Audit & Conseil.
					</p>
				</>
			</Hero>
			<ActualitesGrid articles={articles} />
		</div>
	);
}
