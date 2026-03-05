import './style.scss';
import Hero from '@shared/components/Hero';

export default function FormationsHero() {
	return (
		<Hero>
			<>
				<h1 className="hero__title">Formations professionnelles</h1>
				<p className="hero__description text-level-2">
					Les formations GAIA permettent de comprendre, structurer et faire vivre les systèmes de management au sein des organisations.
					<br /><br />
					Elles s'appuient sur une expérience concrète de l'audit et de l'accompagnement terrain, et privilégient une pédagogie claire, structurée et pragmatique.
				</p>
			</>
		</Hero>
	);
}
