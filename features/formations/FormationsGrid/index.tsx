'use client';

import FormationCard from '../FormationCard';
import './style.scss';
import { SanityImage } from '@types/sanity';

interface Formation {
	title: string;
	duree?: string;
	descriptifApprentissage?: string;
	methodologie?: string;
	image?: SanityImage | null;
}

interface FormationsGridProps {
	formations: Formation[];
}

export default function FormationsGrid({ formations }: FormationsGridProps) {
	return (
		<section className="formations-catalogue">
			<div className="container">
				<div className="formations-catalogue__header">
					<h2 className="formations-catalogue__title">Catalogue des formations</h2>
					<p className="formations-catalogue__subtitle text-level-1">
						Des formations adaptées à vos besoins et à votre contexte
					</p>
				</div>
				<div className="formations-catalogue__list">
					{formations.map((formation, index) => (
						<FormationCard
							key={index}
							title={formation.title}
							duree={formation.duree}
							descriptifApprentissage={formation.descriptifApprentissage}
							methodologie={formation.methodologie}
							image={formation.image}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
