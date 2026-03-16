import Approach from '../Approach';
import Domains from '../Domains';
import Image from 'next/image';
import './style.scss';

export default function ApproachAndDomains() {
	return (
		<section className="approach-domains">
			<div className="container">
				<div className="approach-domains__wrapper">
					<div className="approach-domains__col approach-domains__col--approach">
						<Approach />
					</div>
					<div className="approach-domains__col approach-domains__col--domains">
						<Domains />
					</div>
				</div>
			</div>
			<div className="approach-domains__image-wrapper">
				<Image
					src={'/bonhomme-note.webp'}
					alt="GAIA - Audit Conseil Formation"
					fill
					priority={true}
					sizes="(max-width: 768px) 100vw, 50vw"
					quality={85}
					className="approach-domains__image"
				/>
			</div>
		</section>
	);
}
