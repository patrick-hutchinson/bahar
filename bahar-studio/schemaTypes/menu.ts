import {defineField, defineType} from 'sanity'

export const menu = defineType({
  name: 'menu',
  title: 'Menu',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'pdf',
      title: 'PDF',
      type: 'file',
    }),

    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          name: 'menuItem',
          title: 'Menu Item',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Prodotto',
              type: 'internationalizedArrayString',
              description:
                'Leave translations blank if they are the same as the original Italian version.',
            }),
            defineField({
              name: 'ingredients',
              title: 'Ingredienti',
              type: 'internationalizedArrayString',
              description:
                'Leave translations blank if they are the same as the original Italian version.',
            }),
            defineField({
              name: 'price',
              title: 'Prezzo (€)',
              type: 'number',
              validation: (Rule) => Rule.min(0),
            }),
          ],
          preview: {
            select: {
              name: 'name',
              price: 'price',
            },
            prepare(selection: {name?: {_key: string; value: string}[]; price?: number}) {
              const {name, price} = selection

              // Extract the Italian name or fall back to the first available translation
              const italianName =
                name?.find((entry) => entry._key === 'it')?.value || name?.[0]?.value || 'Unnamed'

              return {
                title: `${italianName} - €${price?.toFixed(2) || 'N/A'}`,
              }
            },
          },
        },
      ],
    }),

    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          name: 'menuSection',
          title: 'Menu Section',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Section Title',
              type: 'string',
            }),

            defineField({
              name: 'items',
              title: 'Items',
              type: 'array',
              of: [
                {
                  name: 'menuItem',
                  title: 'Menu Item',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'name',
                      title: 'Prodotto',
                      type: 'internationalizedArrayString',
                      description:
                        'Leave translations blank if they are the same as the original Italian version.',
                    }),
                    defineField({
                      name: 'ingredients',
                      title: 'Ingredienti',
                      type: 'internationalizedArrayString',
                      description:
                        'Leave translations blank if they are the same as the original Italian version.',
                    }),
                    defineField({
                      name: 'price',
                      title: 'Prezzo (€)',
                      type: 'number',
                      validation: (Rule) => Rule.min(0),
                    }),
                  ],
                  preview: {
                    select: {
                      name: 'name',
                      price: 'price',
                    },
                    prepare(selection: {name?: {_key: string; value: string}[]; price?: number}) {
                      const {name, price} = selection

                      // Extract the Italian name or fall back to the first available translation
                      const italianName =
                        name?.find((entry) => entry._key === 'it')?.value ||
                        name?.[0]?.value ||
                        'Unnamed'

                      return {
                        title: `${italianName} - €${price?.toFixed(2) || 'N/A'}`,
                      }
                    },
                  },
                },
              ],
            }),

            defineField({
              name: 'subsections',
              title: 'Subsections',
              type: 'array',
              of: [
                {
                  name: 'menuSubsection',
                  title: 'Menu Subsection',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'title',
                      title: 'Subsection Title',
                      type: 'string',
                    }),

                    defineField({
                      name: 'items',
                      title: 'Items',
                      type: 'array',
                      of: [
                        {
                          name: 'menuItem',
                          title: 'Menu Item',
                          type: 'object',
                          fields: [
                            defineField({
                              name: 'name',
                              title: 'Prodotto',
                              type: 'internationalizedArrayString',
                              description:
                                'Leave translations blank if they are the same as the original Italian version.',
                            }),
                            defineField({
                              name: 'ingredients',
                              title: 'Ingredienti',
                              type: 'internationalizedArrayString',
                              description:
                                'Leave translations blank if they are the same as the original Italian version.',
                            }),
                            defineField({
                              name: 'price',
                              title: 'Prezzo (€)',
                              type: 'number',
                              validation: (Rule) => Rule.min(0),
                            }),
                          ],
                          preview: {
                            select: {
                              name: 'name',
                              price: 'price',
                            },
                            prepare(selection: {
                              name?: {_key: string; value: string}[]
                              price?: number
                            }) {
                              const {name, price} = selection

                              // Extract the Italian name or fall back to the first available translation
                              const italianName =
                                name?.find((entry) => entry._key === 'it')?.value ||
                                name?.[0]?.value ||
                                'Unnamed'

                              return {
                                title: `${italianName} - €${price?.toFixed(2) || 'N/A'}`,
                              }
                            },
                          },
                        },
                      ],
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
})
