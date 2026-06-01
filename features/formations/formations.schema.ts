export default {
	name: 'formations',
	title: 'Page Formations',
	type: 'document',
	fields: [
		{
			name: 'seo',
			title: 'SEO',
			type: 'object',
			fields: [
				{
					name: 'metaTitle',
					title: 'Titre SEO',
					type: 'string',
					validation: (Rule: any) =>
						Rule.max(60).warning('Le titre doit faire moins de 60 caractères')
				},
				{
					name: 'metaDescription',
					title: 'Description SEO',
					type: 'text',
					validation: (Rule: any) =>
						Rule.max(160).warning('La description doit faire moins de 160 caractères')
				},
				{
					name: 'openGraphImage',
					title: 'Image de partage (OG)',
					type: 'image',
					options: { hotspot: true }
				}
			]
		},
		{
			name: 'formations',
			title: 'Formations',
			type: 'array',
			description: 'Liste des formations proposées dans le catalogue',
			of: [
				{
					type: 'object',
					name: 'formation',
					title: 'Formation',
					fields: [
						{
							name: 'title',
							title: 'Titre de la formation',
							type: 'string',
							description: 'Ex : "Systèmes de management et référentiels ISO"',
							validation: (Rule: any) => Rule.required()
						},
						{
							name: 'duree',
							title: 'Durée',
							type: 'string',
							description: 'Ex : "1 à 2 jours" ou "14 heures"'
						},
						{
							name: 'descriptifApprentissage',
							title: 'Description',
							type: 'text',
							description: 'Présentation courte de la formation'
						},
						{
							name: 'methodologie',
							title: 'Méthodologie (bouton i)',
							type: 'text',
							description: 'Texte affiché dans le popup "i" à côté du titre. Ex : approche pédagogique, déroulé de la formation.'
						},
						{
							name: 'image',
							title: 'Illustration',
							type: 'image',
							description: 'Image affichée quand l\'accordion est ouvert (optionnelle)',
							options: { hotspot: true }
						}
					],
					preview: {
						select: {
							title: 'title',
							subtitle: 'duree',
							media: 'image'
						},
						prepare({ title, subtitle }: any) {
							return {
								title: title || 'Sans titre',
								subtitle: subtitle || 'Durée non spécifiée'
							};
						}
					}
				}
			]
		}
	],
	preview: {
		select: {
			title: 'seo.metaTitle',
			subtitle: 'seo.metaDescription'
		},
		prepare({ title, subtitle }: any) {
			return {
				title: title || 'Page Formations',
				subtitle: subtitle || ''
			};
		}
	}
};
