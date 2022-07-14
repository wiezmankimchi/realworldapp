export const schema = gql`
  type Post {
    id: String!
    title: String!
    body: String!
    authorId: String!
    createdAt: DateTime!
    updatedAt: DateTime
    tags: [TagsOnPost]!
    comments: [Comment]!
    author: User!
    favoritedBy: [User]
  }

  type Query {
    posts: [Post!]! @skipAuth
    post(id: String!): Post @skipAuth
  }

  input CreatePostInput {
    title: String!
    body: String!
    authorId: String!
  }

  input UpdatePostInput {
    title: String
    body: String
    authorId: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @skipAuth
    updatePost(id: String!, input: UpdatePostInput!): Post! @skipAuth
    deletePost(id: String!): Post! @skipAuth
  }
`
