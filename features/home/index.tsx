import Hero from './Hero';
import TargetAudience from './TargetAudience';
import Services from './Services';
import Approach from './Approach';
import Domains from './Domains';
import Why from './Why';
import Image from 'next/image';
import './style.scss';

export default function HomePage() {
	return (
		<>
			<div className="home-hero-wrapper">
				<Hero />
				<div className="home-hero-wrapper__image-wrapper">
					<Image
						src={'/bonhomme-hero.webp'}
						alt="GAIA - Audit Conseil Formation"
						fill
						priority={true}
						sizes="(max-width: 768px) 100vw, 50vw"
						quality={85}
						className="home-hero-wrapper__image"
					/>
				</div>
			</div>
			<TargetAudience />
			<Services />
			<Approach />
			<Domains />
			<Why />
		</>
	);
}
