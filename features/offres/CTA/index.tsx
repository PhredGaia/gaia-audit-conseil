import './style.scss';
import Link from 'next/link';

interface OffresCTAProps {
	title?: string;
	text?: string;
	buttonLabel?: string;
	buttonHref?: string;
}

export default function OffresCTA({
	title = 'Un projet ? Une question ?',
	text = 'Discutons de vos besoins et trouvons ensemble la solution la plus adaptée à votre contexte.',
	buttonLabel = 'Nous contacter',
	buttonHref = '/contact',
}: OffresCTAProps) {
	return (
		<section className="offres-cta">
			<div className="container">
				<div className="offres-cta__card">
					<h2 className="offres-cta__title">{title}</h2>
					<p className="offres-cta__text text-level-1">{text}</p>
					<div className="offres-cta__actions">
						<Link href={buttonHref} className="button-primary">
							{buttonLabel}
						</Link>
						<a href="tel:0670893640" className="offres-cta__phone">
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
