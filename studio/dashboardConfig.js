export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6349f5d4d81dce2acb2fa14d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-4hrtmcqt',
                  apiId: '7246cd0d-686c-4f65-83b6-6343789c26b6'
                },
                {
                  buildHookId: '6349f5d4aa66ac2abef7996c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-qj828hwy',
                  apiId: '589c51bc-31fa-4abe-932b-72f130a40090'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/schnouille/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-qj828hwy.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
