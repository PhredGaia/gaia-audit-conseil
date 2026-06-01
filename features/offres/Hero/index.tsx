import './style.scss';
import Hero from '@shared/components/Hero';

const NAV_ICONS = [
	<svg key="audit" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
		<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
		<path d="m9 14 2 2 4-4"/>
	</svg>,
	<svg key="conseil" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
		<circle cx="9" cy="7" r="4"/>
		<path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
		<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
	</svg>,
	<svg key="formation" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
		<path d="M6 12v5c3 3 9 3 12 0v-5"/>
	</svg>,
];

interface OffresHeroProps {
	title?: string;
	subtitle?: string;
	navLabels?: string[];
}

export default function OffresHero({
	title = 'Nos Offres',
	subtitle = 'Des solutions adaptées à vos besoins pour structurer, améliorer et piloter vos systèmes de management.',
	navLabels = [],
}: OffresHeroProps) {
	return (
		<div className="offres-hero">
			<Hero>
				<>
					<div className="hero__badge">
						<span className="hero__badge-dot" />
						<span>Audit · Conseil · Formation</span>
					</div>
					<h1 className="hero__title">{title}</h1>
					<p className="offres-hero__subtitle text-level-1">{subtitle}</p>
					{navLabels.length > 0 && (
						<nav className="offres-hero__nav" aria-label="Navigation des offres">
							{navLabels.map((label, index) => (
								<a
									key={index}
									href={`#offre-${index}`}
									className="offres-hero__nav-pill"
								>
									<span className="offres-hero__nav-icon" aria-hidden="true">
										{NAV_ICONS[index]}
									</span>
									<span>{label}</span>
								</a>
							))}
						</nav>
					)}
				</>
			</Hero>
		</div>
	);
}
