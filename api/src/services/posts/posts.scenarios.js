export const standard = defineScenario({
  post: {
    one: {
      data: {
        title: 'String',
        body: 'String',
        author: {
          create: {
            email: 'String9127103',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2022-07-08T14:55:11Z',
          },
        },
      },
    },

    two: {
      data: {
        title: 'String',
        body: 'String',
        author: {
          create: {
            email: 'String6977401',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2022-07-08T14:55:11Z',
          },
        },
      },
    },
  },
})
