import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'GAIA - Audit Conseil Formation';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					background: '#1F3A5F',
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					fontFamily: 'Arial, Helvetica, sans-serif',
					gap: 32
				}}
			>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: 32
					}}
				>
					<div
						style={{
							width: 120,
							height: 120,
							borderRadius: 22,
							background: '#1F3A5F',
							border: '3px solid #ffffff',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							fontSize: 96,
							fontWeight: 'bold',
							color: '#ffffff'
						}}
					>
						G
					</div>
					<div
						style={{
							fontSize: 96,
							fontWeight: 'bold',
							color: '#ffffff',
							letterSpacing: 8
						}}
					>
						GAIA
					</div>
				</div>
				<div
					style={{
						fontSize: 32,
						color: '#EF7B45',
						fontWeight: 600,
						letterSpacing: 2
					}}
				>
					Audit · Conseil · Formation
				</div>
				<div
					style={{
						fontSize: 24,
						color: 'rgba(255,255,255,0.7)',
						marginTop: 8
					}}
				>
					ISO · RSE · EPV
				</div>
			</div>
		),
		{ ...size }
	);
}
