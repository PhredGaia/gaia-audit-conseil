import './style.scss';
import Hero from '@shared/components/Hero';
import ContactForm from './ContactForm';
import type { RequestType } from './types';

interface ContactProps {
	defaultRequestType?: RequestType;
}

export default function Contact({ defaultRequestType }: ContactProps) {
	return (
		<div className="contact">
			<Hero>
				<>
					<div className="hero__badge">
						<span className="hero__badge-dot" />
						<span>Contact</span>
					</div>
					<h1 className="hero__title">Parlons de votre projet</h1>
					<p className="hero__description text-level-1">
						Devis, accompagnement ou formation — nous vous répondons sous 48h.
					</p>
				</>
			</Hero>

			<section className="contact__body">
				<div className="container contact__grid">

					{/* Formulaire */}
					<div className="contact__form-col">
						<p className="eyebrow">Formulaire de contact</p>
						<h2 className="contact__form-title">Décrivez votre besoin</h2>
						<div className="divider-line" style={{ marginBottom: '2rem' }} />
						<ContactForm defaultRequestType={defaultRequestType} />
					</div>

					{/* Panneau d'infos */}
					<aside className="contact__info">
						<div className="contact__info-card">
							<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="contact__info-quote-icon" aria-hidden="true">
								<path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .53-.81 1.24-1.48 2.128-2.01L9.23 6c-.784.36-1.5.837-2.14 1.43-.64.59-1.193 1.26-1.657 2.01-.464.75-.784 1.555-.96 2.41-.176.856-.176 1.73 0 2.62.184.88.54 1.653 1.07 2.318.53.665 1.184 1.16 1.963 1.484.78.326 1.59.426 2.43.305zm8.692 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.94.77-3 .53-.81 1.24-1.48 2.13-2.01L18.923 6c-.784.36-1.498.837-2.138 1.43-.64.59-1.19 1.26-1.655 2.01-.464.75-.784 1.555-.96 2.41-.176.856-.176 1.73 0 2.62.184.88.54 1.653 1.07 2.318.525.665 1.18 1.16 1.96 1.484.78.326 1.59.426 2.43.305z"/>
							</svg>
							<p className="contact__info-quote">
								Chaque mission commence par une conversation.
							</p>
							<div className="contact__info-author">
								<span className="contact__info-author-name">GAIA Audit · Conseil · Formation</span>
							</div>
						</div>

						<div className="contact__info-items">
							<a href="tel:0670893640" className="contact__info-item">
								<span className="contact__info-item-icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
										<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.75a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
									</svg>
								</span>
								<div>
									<span className="contact__info-item-label">Téléphone direct</span>
									<span className="contact__info-item-value">06 70 89 36 40</span>
								</div>
							</a>

							<div className="contact__info-item">
								<span className="contact__info-item-icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
										<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
									</svg>
								</span>
								<div>
									<span className="contact__info-item-label">Disponibilité</span>
									<span className="contact__info-item-value">Lun – Ven, 9h – 18h</span>
								</div>
							</div>

							<div className="contact__info-item">
								<span className="contact__info-item-icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
										<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
									</svg>
								</span>
								<div>
									<span className="contact__info-item-label">Interventions</span>
									<span className="contact__info-item-value">Toute la France</span>
								</div>
							</div>
						</div>

						<div className="contact__info-certifs">
							{['ISO 9001', 'ISO 14001', 'ISO 45001'].map(c => (
								<span key={c} className="contact__info-certif">{c}</span>
							))}
						</div>
					</aside>
				</div>
			</section>
		</div>
	);
}
