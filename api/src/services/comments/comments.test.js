import {
  comments,
  comment,
  createComment,
  updateComment,
  deleteComment,
} from './comments'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('comments', () => {
  scenario('returns all comments', async (scenario) => {
    const result = await comments()

    expect(result.length).toEqual(Object.keys(scenario.comment).length)
  })

  scenario('returns a single comment', async (scenario) => {
    const result = await comment({ id: scenario.comment.one.id })

    expect(result).toEqual(scenario.comment.one)
  })

  scenario('creates a comment', async (scenario) => {
    const result = await createComment({
      input: {
        updatedAt: '2022-07-08T14:54:54Z',
        body: 'String',
        postId: scenario.comment.two.postId,
        authorId: scenario.comment.two.authorId,
      },
    })

    expect(result.updatedAt).toEqual('2022-07-08T14:54:54Z')
    expect(result.body).toEqual('String')
    expect(result.postId).toEqual(scenario.comment.two.postId)
    expect(result.authorId).toEqual(scenario.comment.two.authorId)
  })

  scenario('updates a comment', async (scenario) => {
    const original = await comment({ id: scenario.comment.one.id })
    const result = await updateComment({
      id: original.id,
      input: { updatedAt: '2022-07-09T14:54:54Z' },
    })

    expect(result.updatedAt).toEqual('2022-07-09T14:54:54Z')
  })

  scenario('deletes a comment', async (scenario) => {
    const original = await deleteComment({ id: scenario.comment.one.id })
    const result = await comment({ id: original.id })

    expect(result).toEqual(null)
  })
})
