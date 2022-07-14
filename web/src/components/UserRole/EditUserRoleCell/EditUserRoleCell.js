import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import UserRoleForm from 'src/components/UserRole/UserRoleForm'

export const QUERY = gql`
  query EditUserRoleById($id: String!) {
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
const UPDATE_USER_ROLE_MUTATION = gql`
  mutation UpdateUserRoleMutation($id: String!, $input: UpdateUserRoleInput!) {
    updateUserRole(id: $id, input: $input) {
      id
      name
      userId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ userRole }) => {
  const [updateUserRole, { loading, error }] = useMutation(
    UPDATE_USER_ROLE_MUTATION,
    {
      onCompleted: () => {
        toast.success('UserRole updated')
        navigate(routes.userRoles())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateUserRole({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit User <i>{userRole.user.firstName} {userRole.user.lastName}</i> Role - (<code>{userRole.id}</code>)
        </h2>
      </header>
      <div className="rw-segment-main">
        <UserRoleForm
          userRole={userRole}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
