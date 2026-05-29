import './style.scss';
import Link from 'next/link';

interface OfferSectionProps {
	title: string;
	description: string;
	items?: {
		label: string;
		list: string[];
	}[];
	ctaIntro?: string;
	ctaLabel?: string;
	ctaHref?: string;
}

export default function OfferSection({
	title,
	description,
	items,
	ctaIntro,
	ctaLabel,
	ctaHref
}: OfferSectionProps) {
	return (
		<section className="offer-section">
			<div className="container">
				<h2 className="offer-section__title">{title}</h2>

				{items && items.length > 0 && (
					<div className="offer-section__content-wrapper">
						<div className="offer-section__description-block">
							<p className="offer-section__description text-level-2">{description}</p>
						</div>

						<div className="offer-section__items">
							{items.map((item, index) => (
								<div key={index} className="offer-section__item">
									<h3 className="offer-section__item-title">
										{item.label}
									</h3>
									<ul className="offer-section__item-list">
										{item.list.map((listItem, listIndex) => (
											<li key={listIndex} className="offer-section__item-list-item">
												{listItem}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				)}

				{ctaIntro && ctaLabel && ctaHref && (
					<div className="offer-section__cta">
						<p className="offer-section__cta-intro text-level-2">{ctaIntro}</p>
						<Link href={ctaHref} className="button-primary">
							{ctaLabel}
						</Link>
					</div>
				)}
			</div>
		</section>
	);
}
