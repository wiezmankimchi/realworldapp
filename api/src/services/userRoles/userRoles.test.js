import {
  userRoles,
  userRole,
  createUserRole,
  updateUserRole,
  deleteUserRole,
} from './userRoles'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userRoles', () => {
  scenario('returns all userRoles', async (scenario) => {
    const result = await userRoles()

    expect(result.length).toEqual(Object.keys(scenario.userRole).length)
  })

  scenario('returns a single userRole', async (scenario) => {
    const result = await userRole({ id: scenario.userRole.one.id })

    expect(result).toEqual(scenario.userRole.one)
  })

  scenario('creates a userRole', async () => {
    const result = await createUserRole({
      input: { updatedAt: '2022-06-18T09:03:16Z' },
    })

    expect(result.updatedAt).toEqual('2022-06-18T09:03:16Z')
  })

  scenario('updates a userRole', async (scenario) => {
    const original = await userRole({ id: scenario.userRole.one.id })
    const result = await updateUserRole({
      id: original.id,
      input: { updatedAt: '2022-06-19T09:03:16Z' },
    })

    expect(result.updatedAt).toEqual('2022-06-19T09:03:16Z')
  })

  scenario('deletes a userRole', async (scenario) => {
    const original = await deleteUserRole({ id: scenario.userRole.one.id })
    const result = await userRole({ id: original.id })

    expect(result).toEqual(null)
  })
})
