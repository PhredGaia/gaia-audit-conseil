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
		</section>
	);
}
