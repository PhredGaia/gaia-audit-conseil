import './style.scss';
import AProposHero from './Hero';
import AboutTheme from './AboutTheme';
import Image from 'next/image';

export default function About() {
	const sections = [
		{
			title: 'Notre démarche',
			description1:
				'Notre démarche repose sur une double posture : celle de l’audit, exigeante et structurante, et celle de l’accompagnement terrain des organisations et des équipes.',
			description2:
				'Cette double légitimité nous permet de concevoir des systèmes pragmatiques, adaptés aux réalités opérationnelles et appropriables par les acteurs concernés.'
		},
		{
			title: 'Une approche du référentiel au terrain',
			description1:
				'Un système de management n’est pas une fin en soi. Il doit s’intégrer naturellement aux modes de fonctionnement existants, apporter de la clarté, soutenir la prise de décision et évoluer avec l’organisation.',
			description2:
				'GAIA privilégie des démarches simples, structurées et utiles, pensées pour être mises en œuvre durablement, au plus près du terrain.'
		},
		{
			title: 'Former pour rendre autonome',
			description1:
				'La formation constitue un pilier central de l’approche GAIA. Elle vise à donner du sens aux exigences, à transmettre une méthode claire et à permettre aux équipes de s’approprier durablement les systèmes de management.',
			description2:
				'Les formations sont conçues comme des leviers d’autonomie, en lien direct avec les pratiques et les problématiques rencontrées sur le terrain.'
		},
		{
			title: 'Une relation de partenariat',
			description1:
				'GAIA intervient comme un partenaire de confiance, dans une logique de collaboration et d’accompagnement sur le long terme.',
			description2:
				'Chaque mission est construite avec les équipes, en tenant compte de la culture de l’organisation, de ses contraintes et de ses objectifs réels.'
		}
	];

	return (
		<div className="about">
			<div className="about-hero-wrapper">
				<AProposHero />
				<div className="about-hero-wrapper__image-wrapper">
					<Image
						src={'/bonhomme-a-propos.png'}
						alt="GAIA - Audit Conseil Formation"
						fill
						priority={true}
						sizes="(max-width: 768px) 100vw, 50vw"
						quality={85}
						className="about-hero-wrapper__image"
					/>
				</div>
			</div>
			<div className="container about__theme-wrapper">
				{sections.map((section, index) => (
					<AboutTheme
						key={index}
						title={section.title}
						description1={section.description1}
						description2={section.description2}
					/>
				))}
			</div>
		</div>
	);
}
