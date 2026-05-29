import './style.scss';
import Link from 'next/link';

export default function Why() {
	const paragraphs = [
		"L'approche est pragmatique et structurée, construite à partir du terrain et orientée vers l'amélioration réelle des pratiques, au-delà du simple respect des normes.",
		"Grâce à une expérience terrain multi-référentiels, GAIA intervient sur des contextes variés et adapte les démarches au niveau de maturité des organisations.",
		"Les systèmes de management proposés sont utiles, cohérents et applicables, sans sur-normer ni complexifier inutilement les pratiques existantes."
	];

	return (
		<section className="why">
			<div className="container">
				<div className="why__content-wrapper">
					<div className="why__text-block">
						<span className="why__label">Contact</span>
						<h2 className="why__title">Pourquoi GAIA ?</h2>
						{paragraphs.map((paragraph, index) => (
							<p key={index} className="why__paragraph">{paragraph}</p>
						))}
					</div>
					<div className="why__cta-box">
						<h3 className="why__cta-title">
							Contactez GAIA pour échanger sur vos enjeux et définir un accompagnement adapté.
						</h3>
						<div className="why__cta-actions">
							<Link href="/contact?objet=projet" className="button-primary why__cta-btn">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
								Parlons de votre projet
							</Link>
							<div className="why__cta-divider"><span>ou</span></div>
							<Link href="tel:+33670893640" className="button-tertiary why__cta-btn why__btn-outline">
								Appeler au 06 70 89 36 40
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
							</Link>
						</div>
						<p className="why__cta-trust">Intervention partout en France</p>
					</div>
				</div>
			</div>
		</section>
	);
}
