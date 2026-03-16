import './style.scss';
import OffresHero from './Hero';
import OfferSection from './OfferSection';
import Image from 'next/image';

interface OfferSectionData {
	title: string;
	description: string;
	items?: {
		title: string;
		list: string[];
	}[];
	ctaBox?: {
		text: string;
		buttonLabel: string;
		buttonHref: string;
	};
}

interface OffresProps {
	sections?: OfferSectionData[];
}

export default function Offres({ sections = [] }: OffresProps) {
	return (
		<div className="offres">
			<div className="offres-hero-wrapper">
				<OffresHero />
				<div className="offres-hero-wrapper__image-wrapper">
					<Image
						src={'/bonhomme-offres.webp'}
						alt="GAIA - Audit Conseil Formation"
						fill
						priority={true}
						sizes="(max-width: 768px) 100vw, 50vw"
						quality={85}
						className="offres-hero-wrapper__image"
					/>
				</div>
			</div>

			{sections.map((section, index) => (
				<OfferSection
					key={index}
					title={section.title}
					description={section.description}
					items={section.items?.map((item) => ({
						label: item.title,
						list: item.list
					}))}
					ctaIntro={section.ctaBox?.text}
					ctaLabel={section.ctaBox?.buttonLabel}
					ctaHref={section.ctaBox?.buttonHref}
				/>
			))}
		</div>
	);
}
