import { siteConfig } from '@shared/config/seo';

interface StructuredDataProps {
	type: 'Organization' | 'WebSite' | 'WebPage' | 'BreadcrumbList' | 'Service';
	data?: Record<string, string | undefined>;
}

export default function StructuredData({
	type,
	data
}: StructuredDataProps) {
	const getStructuredData = () => {
		const baseUrl = siteConfig.url;

		switch (type) {
			case 'Organization':
				return {
					'@context': 'https://schema.org',
					'@type': 'Organization',
					name: siteConfig.name,
					url: baseUrl,
					logo: `${baseUrl}/logo.png`,
					description: siteConfig.description,
					sameAs: [],
					contactPoint: {
						'@type': 'ContactPoint',
						telephone: '+33-6-70-89-36-40',
						email: 'contact@gaia-audit-conseil.fr',
						contactType: 'Customer Service',
						areaServed: 'FR',
						availableLanguage: 'French'
					}
				};

			case 'WebSite':
				return {
					'@context': 'https://schema.org',
					'@type': 'WebSite',
					name: siteConfig.name,
					url: baseUrl,
					description: siteConfig.description
				};

			case 'WebPage':
				if (!data) return null;
				return {
					'@context': 'https://schema.org',
					'@type': 'WebPage',
					name: data.name ?? siteConfig.name,
					description: data.description ?? siteConfig.description,
					url: `${baseUrl}${data.url ?? ''}`
				};

			case 'BreadcrumbList':
				if (!data?.items) return null;
				return {
					'@context': 'https://schema.org',
					'@type': 'BreadcrumbList',
					itemListElement: data.items.map(
						(item: { name: string; url: string }, index: number) => ({
							'@type': 'ListItem',
							position: index + 1,
							name: item.name,
							item: `${baseUrl}${item.url}`
						})
					)
				};

			case 'Service':
				if (!data) return null;
				return {
					'@context': 'https://schema.org',
					'@type': 'ProfessionalService',
					'@id': `${baseUrl}/#organization`,
					name: siteConfig.name,
					description: siteConfig.description,
					url: baseUrl,
					telephone: data.phone,
					email: data.email,
					address: {
						'@type': 'PostalAddress',
						streetAddress: data.address,
						addressCountry: 'FR'
					},
					areaServed: {
						'@type': 'Country',
						name: 'France'
					},
					hasOfferCatalog: {
						'@type': 'OfferCatalog',
						name: 'Services GAIA',
						itemListElement: [
							{
								'@type': 'Offer',
								itemOffered: {
									'@type': 'Service',
									name: 'Audit',
									description: 'Audits internes, audits à blanc, diagnostics de maturité'
								}
							},
							{
								'@type': 'Offer',
								itemOffered: {
									'@type': 'Service',
									name: 'Conseil',
									description: 'Accompagnement dans la construction et l\'amélioration de systèmes de management'
								}
							},
							{
								'@type': 'Offer',
								itemOffered: {
									'@type': 'Service',
									name: 'Formation',
									description: 'Formations opérationnelles en ISO, RSE, EPV et systèmes de management intégrés'
								}
							}
						]
					}
				};

			default:
				return null;
		}
	};

	const structuredData = getStructuredData();

	if (!structuredData) return null;

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
		/>
	);
}
