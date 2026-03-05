'use client';

import { useState, useCallback, useEffect } from 'react';
import './style.scss';
import type { RequestType } from '../types';
import { REQUEST_TYPE_LABELS } from '../types';

interface ContactFormProps {
	defaultRequestType?: RequestType;
}

const REQUEST_TYPES: RequestType[] = ['devis', 'projet', 'formation'];

export default function ContactForm({ defaultRequestType }: ContactFormProps) {
	const [objet, setObjet] = useState<RequestType>(defaultRequestType ?? 'projet');

	useEffect(() => {
		if (defaultRequestType) setObjet(defaultRequestType);
	}, [defaultRequestType]);
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

	const validate = useCallback(() => {
		const next: Record<string, string> = {};
		if (!prenom.trim()) next.prenom = 'Le prénom est requis';
		if (!nom.trim()) next.nom = 'Le nom est requis';
		if (!email.trim()) next.email = 'L’email est requis';
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
				<p className="contact-form__success-text">
					Merci pour votre message. Nous vous recontacterons rapidement.
				</p>
			</div>
		);
	}

	return (
		<form className="contact-form" onSubmit={handleSubmit} noValidate>
			<div className="contact-form__field">
				<label htmlFor="contact-objet" className="contact-form__label">
					Objet de votre demande <span className="contact-form__required">*</span>
				</label>
				<select
					id="contact-objet"
					className="contact-form__select"
					value={objet}
					onChange={(e) => setObjet(e.target.value as RequestType)}
					required
					aria-required
				>
					{REQUEST_TYPES.map((type) => (
						<option key={type} value={type}>
							{REQUEST_TYPE_LABELS[type]}
						</option>
					))}
				</select>
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
					{errors.prenom && (
						<span className="contact-form__error" role="alert">
							{errors.prenom}
						</span>
					)}
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
					{errors.nom && (
						<span className="contact-form__error" role="alert">
							{errors.nom}
						</span>
					)}
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
				{errors.email && (
					<span className="contact-form__error" role="alert">
						{errors.email}
					</span>
				)}
			</div>

			<div className="contact-form__row">
				<div className="contact-form__field">
					<label htmlFor="contact-telephone" className="contact-form__label">
						Téléphone
					</label>
					<input
						id="contact-telephone"
						type="tel"
						className="contact-form__input"
						value={telephone}
						onChange={(e) => setTelephone(e.target.value)}
						aria-invalid={false}
					/>
				</div>
				<div className="contact-form__field">
					<label htmlFor="contact-societe" className="contact-form__label">
						Société
					</label>
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
				{errors.message && (
					<span className="contact-form__error" role="alert">
						{errors.message}
					</span>
				)}
			</div>

			{serverError && (
				<p className="contact-form__error" role="alert">
					{serverError}
				</p>
			)}
			<button type="submit" className="button-primary contact-form__submit" disabled={isLoading}>
				{isLoading ? 'Envoi en cours...' : 'Envoyer'}
			</button>
		</form>
	);
}
