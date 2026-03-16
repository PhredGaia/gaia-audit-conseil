import './style.scss';
import FormationsHero from './Hero';
import PedagogicalApproach from './PedagogicalApproach';
import FormationsGrid from './FormationsGrid';
import Image from 'next/image';

interface Formation {
	title: string;
	duree?: string;
	descriptifApprentissage?: string;
	methodologie?: string;
}

interface FormationsProps {
	formations?: Formation[];
}

export default function Formations({ formations = [] }: FormationsProps) {
	return (
		<div className="formations">
			<div className="formations-hero-wrapper">
				<FormationsHero />
				<div className="formations-hero-wrapper__image-wrapper">
					<Image
						src={'/bonhomme-formations.webp'}
						alt="GAIA - Audit Conseil Formation"
						fill
						priority={true}
						sizes="(max-width: 768px) 100vw, 50vw"
						quality={85}
						className="formations-hero-wrapper__image"
					/>
				</div>
			</div>
			<PedagogicalApproach />
			{formations.length > 0 && (
				<FormationsGrid formations={formations} />
			)}
		</div>
	);
}
