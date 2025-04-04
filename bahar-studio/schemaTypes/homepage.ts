import {defineField, defineType} from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',

  fields: [
    defineField({name: 'bannerImage', title: 'Banner Image', type: 'image'}),
    defineField({name: 'bannerText', title: 'Banner Text', type: 'string'}),
    defineField({name: 'introText', title: 'Introduction Text', type: 'text'}),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Section Title',
          fields: [
            {name: 'sectionTitle', title: 'Section Title', type: 'string'},
            {name: 'sectionDescription', title: 'Section Description', type: 'text'},
            {name: 'sectionImage', title: 'Section Image', type: 'image'},
          ],
        },
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {type: 'image'}, // Allows image uploads
      ],
      options: {
        layout: 'grid', // The grid layout is maintained
      },
    }),
    defineField({name: 'address', title: 'Address', type: 'text'}),
    defineField({name: 'telephone', title: 'Telephone', type: 'string'}),
    defineField({name: 'facebook', title: 'Facebook', type: 'string'}),
    defineField({name: 'instagram', title: 'Instagram', type: 'string'}),
  ],
})
