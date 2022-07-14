import { InputField, SelectField, Label } from '@redwoodjs/forms'

export const QUERY = gql`
  query UserlistsQuery {
    users {
      id
      firstName
      lastName
      email
    }
  }
`

export const beforeQuery = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, ...rest } = props

  return { variables: rest, id: id }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ users, id }) => {
  console.log('user.id', id)
  const userID = id
  return (
    <SelectField
        name="userId"
        className="rw-input"
        errorClassName="rw-input rw-input-error"
        validation={{
          required: true,
        }}
        defaultValue={id}
      >
        <option>Select User...</option>
      {  users.map((item) => {
        // const selecteduser = userID===item.id ? true : false
        // console.log('item.id',item.id,'selecteduser', selecteduser)
        return <option key={item.id} value={item.id} >{item.firstName} {item.lastName} ({item.email}) ({item.id})</option>
      })}

    </SelectField>
  )
}
