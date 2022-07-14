export const schema = gql`
  type TagsOnPost {
    id: String!
    post: Post!
    postId: String!
    tag: Tag!
    tagId: String!
    assignedAt: DateTime!
    assignedById: String!
    author: User!
  }

  type Query {
    tagsOnPosts: [TagsOnPost!]! @skipAuth
    tagsOnPost(id: String!): TagsOnPost @skipAuth
  }

  input CreateTagsOnPostInput {
    postId: String!
    tagId: String!
    assignedAt: DateTime!
    assignedById: String!
  }

  input UpdateTagsOnPostInput {
    postId: String
    tagId: String
    assignedAt: DateTime
    assignedById: String
  }

  type Mutation {
    createTagsOnPost(input: CreateTagsOnPostInput!): TagsOnPost! @skipAuth
    updateTagsOnPost(id: String!, input: UpdateTagsOnPostInput!): TagsOnPost!
      @skipAuth
    deleteTagsOnPost(id: String!): TagsOnPost! @skipAuth
  }
`
