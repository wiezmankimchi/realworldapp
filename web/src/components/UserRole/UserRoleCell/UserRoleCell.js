import UserRole from 'src/components/UserRole/UserRole'

export const QUERY = gql`
  query FindUserRoleById($id: String!) {
    userRole: userRole(id: $id) {
      id
      name
      userId
      createdAt
      updatedAt
      user{
        id
        firstName
        lastName
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>UserRole not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ userRole }) => {
  return <UserRole userRole={userRole} />
}
