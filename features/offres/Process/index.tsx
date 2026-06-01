import './style.scss';

const STEPS = [
	{
		number: '01',
		title: 'Échange initial',
		description: 'Nous prenons le temps de comprendre votre contexte, vos enjeux et vos objectifs.',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
			</svg>
		),
	},
	{
		number: '02',
		title: 'Diagnostic',
		description: 'Nous analysons votre situation actuelle et identifions les besoins spécifiques.',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
				<polyline points="14 2 14 8 20 8"/>
				<circle cx="11" cy="15" r="3"/>
				<line x1="13.5" y1="17.5" x2="16" y2="20"/>
			</svg>
		),
	},
	{
		number: '03',
		title: 'Proposition adaptée',
		description: 'Nous construisons une offre sur-mesure avec un planning et un budget clairs.',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
				<circle cx="12" cy="12" r="3"/>
			</svg>
		),
	},
	{
		number: '04',
		title: 'Accompagnement',
		description: 'Nous intervenons à vos côtés pour atteindre vos objectifs avec pragmatisme.',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<polyline points="9 11 12 14 22 4"/>
				<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
			</svg>
		),
	},
];

interface ProcessProps {
	title?: string;
	subtitle?: string;
}

export default function Process({
	title = 'Notre approche',
	subtitle = 'Un accompagnement structuré et personnalisé, du premier contact à la réalisation de vos objectifs.',
}: ProcessProps) {
	return (
		<section className="offres-process">
			<div className="container">
				<div className="offres-process__header">
					<h2 className="offres-process__title">{title}</h2>
					<p className="offres-process__subtitle text-level-1">{subtitle}</p>
				</div>
				<div className="offres-process__steps">
					{STEPS.map((step, index) => (
						<div key={step.number} className="offres-process__step">
							{index < STEPS.length - 1 && (
								<div className="offres-process__connector" aria-hidden="true" />
							)}
							<div className="offres-process__step-card">
								<div className="offres-process__step-top">
									<span className="offres-process__step-icon">{step.icon}</span>
									<span className="offres-process__step-number">{step.number}</span>
								</div>
								<h3 className="offres-process__step-title">{step.title}</h3>
								<p className="offres-process__step-description">{step.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
