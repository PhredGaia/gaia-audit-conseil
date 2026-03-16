import Hero from './Hero';
import TargetAudience from './TargetAudience';
import ApproachAndDomains from './ApproachAndDomains';
import Why from './Why';
import Image from 'next/image';
import './ApproachAndDomains/style.scss';

import './style.scss';

export default function HomePage() {
	const quote1 =
		'Un système de management doit être compris, appliqué et porté par les équipes pour être réellement efficace.';
	const quote2 =
		"L'objectif est de structurer des démarches claires, efficaces et compréhensibles, sans sur-documentation ni complexité inutile.";

	return (
		<>
			<div className="home-hero-wrapper">
				<Hero />
				<div className="home-hero-wrapper__image-wrapper">
					<Image
						src={'/bonhomme-hero.webp'}
						alt="GAIA - Audit Conseil Formation"
						fill
						priority={true}
						sizes="(max-width: 768px) 100vw, 50vw"
						quality={85}
						className="home-hero-wrapper__image"
					/>
				</div>
			</div>
			<TargetAudience />
			<section className="approach-domains__quote approach-domains__quote--first">
				<div className="container">
					<p>{quote2}</p>
				</div>
			</section>
			<ApproachAndDomains />
			<section className="approach-domains__quote">
				<div className="container">
					<p>{quote1}</p>
				</div>
			</section>
			<Why />
		</>
	);
}
