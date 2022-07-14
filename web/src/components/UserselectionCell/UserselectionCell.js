import { SelectField, InputField } from "@redwoodjs/forms"

export const QUERY = gql`
  query UserSelection {
    users{
      id
      firstName
      lastName
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ users }) => {

//   return <SelectField
//   name="userID"
//   defaultValue={"Select User..."}
//   className="rw-input"
//   errorClassName="rw-input rw-input-error"
//   validation={{
//     required: true,
//   }}
// >
//   {users.map((user) => (
//       <option key={user.id} value={user.id}>
//         {user.firstName} {user.lastName} ({user.email})
//       </option>
//   ))}
// </SelectField>
return <>
  <SelectField></SelectField>
</>
}
