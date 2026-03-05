import './style.scss';
import Hero from '@shared/components/Hero';
import Link from 'next/link';

export default function() {
	const title = "Construire des systèmes de management utiles, cohérents et réellement applicables au quotidien.";
	const tagline = "Audit, conseil, accompagnement et formation en ISO, RSE, EPV et systèmes de management intégrés.";
	const description = "GAIA accompagne les organisations dans la structuration, l'amélioration et le pilotage de systèmes de management adaptés à leurs réalités opérationnelles partout en France.";
	const buttonOffersLabel = "Découvrir les offres";
	const buttonContactLabel = "Parlons de votre projet";

	return (
		<Hero>
			<>
				<h1 className="hero__title">{title}</h1>
				<p className="hero__tagline text-level-1">{tagline}</p>
				<p className="hero__description text-level-2">{description}</p>
				<div className="hero__ui-container">
					<Link href="/formations" className="button-primary">
						{buttonContactLabel}
					</Link>
					<Link href="/offres" className="button-tertiary">
						{buttonOffersLabel}
					</Link>
				</div>
			</>
		</Hero>
	);
}
