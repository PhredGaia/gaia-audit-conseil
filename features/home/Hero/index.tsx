import Hero from '@shared/components/Hero';
import Link from 'next/link';

export default function () {
	const description =
		"GAIA accompagne les organisations dans la structuration, l'amélioration et le pilotage de systèmes de management adaptés à leurs réalités opérationnelles partout en France.";
	const buttonOffersLabel = 'Découvrir les offres';
	const buttonContactLabel = 'Parlons de votre projet';

	return (
		<Hero>
			<>
				<div className="hero__badge"><span className="hero__badge-dot"></span><span>Audit - Conseil - Formation</span></div>
				<h1 className="hero__title">
					Construire des systèmes de management{' '}
					<span className="hero__title-accent">utiles</span> et{' '}
					<span className="hero__title-accent">applicables</span>
				</h1>
				<p className="hero__description">{description}</p>
				<div className="hero__certifs">
						{['ISO 9001', 'ISO 14001', 'RSE', 'QSE'].map((label) => (
							<div key={label} className="hero__certif">
								<svg className="hero__certif-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
								<span>{label}</span>
							</div>
						))}
					</div>
				<div className="hero__ui-container">
					<Link href="/contact" className="button-primary">
						{buttonContactLabel}
					</Link>
					<Link href="/offres" className="button-tertiary">
						{buttonOffersLabel}
					</Link>
				</div>
			</>
		</Hero>
	);
}
