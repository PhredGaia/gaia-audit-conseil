import Image from 'next/image';
import Link from 'next/link';
import './style.scss';

const services = [
	{
		title: 'Audit',
		description:
			"Évaluation approfondie de vos pratiques et systèmes existants pour identifier les écarts et opportunités d'amélioration.",
		image: '/audit-consulting.jpg',
		features: ['Audit interne', 'Audit de conformité', 'Audit de certification'],
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
				<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
			</svg>
		),
	},
	{
		title: 'Conseil',
		description:
			"Accompagnement personnalisé dans la structuration et l'évolution de vos systèmes de management.",
		image: '/quality-control.jpg',
		features: ['Diagnostic initial', "Plan d'action", 'Mise en œuvre'],
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
				<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
			</svg>
		),
	},
	{
		title: 'Formation',
		description:
			'Programmes de formation adaptés pour renforcer les compétences de vos équipes en management de la qualité.',
		image: '/formation.jpg',
		features: ['Formation ISO', 'Sensibilisation RSE', 'Ateliers pratiques'],
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
				<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
			</svg>
		),
	},
];

export default function Services() {
	return (
		<section className="services">
			<div className="container">
				<div className="services__header">
					<span className="services__label">Nos Services</span>
					<h2 className="services__title">Des offres adaptées à vos besoins</h2>
					<p className="services__intro">
						{"L'objectif est de structurer des démarches claires, efficaces et compréhensibles, sans sur-documentation ni complexité inutile."}
					</p>
				</div>
				<div className="services__grid">
					{services.map((service) => (
						<div key={service.title} className="services__card">
							<div className="services__card-image">
								<Image src={service.image} alt={service.title} fill className="services__card-img" />
								<div className="services__card-overlay" />
								<div className="services__card-icon">{service.icon}</div>
							</div>
							<div className="services__card-body">
								<h3 className="services__card-title">{service.title}</h3>
								<p className="services__card-desc">{service.description}</p>
								<ul className="services__card-features">
									{service.features.map((f) => (
										<li key={f}>
											<span className="services__card-dot" />
											{f}
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
				<div className="services__cta">
					<Link href="/offres" className="button-primary">
						Découvrir toutes les offres
					</Link>
				</div>
			</div>
		</section>
	);
}
