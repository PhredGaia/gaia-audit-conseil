import './style.scss';
import Hero from '@shared/components/Hero';

export default function OffresHero() {
	return (
		<Hero>
			<>
				<h1 className="hero__title">Nos offres</h1>
				<p className="hero__description text-level-2">
					GAIA accompagne les organisations dans la construction et l'amélioration de systèmes de management
					cohérents, utiles et adaptés à leur contexte.
				</p>
			</>
		</Hero>
	);
}
