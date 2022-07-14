import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/UserRole/UserRolesCell'
import { timeTag } from 'src/misc/utils'

const DELETE_USER_ROLE_MUTATION = gql`
  mutation DeleteUserRoleMutation($id: String!) {
    deleteUserRole(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const formatEnum = ( values ) => {
  if ( values ) {
    if ( Array.isArray( values ) ) {
      const humanizedValues = values.map( ( value ) => humanize( value ) )
      return humanizedValues.join( ', ' )
    } else {
      return humanize( values )
    }
  }
}

const truncate = ( text ) => {
  let output = text
  if ( text && text.length > MAX_STRING_LENGTH ) {
    output = output.substring( 0, MAX_STRING_LENGTH ) + '...'
  }
  return output
}

const jsonTruncate = ( obj ) => {
  return truncate( JSON.stringify( obj, null, 2 ) )
}

const checkboxInputTag = ( checked ) => {
  return <input type="checkbox" checked={ checked } disabled />
}

const UserRolesList = ( { userRoles } ) => {
  const [ deleteUserRole ] = useMutation( DELETE_USER_ROLE_MUTATION, {
    onCompleted: () => {
      toast.success( 'UserRole deleted' )
    },
    onError: ( error ) => {
      toast.error( error.message )
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [ { query: QUERY } ],
    awaitRefetchQueries: true,
  } )

  const onDeleteClick = ( id ) => {
    if ( confirm( 'Are you sure you want to delete userRole ' + id + '?' ) ) {
      deleteUserRole( { variables: { id } } )
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Role</th>
            <th>User Name</th>
            <th>email</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          { userRoles.map( ( userRole ) => (
            <tr key={ userRole.id }>
              <td>{ truncate( userRole.id ) }</td>
              <td>{ formatEnum( userRole.name ) }</td>
              <td><Link to={ routes.user( { id: userRole.user.id } ) } className="rw-text-blue"><i className="ion-android-person" /> { userRole.user.firstName } { userRole.user.lastName }</Link></td>
              <td>{ userRole.user.email }</td>
              <td>{ timeTag( userRole.createdAt ) }</td>
              <td>{ timeTag( userRole.updatedAt ) }</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={ routes.userRole( { id: userRole.id } ) }
                    title={ 'Show userRole ' + userRole.id + ' detail' }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={ routes.editUserRole( { id: userRole.id } ) }
                    title={ 'Edit userRole ' + userRole.id }
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={ 'Delete userRole ' + userRole.id }
                    className="rw-button rw-button-small rw-button-red"
                    onClick={ () => onDeleteClick( userRole.id ) }
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ) ) }
        </tbody>
      </table>
    </div>
  )
}

export default UserRolesList
