'use client';

import { useState } from 'react';
import './style.scss';
import Image from 'next/image';
import Link from 'next/link';
import SanityImage from '@shared/components/SanityImage';
import { SanityImage as SanityImageType } from '@types/sanity';

interface FormationCardProps {
	title: string;
	duree?: string;
	descriptifApprentissage?: string;
	methodologie?: string;
	image?: SanityImageType | null;
	defaultExpanded?: boolean;
}

export default function FormationCard({
	title,
	duree,
	descriptifApprentissage,
	methodologie,
	image,
	defaultExpanded = false,
}: FormationCardProps) {
	const [isExpanded, setIsExpanded] = useState(defaultExpanded);

	return (
		<div className={`formation-card${isExpanded ? ' formation-card--expanded' : ''}`}>
			<button
				className="formation-card__header"
				onClick={() => setIsExpanded(!isExpanded)}
				aria-expanded={isExpanded}
			>
				<span className="formation-card__dot" aria-hidden="true" />
				<h3 className="formation-card__title">{title}</h3>
				<svg
					className={`formation-card__chevron${isExpanded ? ' formation-card__chevron--open' : ''}`}
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
				>
					<path d="m6 9 6 6 6-6"/>
				</svg>
			</button>

			<div className="formation-card__body">
				<div className="formation-card__inner">
					<div className="formation-card__left">
						<div className="formation-card__image-wrapper">
							{image ? (
								<SanityImage
									image={image}
									alt={title}
									width={600}
									height={400}
									className="formation-card__image"
									sizes="(max-width: 768px) 100vw, 400px"
								/>
							) : (
								<Image
									src="/formation.jpg"
									alt={title}
									fill
									className="formation-card__image"
									sizes="(max-width: 768px) 100vw, 400px"
								/>
							)}
						</div>
					</div>

					<div className="formation-card__right">
						{descriptifApprentissage && (
							<p className="formation-card__description text-level-2">
								{descriptifApprentissage}
							</p>
						)}

						{duree && (
							<div className="formation-card__meta">
								<span className="formation-card__meta-item">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
										<circle cx="12" cy="12" r="10"/>
										<polyline points="12 6 12 12 16 14"/>
									</svg>
									{duree}
								</span>
							</div>
						)}

						{methodologie && (
							<div className="formation-card__methodologie">
								<p className="formation-card__methodologie-text text-level-2">{methodologie}</p>
							</div>
						)}

						<Link href="/contact?objet=formation" className="button-primary formation-card__cta">
							Demander un programme
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
