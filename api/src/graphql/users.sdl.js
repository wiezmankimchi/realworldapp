export const schema = gql`
  type User {
    id: String!
    firstName: String
    lastName: String
    ProfileImage: String
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    updatedAt: DateTime!
    createdAt: DateTime!
    userRoles: [UserRole]
    comments: [Comment]!
    posts: [Post]
    favorites: [Post]!
    tags: [TagsOnPost]!
  }

  type Query {
    users: [User!]! @skipAuth
    user(id: String!): User @skipAuth
  }

  input CreateUserInput {
    firstName: String
    lastName: String
    ProfileImage: String
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
    ProfileImage: String
    email: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @skipAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @skipAuth
    deleteUser(id: String!): User! @skipAuth
  }
`
