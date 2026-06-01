import './style.scss';

const APPROCHES = [
	{
		title: 'Expérience concrète',
		description: 'Les formations s\'appuient sur des situations réelles d\'audit, des exemples concrets issus du terrain et des échanges avec les participants.',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
				<path d="M9 18h6"/>
				<path d="M10 22h4"/>
			</svg>
		),
	},
	{
		title: 'Outils utilisables',
		description: 'Les outils proposés sont directement utilisables dans le contexte professionnel, pour une mise en application immédiate.',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
			</svg>
		),
	},
	{
		title: 'Vision claire',
		description: 'L\'objectif est de permettre aux stagiaires de repartir avec une vision claire, des repères solides et une capacité réelle à agir.',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<circle cx="12" cy="12" r="10"/>
				<circle cx="12" cy="12" r="6"/>
				<circle cx="12" cy="12" r="2"/>
			</svg>
		),
	},
	{
		title: 'Pédagogie pragmatique',
		description: 'Former ne consiste pas à réciter une norme. Notre pédagogie est claire, structurée et pragmatique.',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
				<polyline points="17 6 23 6 23 12"/>
			</svg>
		),
	},
];

export default function Approach() {
	return (
		<section className="formations-approach">
			<div className="container">
				<div className="formations-approach__header">
					<h2 className="formations-approach__title">Approche pédagogique</h2>
					<p className="formations-approach__subtitle text-level-1">
						Une méthode fondée sur le concret et l'opérationnel
					</p>
				</div>
				<div className="formations-approach__grid">
					{APPROCHES.map((approche, index) => (
						<div key={index} className="formations-approach__card">
							<span className="formations-approach__card-icon">{approche.icon}</span>
							<h3 className="formations-approach__card-title">{approche.title}</h3>
							<p className="formations-approach__card-description">{approche.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
