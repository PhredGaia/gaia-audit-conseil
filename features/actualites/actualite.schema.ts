export default {
	name: 'actualite',
	title: 'Actualité',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Titre',
			type: 'string',
			validation: (Rule: any) => Rule.required()
		},
		{
			name: 'slug',
			title: 'Slug (URL)',
			type: 'slug',
			options: { source: 'title', maxLength: 96 },
			validation: (Rule: any) => Rule.required()
		},
		{
			name: 'publishedAt',
			title: 'Date de publication',
			type: 'datetime',
			validation: (Rule: any) => Rule.required()
		},
		{
			name: 'category',
			title: 'Catégorie',
			type: 'string',
			options: {
				list: [
					{ title: 'Nouvelle norme', value: 'norme' },
					{ title: 'Annonce', value: 'annonce' },
					{ title: 'Événement', value: 'evenement' },
					{ title: 'Article', value: 'article' }
				],
				layout: 'radio'
			},
			validation: (Rule: any) => Rule.required()
		},
		{
			name: 'coverImage',
			title: 'Image principale',
			type: 'image',
			options: { hotspot: true }
		},
		{
			name: 'excerpt',
			title: 'Résumé',
			type: 'text',
			description: 'Court résumé affiché sur la carte (2-3 phrases max)',
			validation: (Rule: any) => Rule.max(300)
		},
		{
			name: 'content',
			title: 'Contenu',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [
						{ title: 'Normal', value: 'normal' },
						{ title: 'Titre H2', value: 'h2' },
						{ title: 'Titre H3', value: 'h3' }
					],
					marks: {
						decorators: [
							{ title: 'Gras', value: 'strong' },
							{ title: 'Italique', value: 'em' }
						]
					}
				},
				{
					type: 'image',
					options: { hotspot: true },
					fields: [
						{
							name: 'caption',
							title: 'Légende',
							type: 'string'
						},
						{
							name: 'alt',
							title: 'Texte alternatif',
							type: 'string'
						}
					]
				}
			]
		},
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
		}
	],
	preview: {
		select: {
			title: 'title',
			category: 'category',
			media: 'coverImage'
		},
		prepare({ title, category, media }: any) {
			const labels: Record<string, string> = {
				norme: 'Nouvelle norme',
				annonce: 'Annonce',
				evenement: 'Événement',
				article: 'Article'
			};
			return {
				title: title || 'Sans titre',
				subtitle: labels[category] || category,
				media
			};
		}
	},
	orderings: [
		{
			title: 'Date de publication (récent → ancien)',
			name: 'publishedAtDesc',
			by: [{ field: 'publishedAt', direction: 'desc' }]
		}
	]
};
