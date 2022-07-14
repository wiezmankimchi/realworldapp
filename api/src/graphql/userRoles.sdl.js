export const schema = gql`
  type UserRole {
    id: String!
    name: UserType!
    user: User
    userId: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum UserType {
    admin
    employee
    external
    public
    editor
    publisher
  }

  type Query {
    userRoles: [UserRole!]! @skipAuth
    userRole(id: String!): UserRole @skipAuth
  }

  input CreateUserRoleInput {
    name: UserType!
    userId: String
  }

  input UpdateUserRoleInput {
    name: UserType
    userId: String
  }

  type Mutation {
    createUserRole(input: CreateUserRoleInput!): UserRole! @requireAuth
    updateUserRole(id: String!, input: UpdateUserRoleInput!): UserRole!
      @requireAuth
    deleteUserRole(id: String!): UserRole! @requireAuth
  }
`
