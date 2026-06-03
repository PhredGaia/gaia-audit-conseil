import Image from 'next/image';
import './style.scss';

const items = [
	{
		title: 'Une compréhension fine des exigences',
		description:
			'Analyse des référentiels et de leurs implications concrètes sur votre organisation.',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<circle cx="11" cy="11" r="8" />
				<path d="m21 21-4.35-4.35" />
			</svg>
		)
	},
	{
		title: "Une expérience réelle de l'audit",
		description:
			"Une pratique de terrain qui permet d'identifier les écarts réels, pas théoriques.",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<circle cx="12" cy="8" r="5" />
				<path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5" />
			</svg>
		)
	},
	{
		title: 'Une adaptation aux pratiques existantes',
		description:
			'Les systèmes sont construits à partir de ce qui fonctionne déjà, sans rupture inutile.',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M12 20h9" />
				<path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
			</svg>
		)
	},
	{
		title: 'Un accompagnement sur mesure',
		description:
			'Présence, écoute et ajustement tout au long de la démarche.',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
			</svg>
		)
	}
];

export default function Approach() {
	return (
		<section className="approach">
			<div className="container">
				<div className="approach__grid">
					<div className="approach__image-col">
						<div className="approach__image-wrapper">
							<Image
								src="/environment.jpg"
								alt="Approche GAIA"
								fill
								className="approach__image"
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
						</div>
						<div className="approach__quote-card">
							<p>
								{
									"L'objectif est de structurer des démarches claires, efficaces et compréhensibles, sans sur-documentation ni complexité inutile."
								}
							</p>
						</div>
					</div>
					<div className="approach__content">
						<span className="approach__label">Notre Approche</span>
						<h2 className="approach__title">
							Concilier conformité, efficacité et pragmatisme.
						</h2>
						<p className="approach__subtitle">
							{
								"GAIA s'appuie sur une double posture d'auditeur et d'accompagnant, permettant de conjuguer exigence des référentiels et compréhension des réalités opérationnelles."
							}
						</p>
						<ul className="approach-list">
							{items.map((item) => (
								<li key={item.title}>
									<span className="approach-list__icon">
										{item.icon}
									</span>
									<div className="approach-list__content">
										<span className="approach-list__title">
											{item.title}
										</span>
										<span className="approach-list__description">
											{item.description}
										</span>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
