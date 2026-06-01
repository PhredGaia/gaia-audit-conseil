import './style.scss';
import Hero from '@shared/components/Hero';

const STATS = [
	{
		value: '100%',
		label: 'Formation sur mesure',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
				<circle cx="9" cy="7" r="4"/>
				<path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
				<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
			</svg>
		),
	},
	{
		value: 'Terrain',
		label: 'Approche pratique',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<circle cx="12" cy="12" r="10"/>
				<circle cx="12" cy="12" r="6"/>
				<circle cx="12" cy="12" r="2"/>
			</svg>
		),
	},
	{
		value: 'Flexible',
		label: 'Présentiel ou distance',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
				<path d="M6 12v5c3 3 9 3 12 0v-5"/>
			</svg>
		),
	},
];

export default function FormationsHero() {
	return (
		<div className="formations-hero">
			<Hero>
				<>
					<span className="formations-hero__badge">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
							<path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
							<path d="M6 12v5c3 3 9 3 12 0v-5"/>
						</svg>
						Développez vos compétences
					</span>
					<h1 className="hero__title">Formations professionnelles</h1>
					<p className="formations-hero__subtitle text-level-1">
						Les formations GAIA permettent de comprendre, structurer et faire vivre
						les systèmes de management au sein des organisations.
					</p>
					<div className="formations-hero__stats">
						{STATS.map((stat, index) => (
							<div key={index} className="formations-hero__stat">
								<span className="formations-hero__stat-icon">{stat.icon}</span>
								<span className="formations-hero__stat-value">{stat.value}</span>
								<span className="formations-hero__stat-label">{stat.label}</span>
							</div>
						))}
					</div>
				</>
			</Hero>
		</div>
	);
}
