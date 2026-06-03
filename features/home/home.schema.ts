export default {
	name: 'home',
	title: 'Page Accueil',
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
						Rule.max(60).warning(
							'Le titre doit faire moins de 60 caractères'
						)
				},
				{
					name: 'metaDescription',
					title: 'Description SEO',
					type: 'text',
					validation: (Rule: any) =>
						Rule.max(160).warning(
							'La description doit faire moins de 160 caractères'
						)
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
			name: 'hero',
			title: 'Bandeau principal',
			type: 'object',
			fields: [
				{
					name: 'title',
					title: 'Titre principal',
					type: 'string',
					initialValue:
						'Construire des systèmes de management utiles, cohérents et réellement applicables au quotidien.'
				},
				{
					name: 'tagline',
					title: 'Sous-titre',
					type: 'string',
					initialValue:
						'Audit, conseil, accompagnement et formation en ISO, RSE, EPV et systèmes de management intégrés.'
				},
				{
					name: 'description',
					title: 'Description',
					type: 'text',
					initialValue:
						"GAIA accompagne les organisations dans la structuration, l'amélioration et le pilotage de systèmes de management adaptés à leurs réalités opérationnelles."
				},
				{
					name: 'buttonOffersLabel',
					title: 'Texte bouton offres',
					type: 'string',
					initialValue: 'Découvrir les offres'
				},
				{
					name: 'buttonContactLabel',
					title: 'Texte bouton contact',
					type: 'string',
					initialValue: 'Me contacter'
				},
				{
					name: 'image',
					title: 'Image principale',
					type: 'image',
					options: { hotspot: true }
				}
			]
		},
		{
			name: 'targetAudience',
			title: "À qui s'adresse GAIA",
			type: 'object',
			fields: [
				{
					name: 'title',
					title: 'Titre',
					type: 'string',
					initialValue: "À qui s'adresse GAIA?"
				},
				{
					name: 'description',
					title: 'Description (une ligne par puce)',
					type: 'text',
					initialValue:
						'les TPE, PME et ETI.\nles dirigeants et responsables QSE / RSE.\nles organisations engagées ou en projet de certification ou de labellisation.'
				},
				{
					name: 'objectives',
					title: 'Objectifs',
					type: 'text',
					initialValue:
						"L'objectif est de structurer des démarches claires, efficaces et compréhensibles, sans sur-documentation ni complexité inutile."
				}
			]
		},
		{
			name: 'approach',
			title: 'Notre approche',
			type: 'object',
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
					type: 'string',
					initialValue:
						'Concilier conformité, efficacité et pragmatisme.'
				},
				{
					name: 'items',
					title: 'Éléments',
					type: 'array',
					initialValue: [
						{ text: 'Une compréhension fine des exigences' },
						{ text: "Une expérience réelle de l'audit" },
						{ text: "Une expérience réelle de l'audit" },
						{ text: 'Une adaptation aux pratiques existantes' }
					],
					of: [
						{
							type: 'object',
							title: 'Élément',
							fields: [
								{
									name: 'icon',
									title: 'Icône',
									type: 'string',
									description:
										"Nom de l'icône (sera géré plus tard)"
								},
								{
									name: 'text',
									title: 'Texte',
									type: 'string'
								}
							]
						}
					]
				},
				{
					name: 'highlight',
					title: 'Texte mis en avant',
					type: 'text',
					initialValue:
						'Un système de management doit être compris, appliqué et porté par les équipes pour être réellement efficace.'
				}
			]
		},
		{
			name: 'domains',
			title: "Domaines d'intervention",
			type: 'array',
			initialValue: [
				{ title: 'Qualité' },
				{ title: 'Environnement' },
				{ title: 'Santé et sécurité au travail' },
				{ title: 'Responsabilité sociétale' },
				{ title: 'Événementiel responsable' },
				{ title: "Métiers d'art et savoir-faire (EPV)" }
			],
			of: [
				{
					type: 'object',
					title: 'Domaine',
					fields: [
						{
							name: 'title',
							type: 'string',
							title: 'Titre'
						},
						{
							name: 'description',
							type: 'text',
							title: 'Description'
						},
						{
							name: 'icon',
							type: 'string',
							title: 'Icône'
						}
					]
				}
			]
		},
		{
			name: 'why',
			title: 'Pourquoi GAIA',
			type: 'object',
			fields: [
				{
					name: 'title',
					title: 'Titre',
					type: 'string',
					initialValue: 'Pourquoi GAIA?'
				},
				{
					name: 'description',
					title: 'Description',
					type: 'text',
					initialValue:
						'Contactez GAIA pour échanger sur vos enjeux et définir un accompagnement adapté.'
				},
				{
					name: 'buttonLabel',
					title: 'Texte du bouton',
					type: 'string',
					initialValue: 'Contacter GAIA'
				}
			]
		},
		{
			name: 'cta',
			title: 'Call to Action',
			type: 'object',
			fields: [
				{
					name: 'title',
					title: 'Titre',
					type: 'string'
				},
				{
					name: 'description',
					title: 'Description',
					type: 'text'
				},
				{
					name: 'buttonLabel',
					title: 'Texte du bouton',
					type: 'string'
				}
			]
		}
	],
	preview: {
		select: {
			title: 'hero.title',
			media: 'hero.image',
			subtitle: 'hero.tagline'
		},
		prepare(selection: any) {
			const { title, media, subtitle } = selection;
			return {
				title: title || 'Accueil',
				media,
				subtitle
			};
		}
	}
};
