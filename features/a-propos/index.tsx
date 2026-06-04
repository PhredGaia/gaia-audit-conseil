import Image from 'next/image';
import AProposHero from './Hero';
import OffresCTA from '@features/offres/CTA';
import './style.scss';

const pillars = [
	{
		title: 'Notre démarche',
		description: `Notre démarche repose sur une double posture : celle de l'audit, exigeante et structurante, et celle de l'accompagnement terrain des organisations et des équipes. Cette double légitimité nous permet de concevoir des systèmes pragmatiques, adaptés aux réalités opérationnelles et appropriables par les acteurs concernés.`,
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
				<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>
			</svg>
		)
	},
	{
		title: 'Une approche du référentiel au terrain',
		description: `Un système de management n'est pas une fin en soi. Il doit s'intégrer naturellement aux modes de fonctionnement existants, apporter de la clarté, soutenir la prise de décision et évoluer avec l'organisation. GAIA privilégie des démarches simples, structurées et utiles, pensées pour être mises en œuvre durablement, au plus près du terrain.`,
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
				<circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
			</svg>
		)
	},
	{
		title: 'Former pour rendre autonome',
		description: `La formation constitue un pilier central de l'approche GAIA. Elle vise à donner du sens aux exigences, à transmettre une méthode claire et à permettre aux équipes de s'approprier durablement les systèmes de management. Les formations sont conçues comme des leviers d'autonomie, en lien direct avec les pratiques et les problématiques rencontrées sur le terrain.`,
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
				<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
			</svg>
		)
	},
	{
		title: 'Une relation de partenariat',
		description: `GAIA intervient comme un partenaire de confiance, dans une logique de collaboration et d'accompagnement sur le long terme. Chaque mission est construite avec les équipes, en tenant compte de la culture de l'organisation, de ses contraintes et de ses objectifs réels.`,
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
				<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
			</svg>
		)
	}
];

const valeurs = [
	{
		title: 'Pragmatisme',
		description: 'Des solutions concrètes, adaptées à vos réalités opérationnelles et immédiatement applicables.',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
				<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
			</svg>
		)
	},
	{
		title: 'Clarté',
		description: 'Une approche transparente et des méthodes structurées pour une compréhension partagée.',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
				<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
			</svg>
		)
	},
	{
		title: 'Fiabilité',
		description: 'Un engagement de qualité et de rigueur dans chaque mission que nous réalisons.',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
				<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
			</svg>
		)
	},
	{
		title: 'Autonomie',
		description: 'Notre objectif : vous rendre autonomes dans le pilotage de vos systèmes de management.',
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
				<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
			</svg>
		)
	}
];

const experiences = [
	{ label: 'Auditeur certifié', detail: 'ISO 9001, 14001, 45001' },
	{ label: 'Expérience terrain', detail: `15+ ans dans l'industrie` },
	{ label: 'Formatrice', detail: 'Systèmes de management' }
];

export default function About() {
	return (
		<div className="about">
			<div className="about-hero-wrapper">
				<AProposHero />
				<div className="about-hero-wrapper__bonhomme">
					<Image
						src="/bonhomme-a-propos.webp"
						alt=""
						fill
						priority
						sizes="260px"
						className="about-hero-wrapper__bonhomme-img"
					/>
				</div>
			</div>

			{/* Mission */}
			<section className="about-mission">
				<div className="container">
					<div className="about-mission__intro">
						<div className="about-mission__text">
							<span className="about__badge">Notre mission</span>
							<h2 className="about-mission__title">
								Des systèmes de management au service de vos réalités
							</h2>
							<p className="about-mission__lead">
								Chez GAIA, nous croyons qu'un système de management efficace est celui qui s'adapte à votre organisation, pas l'inverse. Notre approche combine rigueur méthodologique et pragmatisme terrain.
							</p>
							<p className="about-mission__body">
								Nous accompagnons les TPE, PME et organisations de toutes tailles dans la structuration, l'amélioration et le pilotage de leurs démarches qualité, environnement, santé-sécurité et RSE.
							</p>
						</div>
						<div className="about-mission__image-wrapper">
							<div className="about-mission__image-frame">
								<Image
									src="/entreprise-moderne.jpeg"
									alt="Accompagnement GAIA"
									fill
									className="about-mission__image"
									sizes="(max-width: 1024px) 100vw, 50vw"
								/>
							</div>
							<div className="about-mission__image-deco about-mission__image-deco--br" />
							<div className="about-mission__image-deco about-mission__image-deco--tl" />
						</div>
					</div>

					<div className="about-mission__pillars">
						{pillars.map((pillar) => (
							<div key={pillar.title} className="about-pillar">
								<div className="about-pillar__icon">{pillar.icon}</div>
								<div className="about-pillar__content">
									<h3 className="about-pillar__title">{pillar.title}</h3>
									<div className="about-pillar__bar" />
									<p className="about-pillar__desc">{pillar.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Valeurs */}
			<section className="about-valeurs">
				<div className="container">
					<div className="about-valeurs__header">
						<span className="about__badge about__badge--light">Nos valeurs</span>
						<h2 className="about-valeurs__title">Ce qui guide notre action</h2>
						<p className="about-valeurs__subtitle">
							Des principes fondamentaux qui orientent chacune de nos interventions
						</p>
					</div>
					<div className="about-valeurs__grid">
						{valeurs.map((valeur) => (
							<div key={valeur.title} className="about-valeur">
								<div className="about-valeur__icon">{valeur.icon}</div>
								<h3 className="about-valeur__title">{valeur.title}</h3>
								<p className="about-valeur__desc">{valeur.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Fondatrice */}
			<section className="about-fondatrice">
				<div className="container">
					<div className="about-fondatrice__grid">
						<div className="about-fondatrice__text">
							<span className="about__badge">Le fondateur</span>
							<h2 className="about-fondatrice__title">
								Une expertise forgée sur le terrain
							</h2>
							<p className="about-fondatrice__lead">
								Fort d'une expérience de plus de 15 ans dans l'industrie et le conseil, j'ai fondé GAIA avec une conviction : les systèmes de management doivent servir les organisations, pas les contraindre.
							</p>
							<p className="about-fondatrice__body">
								Mon parcours m'a permis de développer une double compétence d'auditeur et de consultant, avec une approche toujours orientée vers le pragmatisme et l'accompagnement des équipes.
							</p>
							<div className="about-fondatrice__badges">
								{experiences.map((exp) => (
									<div key={exp.label} className="about-fondatrice__badge">
										<span className="about-fondatrice__badge-label">{exp.label}</span>
										<span className="about-fondatrice__badge-detail">{exp.detail}</span>
									</div>
								))}
							</div>
						</div>
						<div className="about-fondatrice__image-wrapper">
							<div className="about-fondatrice__image-frame">
								<Image
									src="/Expert_parcours_professionnel.jpeg"
									alt="Fondateur de GAIA"
									fill
									className="about-fondatrice__image"
									sizes="(max-width: 1024px) 100vw, 50vw"
								/>
							</div>
							<div className="about-fondatrice__label">
								<span className="about-fondatrice__label-name">GAIA</span>
								<span className="about-fondatrice__label-year">Fondée en 2020</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<OffresCTA
				title="Envie d'en savoir plus ?"
				text="Discutons de vos enjeux et de la façon dont GAIA peut vous accompagner dans vos démarches de management."
				buttonLabel="Nous contacter"
				buttonHref="/contact"
			/>
		</div>
	);
}
