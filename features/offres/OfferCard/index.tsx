import './style.scss';
import Image from 'next/image';
import Link from 'next/link';
import SanityImage from '@shared/components/SanityImage';
import SEOInfo from '@shared/components/SEOInfo';
import { SanityImage as SanityImageType } from '@types/sanity';

const OFFER_ICONS = [
	<svg key="audit" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
		<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
		<path d="m9 14 2 2 4-4"/>
	</svg>,
	<svg key="conseil" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
		<circle cx="9" cy="7" r="4"/>
		<path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
		<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
	</svg>,
	<svg key="formation" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
		<path d="M6 12v5c3 3 9 3 12 0v-5"/>
	</svg>,
];

const LOCAL_FALLBACK_IMAGES = [
	'/audit-consulting.jpg',
	'/quality-control.jpg',
	'/formation.jpg',
];

interface OfferCardProps {
	title: string;
	subtitle: string;
	description: string;
	services: string[];
	benefits: string[];
	image: SanityImageType | null;
	index: number;
	seoInfo?: string;
	ctaLabel?: string;
	ctaHref?: string;
}

export default function OfferCard({
	title,
	subtitle,
	description,
	services = [],
	benefits = [],
	image,
	index,
	seoInfo,
	ctaLabel = 'Demander un devis',
	ctaHref = '/contact',
}: OfferCardProps) {
	const isReversed = index % 2 === 1;
	const icon = OFFER_ICONS[index] ?? OFFER_ICONS[0];
	const localFallback = LOCAL_FALLBACK_IMAGES[index] ?? LOCAL_FALLBACK_IMAGES[0];

	return (
		<div
			id={`offre-${index}`}
			className={`offer-card${isReversed ? ' offer-card--reverse' : ''}`}
		>
			<div className="offer-card__image-wrapper">
				{image ? (
					<SanityImage
						image={image}
						alt={title}
						width={800}
						height={600}
						className="offer-card__image"
						priority={index === 0}
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
				) : (
					<Image
						src={localFallback}
						alt={title}
						fill
						className="offer-card__image"
						sizes="(max-width: 768px) 100vw, 50vw"
						priority={index === 0}
					/>
				)}
				<div className="offer-card__image-overlay" aria-hidden="true" />
				<div className="offer-card__image-badge">
					<span className="offer-card__image-badge-icon">{icon}</span>
					<span className="offer-card__image-badge-label">{title}</span>
				</div>
			</div>

			<div className="offer-card__content">
				<div className="offer-card__header">
					<div className="offer-card__title-row">
						<h2 className="offer-card__title">{title}</h2>
						{seoInfo && <SEOInfo text={seoInfo} label="Plus d'infos" />}
					</div>
					<p className="offer-card__subtitle">{subtitle}</p>
					<p className="offer-card__description text-level-2">{description}</p>
				</div>

				{services.length > 0 && (
					<div className="offer-card__services">
						<h3 className="offer-card__services-title">Nos prestations</h3>
						<ul className="offer-card__services-list">
							{services.map((service, i) => (
								<li key={i} className="offer-card__service-item">
									<svg className="offer-card__check-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<circle cx="12" cy="12" r="10"/>
										<path d="m9 12 2 2 4-4"/>
									</svg>
									<span>{service}</span>
								</li>
							))}
						</ul>
					</div>
				)}

				{benefits.length > 0 && (
					<div className="offer-card__benefits">
						{benefits.map((benefit, i) => (
							<span key={i} className="offer-card__benefit">{benefit}</span>
						))}
					</div>
				)}

				<Link href={ctaHref} className="button-primary offer-card__cta">
					{ctaLabel}
				</Link>
			</div>
		</div>
	);
}
