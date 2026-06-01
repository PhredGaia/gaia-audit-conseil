import './style.scss';
import Image from 'next/image';
import OffresHero from './Hero';
import OfferCard from './OfferCard';
import Process from './Process';
import OffresCTA from './CTA';
import { SanityImage } from '@types/sanity';

interface OfferCardData {
	title: string;
	subtitle: string;
	description: string;
	services: string[];
	benefits: string[];
	image: SanityImage | null;
	seoInfo?: string;
}

const DEFAULT_OFFER_CARDS: OfferCardData[] = [
	{
		title: 'Audit',
		subtitle: 'Évaluez la conformité et la performance de vos systèmes',
		description: 'Nos audits vous permettent d\'avoir une vision claire de votre situation actuelle et d\'identifier les axes d\'amélioration prioritaires.',
		services: [
			'Audit interne (ISO 9001, 14001, 45001)',
			'Audit fournisseur / sous-traitant',
			'Audit de pré-certification',
			'Audit de conformité réglementaire',
			'Audit RSE et développement durable',
		],
		benefits: [
			'Vision objective de votre situation',
			'Identification des non-conformités',
			'Plan d\'actions priorisé',
			'Préparation à la certification',
		],
		image: null,
	},
	{
		title: 'Conseil',
		subtitle: 'Structurez et optimisez vos systèmes de management',
		description: 'Nous vous accompagnons dans la mise en place, l\'amélioration ou la refonte de vos systèmes de management adaptés à votre réalité terrain.',
		services: [
			'Mise en place de systèmes de management QSE',
			'Accompagnement à la certification',
			'Intégration de systèmes (QSE, RSE)',
			'Optimisation des processus',
			'Démarche RSE et développement durable',
		],
		benefits: [
			'Système adapté à votre contexte',
			'Accompagnement personnalisé',
			'Transfert de compétences',
			'Résultats durables',
		],
		image: null,
	},
	{
		title: 'Formation',
		subtitle: 'Développez les compétences de vos équipes',
		description: 'Des formations pratiques et opérationnelles pour rendre vos équipes autonomes dans le pilotage de vos systèmes de management.',
		services: [
			'Formation auditeur interne',
			'Sensibilisation aux normes ISO',
			'Formation pilote de processus',
			'Gestion des risques et opportunités',
			'Outils et méthodes Qualité',
		],
		benefits: [
			'Formations sur-mesure',
			'Approche pratique et terrain',
			'Supports pédagogiques inclus',
			'Suivi post-formation',
		],
		image: null,
	},
];

interface HeroData {
	title?: string;
	subtitle?: string;
}

interface ProcessData {
	title?: string;
	subtitle?: string;
}

interface CTAData {
	title?: string;
	text?: string;
	buttonLabel?: string;
	buttonHref?: string;
	phoneNumber?: string;
}

interface OffresProps {
	hero?: HeroData;
	offerCards?: OfferCardData[];
	process?: ProcessData;
	cta?: CTAData;
}

export default function Offres({
	hero,
	offerCards,
	process,
	cta,
}: OffresProps) {
	const cards = offerCards && offerCards.length > 0 ? offerCards : DEFAULT_OFFER_CARDS;

	return (
		<div className="offres">
			<div className="offres__hero-wrapper">
				<OffresHero
					title={hero?.title}
					subtitle={hero?.subtitle}
					navLabels={cards.map((card) => card.title)}
				/>
				<div className="offres__bonhomme-wrapper">
					<Image
						src="/bonhomme-offres.webp"
						alt=""
						fill
						priority
						sizes="320px"
						quality={85}
						className="offres__bonhomme"
					/>
				</div>
			</div>

			{cards.length > 0 && (
				<section className="offres-cards">
					<div className="container">
						<div className="offres-cards__list">
							{cards.map((card, index) => (
								<OfferCard
									key={index}
									index={index}
									title={card.title}
									subtitle={card.subtitle}
									description={card.description}
									services={card.services}
									benefits={card.benefits}
									image={card.image}
									seoInfo={card.seoInfo}
								/>
							))}
						</div>
					</div>
				</section>
			)}

			<Process title={process?.title} subtitle={process?.subtitle} />

			<OffresCTA
				title={cta?.title}
				text={cta?.text}
				buttonLabel={cta?.buttonLabel}
				buttonHref={cta?.buttonHref}
				phoneNumber={cta?.phoneNumber}
			/>
		</div>
	);
}
