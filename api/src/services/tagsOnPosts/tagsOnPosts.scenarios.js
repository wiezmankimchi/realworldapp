export const standard = defineScenario({
  tagsOnPost: {
    one: {
      data: {
        post: {
          create: {
            title: 'String',
            body: 'String',
            author: {
              create: {
                email: 'String5462177',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2022-07-08T14:53:31Z',
              },
            },
          },
        },

        tag: { create: { name: 'String4755479' } },
        author: {
          create: {
            email: 'String6937529',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2022-07-08T14:53:31Z',
          },
        },
      },
    },

    two: {
      data: {
        post: {
          create: {
            title: 'String',
            body: 'String',
            author: {
              create: {
                email: 'String8192938',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2022-07-08T14:53:31Z',
              },
            },
          },
        },

        tag: { create: { name: 'String7530372' } },
        author: {
          create: {
            email: 'String9413256',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2022-07-08T14:53:31Z',
          },
        },
      },
    },
  },
})
