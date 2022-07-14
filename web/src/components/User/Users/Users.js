import humanize from 'humanize-string'

import { useMutation, MetaTags } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/User/UsersCell'

import { timeTag } from '/src/misc/utils'

const DELETE_USER_MUTATION = gql`
  mutation DeleteUserMutation($id: String!) {
    deleteUser(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 50

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const UsersList = ({ users }) => {
  console.log(users)
  const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete user ' + id + '?')) {
      deleteUser({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <MetaTags title="Users" />
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Profile Image URL</th>
            <th>Roles</th>
            <th>Updated at</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{truncate(user.id)}</td>
              <td>{truncate(user.firstName)}</td>
              <td>{truncate(user.lastName)}</td>
              <td>{truncate(user.email)}</td>
              <td>{truncate(user.ProfileImage)}</td>
              <td>
                {user.userRoles.length==0 && <Link to={routes.newUserRole({id:user.id})} className="rw-button rw-button-small">NO ROLES</Link>}
                {user.userRoles &&
                  user.userRoles.map((role) =>(
                      <Link
                        key={role.id}
                        to={routes.userRole({ id: role.id })}
                        className="rw-button rw-button-small rw-button-lightgreen"
                      >
                        {role.name}
                      </Link>

                  ))}
              </td>
              {/* <td>{JSON.stringify(user.userRoles)}</td> */}
              <td>{timeTag(user.updatedAt)}</td>
              <td>{timeTag(user.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  {/* <Link
                    to={routes.userRole({ id: userRole.id })}
                    title={'Show userRole ' + userRole.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    User Roles
                  </Link> */}
                  <Link
                    to={routes.user({ id: user.id })}
                    title={'Show user ' + user.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editUser({ id: user.id })}
                    title={'Edit user ' + user.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete user ' + user.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(user.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsersList
