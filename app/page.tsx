import { Metadata } from 'next';
import { generatePageMetadata } from '@shared/config/seo';
import StructuredData from '@shared/components/StructuredData';
import HomePage from '@features/home';

export const metadata: Metadata = generatePageMetadata({
	title: 'Accueil',
	description:
		'GAIA accompagne les organisations dans la structuration, l\'amélioration et le pilotage de systèmes de management adaptés à leurs réalités opérationnelles. Audit, conseil, accompagnement et formation en ISO, RSE, EPV et systèmes de management intégrés.',
	path: '/'
});

/**
 * @component Page
 *
 * Root entry point for the home route (`/`). Injects Organization and WebSite
 * structured data for SEO, then renders the full home page feature.
 *
 * @example
 * // Resolved automatically by Next.js App Router for the `/` route.
 * // No manual rendering needed.
 *
 * @example
 * // To preview in isolation during development:
 * <Page />
 */
export default function Page() {
	return (
		<>
			<StructuredData type="Organization" />
			<StructuredData type="WebSite" />
			<HomePage />
		</>
	);
}
