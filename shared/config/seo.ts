// Configuration SEO centralisée pour GAIA
export const siteConfig = {
	name: 'GAIA',
	description:
		'GAIA accompagne les organisations dans la structuration, l\'amélioration et le pilotage de systèmes de management adaptés à leurs réalités opérationnelles. Audit, conseil, accompagnement et formation en ISO, RSE, EPV et systèmes de management intégrés.',
	url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.gaia-audit-conseil.fr',
	ogImage: '/og-image.jpg',
	twitter: {
		handle: '@gaia',
		site: '@gaia'
	},
	keywords: [
		// Marque
		'GAIA',
		'GAIA audit conseil formation',
		
		// Audit & Certification ISO (forte intention commerciale)
		'auditeur iso 20121',
		'audit iso 20121 événementiel',
		'cabinet audit iso 20121',
		'cabinet audit iso 9001',
		'cabinet audit iso 14001',
		'accompagnement certification iso 20121',
		'accompagnement certification iso 9001',
		'accompagnement certification iso 14001',
		'consultant iso 20121 événementiel',
		'consultant iso 9001',
		'consultant iso 14001',
		'auditeur iso 14001',
		'audit interne iso 20121',
		'audit interne iso 9001',
		'audit interne iso 14001',
		'audit blanc iso 20121',
		'audit blanc iso 9001',
		'audit blanc iso 14001',
		'cabinet conseil iso',
		'audit iso 9001 pme',
		'auditeur iso 20121 indépendant',
		'audit iso 20121 événementiel france',
		
		// Problème → Solution
		'préparation audit iso 20121',
		'préparation audit iso 9001',
		'préparation audit iso 14001',
		'réussir audit iso 20121',
		'réussir audit iso 9001',
		'réussir certification iso',
		'non-conformité iso 20121',
		'non-conformité iso 9001',
		'structurer système de management iso',
		'construire système de management iso',
		
		// Label EPV
		'accompagnement label epv',
		'dossier entreprise du patrimoine vivant',
		'audit epv',
		'consultant label epv',
		'obtenir label entreprise du patrimoine vivant',
		'critères label epv',
		'accompagnement epv artisan',
		
		// RSE
		'accompagnement rse pme',
		'audit rse entreprise',
		'consultant rse pme',
		'mise en place démarche rse',
		'rse événementiel',
		'label rse',
		'consultant iso rse pme',
		
		// Formation
		'formation audit iso 20121',
		'formation audit iso 9001',
		'formation audit iso 14001',
		'formation auditeur interne iso',
		'formation iso 14001 pme',
		'formation rse entreprise',
		
		// Expertise / Contenu
		'norme iso 20121 explication',
		'audit iso 20121 exemple',
		'différences iso 14001 et iso 20121',
		'critères label epv',
		'audit epv exemple',
		
		// Général
		'systèmes de management',
		'certification',
		'labellisation',
		'QSE',
		'management intégré',
		'diagnostic maturité',
		'accompagnement organisation',

		'auditeur iso 20121 france',
		'cabinet audit iso france',
		'consultant iso france',
		'accompagnement certification iso france',
		'audit epv france',
	  ],
};

// Métadonnées par défaut
export const defaultMetadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`
	},
	description: siteConfig.description,
	keywords: siteConfig.keywords,
	authors: [{ name: siteConfig.name }],
	creator: siteConfig.name,
	publisher: siteConfig.name,
	formatDetection: {
		email: false,
		address: false,
		telephone: false
	},
	alternates: {
		canonical: '/'
	},
	openGraph: {
		type: 'website',
		locale: 'fr_FR',
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
		images: [
			{
				url: siteConfig.ogImage,
				width: 1200,
				height: 630,
				alt: siteConfig.name
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: siteConfig.name,
		description: siteConfig.description,
		creator: siteConfig.twitter.handle,
		site: siteConfig.twitter.site,
		images: [siteConfig.ogImage]
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large' as const,
			'max-snippet': -1
		}
	},
	verification: {
		google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
		yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
		yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION
	}
};

// Helper pour générer les métadonnées de page
export function generatePageMetadata({
	title,
	description,
	path = '',
	image,
	noindex = false
}: {
	title: string;
	description: string;
	path?: string;
	image?: string;
	noindex?: boolean;
}) {
	const fullTitle = `${title} | ${siteConfig.name}`;
	const url = `${siteConfig.url}${path}`;
	const ogImage = image || siteConfig.ogImage;

	return {
		title: { absolute: fullTitle },
		description,
		alternates: {
			canonical: url
		},
		openGraph: {
			title: fullTitle,
			description,
			url,
			images: [
				{
					url: ogImage,
					width: 1200,
					height: 630,
					alt: title
				}
			]
		},
		twitter: {
			title: fullTitle,
			description,
			images: [ogImage]
		},
		robots: {
			index: !noindex,
			follow: !noindex
		}
	};
}
