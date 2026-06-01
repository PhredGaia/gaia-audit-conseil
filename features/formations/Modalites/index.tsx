import './style.scss';

const MODALITES = [
	{
		title: 'En présentiel',
		description: 'Dans vos locaux ou dans un lieu adapté à la formation',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
				<circle cx="12" cy="10" r="3"/>
			</svg>
		),
	},
	{
		title: 'À distance',
		description: 'Sessions en visioconférence avec supports interactifs',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<rect width="20" height="15" x="2" y="3" rx="2"/>
				<polyline points="8 21 12 17 16 21"/>
			</svg>
		),
	},
	{
		title: 'Intra-entreprise',
		description: 'Formation dédiée à votre équipe, adaptée à votre contexte',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
				<path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
				<path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
				<path d="M10 6h4"/>
				<path d="M10 10h4"/>
				<path d="M10 14h4"/>
				<path d="M10 18h4"/>
			</svg>
		),
	},
	{
		title: 'Sur mesure',
		description: 'Programme personnalisé selon vos besoins spécifiques',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
				<path d="M14 2v4a2 2 0 0 0 2 2h4"/>
				<path d="M10 9H8"/>
				<path d="M16 13H8"/>
				<path d="M16 17H8"/>
			</svg>
		),
	},
];

export default function Modalites() {
	return (
		<section className="formations-modalites">
			<div className="container">
				<div className="formations-modalites__inner">
					<div className="formations-modalites__text">
						<h2 className="formations-modalites__title">Modalités</h2>
						<p className="formations-modalites__description text-level-1">
							Les formations sont proposées en présentiel ou à distance, en intra-entreprise
							ou sur mesure, selon les besoins et le contexte de l'organisation.
						</p>
						<p className="formations-modalites__description text-level-2">
							Des supports pédagogiques sont systématiquement fournis. Les formations peuvent
							également s'inscrire dans un accompagnement global, en lien avec les démarches
							de structuration ou d'amélioration des systèmes de management.
						</p>
					</div>
					<div className="formations-modalites__cards">
						{MODALITES.map((modalite, index) => (
							<div key={index} className="formations-modalites__card">
								<span className="formations-modalites__card-icon">{modalite.icon}</span>
								<h3 className="formations-modalites__card-title">{modalite.title}</h3>
								<p className="formations-modalites__card-description">{modalite.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
