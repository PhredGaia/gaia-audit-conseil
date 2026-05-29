import './style.scss';

const domains = [
	{
		label: 'Qualité',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
			</svg>
		),
	},
	{
		label: 'Environnement',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
			</svg>
		),
	},
	{
		label: 'Santé et sécurité au travail',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
			</svg>
		),
	},
	{
		label: 'Responsabilité sociétale',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
			</svg>
		),
	},
	{
		label: 'Événementiel responsable',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
			</svg>
		),
	},
	{
		label: "Métiers d'art et savoir-faire (EPV)",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
			</svg>
		),
	},
];

export default function Domains() {
	return (
		<section className="domains">
			<div className="container">
				<div className="domains__grid">
					<div className="domains__content">
						<span className="domains__label">Expertise</span>
						<h2 className="domains__title">{"Nos domaines d'intervention"}</h2>
						<p className="domains__intro">
							{"GAIA intervient sur des contextes variés et adapte les démarches au niveau de maturité des organisations. Les systèmes de management proposés sont utiles, cohérents et applicables."}
						</p>
						<blockquote className="domains__blockquote">
							{"Un système de management doit être compris, appliqué et porté par les équipes pour être réellement efficace."}
						</blockquote>
					</div>
					<ul className="domains__list">
						{domains.map((domain) => (
							<li key={domain.label} className="domains__item">
								<span className="domains__item-icon">{domain.icon}</span>
								<span className="domains__item-label">{domain.label}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
