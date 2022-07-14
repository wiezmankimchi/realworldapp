export const schema = gql`
  type Comment {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    body: String!
    post: Post!
    postId: String!
    author: User!
    authorId: String!
  }

  type Query {
    comments: [Comment!]! @skipAuth
    comment(id: Int!): Comment @skipAuth
  }

  input CreateCommentInput {
    body: String!
    postId: String!
    authorId: String!
  }

  input UpdateCommentInput {
    body: String
    postId: String
    authorId: String
  }

  type Mutation {
    createComment(input: CreateCommentInput!): Comment! @skipAuth
    updateComment(id: Int!, input: UpdateCommentInput!): Comment! @skipAuth
    deleteComment(id: Int!): Comment! @skipAuth
  }
`
