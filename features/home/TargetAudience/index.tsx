import './style.scss';
import Link from 'next/link';

const audiences = [
	{
		title: 'TPE · PME · ETI',
		subtitle: 'Organisations souhaitant structurer ou faire évoluer leurs systèmes de management sans complexité inutile.',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
			</svg>
		),
	},
	{
		title: 'Dirigeants & responsables QSE / RSE',
		subtitle: "Acteurs en charge du pilotage, de la conformité et de l'amélioration continue des démarches internes.",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
			</svg>
		),
	},
	{
		title: 'Organisations en projet de certification',
		subtitle: 'Structures engagées ou en préparation de certification ou de labellisation, quel que soit leur niveau de maturité.',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
			</svg>
		),
	},
];

export default function TargetAudience() {
	return (
		<section className="target-audience">
			<div className="container">
				<div className="target-audience__header">
					<h2 className="target-audience__title">{"À qui s'adresse GAIA ?"}</h2>
					<p className="target-audience__intro">Des organisations aux réalités différentes, avec un même besoin : structurer des démarches utiles et compréhensibles.</p>
				</div>
				<ul className="target-audience__list">
					{audiences.map((item, index) => (
						<li key={index} className="target-audience__card">
							<div className="target-audience__card-icon">
								{item.icon}
							</div>
							<h3 className="target-audience__item-title">{item.title}</h3>
							<p className="target-audience__item-subtitle">{item.subtitle}</p>
						</li>
					))}
				</ul>
				<div className="target-audience__cta">
					<Link href="/offres" className="button-primary">
						Découvrir les offres
					</Link>
				</div>
			</div>
		</section>
	);
}
