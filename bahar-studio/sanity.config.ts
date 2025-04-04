import {defineConfig, isKeySegment} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

import {internationalizedArray} from 'sanity-plugin-internationalized-array'
import {languageFilter} from '@sanity/language-filter'

export default defineConfig({
  name: 'default',
  title: 'bahar-studio',

  projectId: 'nrv5lo2v',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    internationalizedArray({
      languages: [
        {id: 'it', title: 'Italian'},
        {id: 'en', title: 'English'},
      ],
      defaultLanguages: ['it'],
      fieldTypes: ['string', 'text'],
    }),
    languageFilter({
      supportedLanguages: [
        {id: 'it', title: 'Italian'},
        {id: 'en', title: 'English'},
      ],
      defaultLanguages: ['it'],
      documentTypes: ['menu'],
      filterField: (enclosingType, member, selectedLanguageIds) => {
        if (
          enclosingType.jsonType === 'object' &&
          enclosingType.name.startsWith('internationalizedArray') &&
          'kind' in member
        ) {
          const pathEnd = member.field.path.slice(-2)

          const language =
            pathEnd[1] === 'value' && isKeySegment(pathEnd[0]) ? pathEnd[0]._key : null

          return language ? selectedLanguageIds.includes(language) : false
        }

        if (enclosingType.jsonType === 'object' && enclosingType.name.startsWith('locale')) {
          return selectedLanguageIds.includes(member.name)
        }

        return true
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
