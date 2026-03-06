import './style.scss';
import type { ReactNode } from 'react';

interface HeroProps {
	children: ReactNode;
}

export default function Hero({ children }: HeroProps) {
	return (
		<div className="hero">
			<div className="hero__content">
				<div className={`container hero__container--full`}>
					<div
						className={`hero__text-column hero__text-column--full`}
					>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
}
