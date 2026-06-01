import './style.scss';
import Link from 'next/link';

export default function FormationsCTA() {
	return (
		<section className="formations-cta">
			<div className="container">
				<div className="formations-cta__card">
					<h2 className="formations-cta__title">Besoin d'une formation adaptée ?</h2>
					<p className="formations-cta__text text-level-1">
						Contactez-nous pour discuter de vos besoins et recevoir un programme personnalisé.
					</p>
					<div className="formations-cta__actions">
						<Link href="/contact?objet=formation" className="button-primary">
							Demander un programme
						</Link>
						<a href="tel:0670893640" className="formations-cta__phone">
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
								<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.75a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
							</svg>
							06 70 89 36 40
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
