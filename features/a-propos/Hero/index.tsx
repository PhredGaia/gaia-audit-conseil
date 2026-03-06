import './style.scss';
import Hero from '@shared/components/Hero';

export default function AProposHero() {
	return (
		<Hero>
			<>
				<h1 className="hero__title">
					GAIA – Audit · Conseil · Formation
				</h1>
				<p className="hero__description text-level-1">
					GAIA accompagne les organisations dans la construction et
					l'évolution de systèmes de management utiles, compris et
					réellement appliqués.
				</p>
				<p className="hero__description text-level-1">
					Notre objectif n'est pas de produire des dispositifs
					théoriques, mais de soutenir les pratiques existantes et les
					enjeux concrets des organisations, dans une logique
					d'amélioration continue.
				</p>
			</>
		</Hero>
	);
}
