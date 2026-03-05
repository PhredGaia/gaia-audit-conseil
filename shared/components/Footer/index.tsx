'use client';

import Link from 'next/link';
import './style.scss';

const CLASS_NAME = 'footer';

export default function Footer() {
	return (
		<footer className={CLASS_NAME}>
			<div className="container">
				<div className={`${CLASS_NAME}__top`}>
					<div className={`${CLASS_NAME}__col`}>
						<h3>GAIA</h3>
						<p>
							Audit · Conseil · Formation
							<br />
							Systèmes de management adaptés à vos réalités
							opérationnelles.
						</p>
					</div>

					<div className={`${CLASS_NAME}__col`}>
						<h4>Navigation</h4>
						<ul>
							<li>
								<Link href="/">Accueil</Link>
							</li>
							<li>
								<Link href="/offres">Offres</Link>
							</li>
							<li>
								<Link href="/contact">Contact</Link>
							</li>
						</ul>
					</div>

					<div className={`${CLASS_NAME}__col`}>
						<h4>Contact</h4>
						<ul>
							<li>📧 contact@gaia-audit-conseil.fr</li>
							<li>📞 06 70 89 36 40</li>
						</ul>
						<Link href="/contact">Contactez-nous</Link>
					</div>
				</div>

				<div className={`${CLASS_NAME}__bottom`}>
					<p>© 2026 GAIA. Tous droits réservés.</p>
					<p className="footer__credit">
						Site conçu et développé par{' '}
						<a href="https://www.studioweb15.fr/">Studio Web 15.</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
