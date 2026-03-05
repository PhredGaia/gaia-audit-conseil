'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import './style.scss';

const PHONE = '06 70 89 36 40';
const EMAIL = 'contact@gaia-audit-conseil.fr';

export default function ContactWidget() {
	const [open, setOpen] = useState(false);
	const [copied, setCopied] = useState<'phone' | 'email' | null>(null);
	const [footerVisible, setFooterVisible] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const footer = document.querySelector('footer');
		if (!footer) return;

		const observer = new IntersectionObserver(
			([entry]) => setFooterVisible(entry.isIntersecting),
			{ threshold: 0 }
		);
		observer.observe(footer);
		return () => observer.disconnect();
	}, []);

	if (pathname === '/contact' || footerVisible) return null;

	const copy = async (value: string, type: 'phone' | 'email') => {
		await navigator.clipboard.writeText(value);
		setCopied(type);
		setTimeout(() => setCopied(null), 2000);
	};

	return (
		<>
			{open && (
				<div className="contact-widget__backdrop" onClick={() => setOpen(false)} />
			)}

			<div className="contact-widget">
				{open && (
					<div className="contact-widget__popin">
						<button
							className="contact-widget__item"
							onClick={() => copy(PHONE, 'phone')}
						>
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5 2 2 0 0 1 3.6 1.3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.05 6.05l.95-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
							</svg>
							<span>{copied === 'phone' ? 'Copié !' : PHONE}</span>
						</button>

						<button
							className="contact-widget__item"
							onClick={() => copy(EMAIL, 'email')}
						>
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<rect width="20" height="16" x="2" y="4" rx="2"/>
								<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
							</svg>
							<span>{copied === 'email' ? 'Copié !' : EMAIL}</span>
						</button>
					</div>
				)}

				<button
					className={`contact-widget__trigger${open ? ' open' : ''}`}
					onClick={() => setOpen(v => !v)}
					aria-label="Nous contacter"
				>
					{open ? (
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<line x1="18" y1="6" x2="6" y2="18"/>
							<line x1="6" y1="6" x2="18" y2="18"/>
						</svg>
					) : (
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5 2 2 0 0 1 3.6 1.3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.05 6.05l.95-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
						</svg>
					)}
				</button>
			</div>
		</>
	);
}
