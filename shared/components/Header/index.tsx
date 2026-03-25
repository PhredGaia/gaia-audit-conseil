'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LogoGaia from '@shared/svg/LogoGaia';
import './style.scss';

const CLASS_NAME = 'header';

const baseNavLinks = [
	{ name: 'Accueil', path: '/' },
	{ name: 'Offres', path: '/offres' },
	{ name: 'Formations', path: '/formations' },
	{ name: 'Actualités', path: '/actualites' },
	{ name: 'À propos', path: '/a-propos' }
];

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, bottom: 0 });
	const pathname = usePathname();
	const prevPathnameRef = useRef(pathname);
	const navRef = useRef<HTMLElement>(null);
	const activeLinkRef = useRef<HTMLAnchorElement>(null);

	const isActive = (path: string) => pathname === path;
	const isContactPage = pathname === '/contact';
	const navLinks = isContactPage
		? [...baseNavLinks, { name: 'Contact', path: '/contact' }]
		: baseNavLinks;

	const handleClose = () => {
		setIsClosing(true);
		setTimeout(() => {
			setIsOpen(false);
			setIsClosing(false);
		}, 300);
	};

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	useEffect(() => {
		if (pathname !== prevPathnameRef.current && isOpen) {
			handleClose();
		}
		prevPathnameRef.current = pathname;
	}, [pathname, isOpen]);

	// Détection du scroll pour changer le style du header
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Vérifier l'état initial

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Calcul de la position de l'indicateur actif
	const updateIndicatorPosition = () => {
		if (activeLinkRef.current && navRef.current) {
			const navRect = navRef.current.getBoundingClientRect();
			const linkRect = activeLinkRef.current.getBoundingClientRect();
			
			// Obtenir les styles du lien pour mesurer précisément le texte
			const styles = window.getComputedStyle(activeLinkRef.current);
			
			// Créer un élément temporaire pour mesurer la largeur exacte du texte
			const tempSpan = document.createElement('span');
			tempSpan.style.font = styles.font;
			tempSpan.style.fontSize = styles.fontSize;
			tempSpan.style.fontWeight = styles.fontWeight;
			tempSpan.style.fontFamily = styles.fontFamily;
			tempSpan.style.visibility = 'hidden';
			tempSpan.style.position = 'absolute';
			tempSpan.style.whiteSpace = 'nowrap';
			tempSpan.style.padding = '0';
			tempSpan.style.margin = '0';
			tempSpan.textContent = activeLinkRef.current.textContent?.trim() || '';
			document.body.appendChild(tempSpan);
			const textWidth = tempSpan.getBoundingClientRect().width;
			
			// Obtenir la position exacte du texte à l'intérieur du lien
			// On utilise un Range pour obtenir la position réelle du texte
			const range = document.createRange();
			if (activeLinkRef.current.firstChild) {
				range.selectNodeContents(activeLinkRef.current);
				const textRect = range.getBoundingClientRect();
				
				// Calculer la position par rapport au nav
				const left = textRect.left - navRect.left;
				const width = textRect.width;
				
				document.body.removeChild(tempSpan);
				
				// L'indicateur doit toujours être en bas du nav (bottom: 0)
				setIndicatorStyle({
					left: left,
					width: width,
					bottom: 0
				});
			} else {
				document.body.removeChild(tempSpan);
				setIndicatorStyle({ left: 0, width: 0, bottom: 0 });
			}
		} else {
			setIndicatorStyle({ left: 0, width: 0, bottom: 0 });
		}
	};

	useEffect(() => {
		updateIndicatorPosition();
		
		// Recalculer lors du scroll et du resize
		window.addEventListener('scroll', updateIndicatorPosition);
		window.addEventListener('resize', updateIndicatorPosition);
		
		// Petit délai pour s'assurer que le DOM est rendu
		const timeoutId = setTimeout(updateIndicatorPosition, 100);
		
		return () => {
			window.removeEventListener('scroll', updateIndicatorPosition);
			window.removeEventListener('resize', updateIndicatorPosition);
			clearTimeout(timeoutId);
		};
	}, [pathname, isContactPage, isScrolled]);

	return (
		<header className={`${CLASS_NAME} ${isScrolled ? 'scrolled' : ''}`}>
			<div className="container">
				<div className={`${CLASS_NAME}__inner`}>
					<Link href="/" className={`${CLASS_NAME}__logo`}>
						<LogoGaia width={120} height={48} />
					</Link>

					<nav ref={navRef} className={`${CLASS_NAME}__nav`}>
						<ul>
							{navLinks.map((link) => (
								<li key={link.path}>
									<Link
										ref={isActive(link.path) ? activeLinkRef : null}
										href={link.path}
										className={
											isActive(link.path)
												? `${CLASS_NAME}__link active`
												: `${CLASS_NAME}__link`
										}
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
						{navLinks.some(link => isActive(link.path)) && (
							<div 
								className={`${CLASS_NAME}__active-indicator`}
								style={indicatorStyle}
							></div>
						)}
					</nav>
				</div>

				{!isContactPage && (
					<Link href="/contact?objet=projet" className={"button-primary desktop"}>
						Parlons de votre projet
					</Link>
				)}

				<button
					className={`${CLASS_NAME}__burger ${isOpen ? 'open' : ''} ${isClosing ? 'closing' : ''}`}
					onClick={() => {
						if (isOpen) {
							handleClose();
						} else {
							setIsOpen(true);
						}
					}}
					aria-label={
						isOpen ? 'Fermer le menu' : 'Ouvrir le menu'
					}
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>

		<>
			<div
				className={`${CLASS_NAME}__overlay ${isOpen && !isClosing ? 'open' : ''} ${isClosing ? 'closing' : ''}`}
				onClick={handleClose}
				style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
			/>
			<nav
				className={`${CLASS_NAME}__mobile ${isOpen && !isClosing ? 'open' : ''} ${isClosing ? 'closing' : ''}`}
			>
				<ul>
					{navLinks.map((link, index) => (
						<li 
							key={link.path}
							style={{ transitionDelay: isOpen && !isClosing ? `${0.1 + index * 0.05}s` : '0s' }}
						>
							<Link
								href={link.path}
								className={
									isActive(link.path)
										? `${CLASS_NAME}__link active`
										: `${CLASS_NAME}__link`
								}
							>
								{link.name}
							</Link>
						</li>
					))}
				</ul>

				{!isContactPage && (
					<Link href="/contact?objet=projet" className={"button-primary"}>
						Parlons de votre projet
					</Link>
				)}
			</nav>
		</>
		</header>
	);
}
