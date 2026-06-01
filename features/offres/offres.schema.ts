export default {
	name: 'offres',
	title: 'Page Offres',
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

		/* ── Hero ── */
		{
			name: 'hero',
			title: 'Hero',
			type: 'object',
			fields: [
				{
					name: 'title',
					title: 'Titre',
					type: 'string',
					initialValue: 'Nos Offres'
				},
				{
					name: 'subtitle',
					title: 'Sous-titre',
					type: 'text',
					initialValue: 'Des solutions adaptées à vos besoins pour structurer, améliorer et piloter vos systèmes de management.'
				}
			]
		},

		/* ── Offre cards ── */
		{
			name: 'offerCards',
			title: 'Offres (Audit, Conseil, Formation)',
			type: 'array',
			description: 'Les 3 sections d\'offres présentées en alternance. Les icônes sont automatiques selon l\'ordre (1er = Audit, 2e = Conseil, 3e = Formation).',
			of: [
				{
					type: 'object',
					name: 'offerCard',
					title: 'Offre',
					fields: [
						{
							name: 'title',
							title: 'Titre',
							type: 'string',
							description: 'Ex : "Audit", "Conseil", "Formation"',
							validation: (Rule: any) => Rule.required()
						},
						{
							name: 'subtitle',
							title: 'Accroche',
							type: 'string',
							description: 'Ex : "Évaluez la conformité et la performance de vos systèmes"',
							validation: (Rule: any) => Rule.required()
						},
						{
							name: 'description',
							title: 'Description',
							type: 'text',
							validation: (Rule: any) => Rule.required()
						},
						{
							name: 'services',
							title: 'Liste des prestations',
							type: 'array',
							description: 'Chaque ligne apparaît avec une coche verte',
							of: [{ type: 'string', title: 'Prestation' }],
							validation: (Rule: any) => Rule.min(1).error('Au moins une prestation requise')
						},
						{
							name: 'benefits',
							title: 'Points clés (tags)',
							type: 'array',
							description: 'Affichés sous forme de pastilles vertes',
							of: [{ type: 'string', title: 'Point clé' }]
						},
						{
							name: 'image',
							title: 'Illustration',
							type: 'image',
							description: 'Si absente, une image par défaut sera utilisée',
							options: { hotspot: true }
						},
						{
							name: 'seoInfo',
							title: 'Texte informatif / SEO (optionnel)',
							type: 'text',
							description: 'Si renseigné, un bouton "Plus d\'infos" apparaît à côté du titre. Le texte est indexé par Google. Ex : "Référentiels concernés : ISO 9001, 14001..."'
						}
					],
					preview: {
						select: {
							title: 'title',
							subtitle: 'subtitle',
							media: 'image'
						}
					}
				}
			]
		},

		/* ── Process ── */
		{
			name: 'process',
			title: 'Section "Notre approche"',
			type: 'object',
			description: 'Les 4 étapes sont fixes. Seuls le titre et le sous-titre sont modifiables.',
			fields: [
				{
					name: 'title',
					title: 'Titre',
					type: 'string',
					initialValue: 'Notre approche'
				},
				{
					name: 'subtitle',
					title: 'Sous-titre',
					type: 'text',
					initialValue: 'Un accompagnement structuré et personnalisé, du premier contact à la réalisation de vos objectifs.'
				}
			]
		},

		/* ── CTA ── */
		{
			name: 'cta',
			title: 'Section CTA (bas de page)',
			type: 'object',
			fields: [
				{
					name: 'title',
					title: 'Titre',
					type: 'string',
					initialValue: 'Un projet ? Une question ?'
				},
				{
					name: 'text',
					title: 'Texte',
					type: 'text',
					initialValue: 'Discutons de vos besoins et trouvons ensemble la solution la plus adaptée à votre contexte.'
				},
				{
					name: 'buttonLabel',
					title: 'Label du bouton',
					type: 'string',
					initialValue: 'Nous contacter'
				},
				{
					name: 'buttonHref',
					title: 'Lien du bouton',
					type: 'string',
					initialValue: '/contact'
				},
				{
					name: 'phoneNumber',
					title: 'Numéro de téléphone (optionnel)',
					type: 'string',
					description: 'Ex : "06 00 00 00 00" — affiché avec un bouton secondaire'
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
				title: title || 'Page Offres',
				subtitle: subtitle || ''
			};
		}
	}
};
