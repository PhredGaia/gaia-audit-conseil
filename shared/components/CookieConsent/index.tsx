'use client';

import { useState, useEffect } from 'react';
import './style.scss';

export default function CookieConsent() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const consent = localStorage.getItem('cookie-consent');
		if (!consent) setOpen(true);
	}, []);

	const accept = () => {
		localStorage.setItem('cookie-consent', 'accepted');
		setOpen(false);
	};

	const refuse = () => {
		localStorage.setItem('cookie-consent', 'refused');
		setOpen(false);
	};

	return (
		<>
			{open && (
				<div className="cookie-consent__banner">
					<div className="cookie-consent__header">
						<span className="cookie-consent__title">Cookies</span>
						<button className="cookie-consent__close" onClick={() => setOpen(false)} aria-label="Fermer">
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
							</svg>
						</button>
					</div>
					<div className="cookie-consent__content">
						<p className="cookie-consent__text">
							Ce site utilise des cookies pour améliorer votre expérience. Vous pouvez accepter ou refuser leur utilisation.
						</p>
						<div className="cookie-consent__actions">
							<button onClick={refuse} className="cookie-consent__btn cookie-consent__btn--refuse">
								Refuser
							</button>
							<button onClick={accept} className="cookie-consent__btn cookie-consent__btn--accept">
								Accepter
							</button>
						</div>
					</div>
				</div>
			)}
			<button
				className={`cookie-consent__pill${open ? ' open' : ''}`}
				onClick={() => setOpen(o => !o)}
				aria-label="Gestion des cookies"
			>
				{open ? (
					<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<line x1="18" y1="6" x2="6" y2="18"/>
						<line x1="6" y1="6" x2="18" y2="18"/>
					</svg>
				) : (
					<svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6l-8-4z" fill="currentColor" opacity="0.2"/>
						<path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6l-8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
						<path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				)}
				<span className="cookie-consent__pill-label">Confidentialité</span>
			</button>
		</>
	);
}
