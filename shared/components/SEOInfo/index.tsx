'use client';

import { useState } from 'react';
import './style.scss';

interface SEOInfoProps {
	text: string;
	label?: string;
}

export default function SEOInfo({ text, label }: SEOInfoProps) {
	const [open, setOpen] = useState(false);

	return (
		<div className="seo-info">
			<button
				className={`seo-info__trigger${label ? ' seo-info__trigger--labeled' : ''}`}
				onClick={() => setOpen(!open)}
				aria-label="Informations complémentaires"
				aria-expanded={open}
			>
				<span className="seo-info__trigger-icon">i</span>
				{label && <span className="seo-info__trigger-label">{label}</span>}
			</button>

			{/* Toujours dans le DOM pour que Google puisse indexer le texte */}
			<div className={`seo-info__popup${open ? ' seo-info__popup--open' : ''}`} aria-hidden={!open}>
				<button
					className="seo-info__close"
					onClick={() => setOpen(false)}
					aria-label="Fermer"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<path d="M18 6 6 18M6 6l12 12"/>
					</svg>
				</button>
				<p className="seo-info__text">{text}</p>
			</div>

			{open && (
				<div className="seo-info__overlay" onClick={() => setOpen(false)} aria-hidden="true" />
			)}
		</div>
	);
}
