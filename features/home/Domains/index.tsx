import Image from 'next/image';
import './style.scss';

export default function Domains() {
	const domains = [
		'Qualité',
		'Environnement',
		'Santé et sécurité au travail',
		'Responsabilité sociétale',
		'Événementiel responsable',
		"Métiers d'art et savoir-faire (EPV)"
	];

	return (
		<section className="domains">
			<h2 className="domains__title">Nos domaines d'intervention</h2>
			<div className="domains__wrapper">
				<div className="domains__image-wrapper">
					<Image
						src={'/bonhomme-note.png'}
						alt="GAIA - Audit Conseil Formation"
						fill
						priority={true}
						sizes="(max-width: 768px) 100vw, 50vw"
						quality={85}
						className="approach-domains__image"
					/>
				</div>
				<ul>
					{domains.map((domain, index) => (
						<li key={index}>
							<svg
								width="64"
								height="64"
								viewBox="0 0 64 64"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<circle cx="32" cy="32" r="30" fill="#EF7B45" />
								<path
									d="M18 33.5L27 42L46 23"
									fill="none"
									stroke="#FFFFFF"
									stroke-width="5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							{domain}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
