import {defineField, defineType} from 'sanity'

export const setup = defineType({
  name: 'setup',
  title: 'Set Up',
  type: 'document',

  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'navigationMenu',
      title: 'Navigation Menu',
      type: 'array',
      of: [
        {
          name: 'menuSections',
          title: 'Menu Sections',
          type: 'object',
          fields: [
            defineField({
              name: 'menuSection',
              title: 'Menu Section',
              type: 'internationalizedArrayString',
            }),
          ],
          preview: {
            select: {
              menuSection: 'menuSection',
            },
            prepare(selection) {
              const {menuSection} = selection

              const italianName =
                menuSection?.find((entry) => entry._key === 'it')?.value ||
                menuSection?.[0]?.value ||
                'Unnamed Section'

              return {
                title: italianName,
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'menuButton',
      title: 'Menu Button',
      type: 'internationalizedArrayString',
    }),
  ],
})
