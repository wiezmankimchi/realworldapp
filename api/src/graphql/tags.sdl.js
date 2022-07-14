export const schema = gql`
  type Tag {
    id: String!
    name: String!
    posts: [TagsOnPost]!
  }

  type Query {
    tags: [Tag!]! @skipAuth
    tag(id: String!): Tag @skipAuth
  }

  input CreateTagInput {
    name: String!
  }

  input UpdateTagInput {
    name: String
  }

  type Mutation {
    createTag(input: CreateTagInput!): Tag! @skipAuth
    updateTag(id: String!, input: UpdateTagInput!): Tag! @skipAuth
    deleteTag(id: String!): Tag! @skipAuth
  }
`
