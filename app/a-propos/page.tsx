import { Metadata } from 'next';
import { generatePageMetadata } from '@shared/config/seo';
import StructuredData from '@shared/components/StructuredData';
import About from '@features/a-propos';

export const metadata: Metadata = generatePageMetadata({
	title: 'À propos',
	description:
		'Découvrez GAIA : une double posture d\'auditeur et d\'accompagnant pour construire des systèmes de management pragmatiques, adaptés et compris par les équipes.',
	path: '/a-propos'
});

export default function AProposPage() {
	return (
		<>
			<StructuredData
				type="WebPage"
				data={{
					name: 'À propos - GAIA',
					description: 'Découvrez GAIA : une double posture d\'auditeur et d\'accompagnant pour construire des systèmes de management pragmatiques, adaptés et compris par les équipes.'
				}}
			/>
			<About />
		</>
	);
}
