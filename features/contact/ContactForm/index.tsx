'use client';

import { useState, useCallback, useEffect } from 'react';
import './style.scss';
import type { RequestType } from '../types';
import { REQUEST_TYPE_LABELS } from '../types';

interface ContactFormProps {
	defaultRequestType?: RequestType;
}

const REQUEST_TYPES: RequestType[] = ['devis', 'projet', 'formation'];

const PILL_ICONS: Record<RequestType, JSX.Element> = {
	devis: (
		<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>
		</svg>
	),
	projet: (
		<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
		</svg>
	),
	formation: (
		<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
		</svg>
	),
};

export default function ContactForm({ defaultRequestType }: ContactFormProps) {
	const [objet, setObjet] = useState<RequestType>(defaultRequestType ?? 'projet');
	const [prenom, setPrenom] = useState('');
	const [nom, setNom] = useState('');
	const [email, setEmail] = useState('');
	const [telephone, setTelephone] = useState('');
	const [societe, setSociete] = useState('');
	const [message, setMessage] = useState('');
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [submitted, setSubmitted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [serverError, setServerError] = useState<string | null>(null);

	useEffect(() => {
		if (defaultRequestType) setObjet(defaultRequestType);
	}, [defaultRequestType]);

	const validate = useCallback(() => {
		const next: Record<string, string> = {};
		if (!prenom.trim()) next.prenom = 'Le prénom est requis';
		if (!nom.trim()) next.nom = 'Le nom est requis';
		if (!email.trim()) next.email = "L'email est requis";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Email invalide';
		if (!message.trim()) next.message = 'Le message est requis';
		setErrors(next);
		return Object.keys(next).length === 0;
	}, [prenom, nom, email, message]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!validate()) return;
		setIsLoading(true);
		setServerError(null);
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ objet, prenom, nom, email, telephone, societe, message }),
			});
			if (!res.ok) {
				const data = await res.json();
				setServerError(data.error ?? 'Une erreur est survenue, veuillez réessayer.');
			} else {
				setSubmitted(true);
			}
		} catch {
			setServerError('Une erreur est survenue, veuillez réessayer.');
		} finally {
			setIsLoading(false);
		}
	};

	if (submitted) {
		return (
			<div className="contact-form__success">
				<div className="contact-form__success-icon">
					<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
						<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>
					</svg>
				</div>
				<h3 className="contact-form__success-title">Message envoyé !</h3>
				<p className="contact-form__success-text">
					Merci {prenom}. Nous vous recontacterons dans les 48h.
				</p>
			</div>
		);
	}

	return (
		<form className="contact-form" onSubmit={handleSubmit} noValidate>

			{/* Pills objet */}
			<div className="contact-form__field">
				<label className="contact-form__label">
					Objet de votre demande <span className="contact-form__required">*</span>
				</label>
				<div className="contact-form__pills" role="group" aria-label="Objet de la demande">
					{REQUEST_TYPES.map((type) => (
						<button
							key={type}
							type="button"
							className={`contact-form__pill${objet === type ? ' contact-form__pill--active' : ''}`}
							onClick={() => setObjet(type)}
							aria-pressed={objet === type}
						>
							{PILL_ICONS[type]}
							{REQUEST_TYPE_LABELS[type]}
						</button>
					))}
				</div>
			</div>

			<div className="contact-form__row">
				<div className="contact-form__field">
					<label htmlFor="contact-prenom" className="contact-form__label">
						Prénom <span className="contact-form__required">*</span>
					</label>
					<input
						id="contact-prenom"
						type="text"
						className="contact-form__input"
						value={prenom}
						onChange={(e) => setPrenom(e.target.value)}
						required
						aria-required
						aria-invalid={!!errors.prenom}
					/>
					{errors.prenom && <span className="contact-form__error" role="alert">{errors.prenom}</span>}
				</div>
				<div className="contact-form__field">
					<label htmlFor="contact-nom" className="contact-form__label">
						Nom <span className="contact-form__required">*</span>
					</label>
					<input
						id="contact-nom"
						type="text"
						className="contact-form__input"
						value={nom}
						onChange={(e) => setNom(e.target.value)}
						required
						aria-required
						aria-invalid={!!errors.nom}
					/>
					{errors.nom && <span className="contact-form__error" role="alert">{errors.nom}</span>}
				</div>
			</div>

			<div className="contact-form__field">
				<label htmlFor="contact-email" className="contact-form__label">
					Email <span className="contact-form__required">*</span>
				</label>
				<input
					id="contact-email"
					type="email"
					className="contact-form__input"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					aria-required
					aria-invalid={!!errors.email}
				/>
				{errors.email && <span className="contact-form__error" role="alert">{errors.email}</span>}
			</div>

			<div className="contact-form__row">
				<div className="contact-form__field">
					<label htmlFor="contact-telephone" className="contact-form__label">Téléphone</label>
					<input
						id="contact-telephone"
						type="tel"
						className="contact-form__input"
						value={telephone}
						onChange={(e) => setTelephone(e.target.value)}
					/>
				</div>
				<div className="contact-form__field">
					<label htmlFor="contact-societe" className="contact-form__label">Société</label>
					<input
						id="contact-societe"
						type="text"
						className="contact-form__input"
						value={societe}
						onChange={(e) => setSociete(e.target.value)}
					/>
				</div>
			</div>

			<div className="contact-form__field">
				<label htmlFor="contact-message" className="contact-form__label">
					Message <span className="contact-form__required">*</span>
				</label>
				<textarea
					id="contact-message"
					className="contact-form__textarea"
					rows={5}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					required
					aria-required
					aria-invalid={!!errors.message}
				/>
				{errors.message && <span className="contact-form__error" role="alert">{errors.message}</span>}
			</div>

			{serverError && <p className="contact-form__error" role="alert">{serverError}</p>}

			<button type="submit" className="button-primary contact-form__submit" disabled={isLoading}>
				{isLoading ? (
					<>
						<span className="contact-form__spinner" aria-hidden="true" />
						Envoi en cours…
					</>
				) : 'Envoyer le message'}
			</button>
		</form>
	);
}
