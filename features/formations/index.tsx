import './style.scss';
import Image from 'next/image';
import FormationsHero from './Hero';
import Approach from './Approach';
import Modalites from './Modalites';
import FormationsGrid from './FormationsGrid';
import FormationsCTA from './CTA';
import { SanityImage } from '@types/sanity';

interface Formation {
	title: string;
	duree?: string;
	descriptifApprentissage?: string;
	methodologie?: string;
	image?: SanityImage | null;
}

const DEFAULT_FORMATIONS: Formation[] = [
	{
		title: 'Systèmes de management et référentiels ISO',
		duree: '1 à 2 jours',
		descriptifApprentissage: 'Comprendre les exigences des référentiels ISO et savoir les décliner dans votre organisation.',
		image: null,
	},
	{
		title: 'Audit interne : méthode et pratique',
		duree: '1 à 2 jours',
		descriptifApprentissage: 'Maîtriser les techniques d\'audit interne pour évaluer efficacement votre système de management.',
		image: null,
	},
	{
		title: 'Préparer et réussir un audit de certification',
		duree: '1 jour',
		descriptifApprentissage: 'Préparer sereinement vos équipes à un audit de certification ou de suivi.',
		image: null,
	},
	{
		title: 'RSE et démarches responsables',
		duree: '1 à 2 jours',
		descriptifApprentissage: 'Structurer une démarche RSE cohérente et valorisante pour votre organisation.',
		image: null,
	},
	{
		title: 'Structurer et valoriser un dossier de candidature',
		duree: '1 jour',
		descriptifApprentissage: 'Construire des dossiers de candidature solides pour labels et certifications.',
		image: null,
	},
];

interface FormationsProps {
	formations?: Formation[] | null;
}

export default function Formations({ formations }: FormationsProps) {
	const items = formations && formations.length > 0 ? formations : DEFAULT_FORMATIONS;

	return (
		<div className="formations">
			<div className="formations__hero-wrapper">
				<FormationsHero />
				<div className="formations__bonhomme-wrapper">
					<Image
						src="/bonhomme-formations.webp"
						alt=""
						fill
						priority
						sizes="260px"
						quality={85}
						className="formations__bonhomme"
					/>
				</div>
			</div>

			<Approach />

			<FormationsGrid formations={items} />

			<Modalites />

			<FormationsCTA />
		</div>
	);
}
