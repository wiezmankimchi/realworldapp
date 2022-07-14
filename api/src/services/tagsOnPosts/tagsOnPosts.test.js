import {
  tagsOnPosts,
  tagsOnPost,
  createTagsOnPost,
  updateTagsOnPost,
  deleteTagsOnPost,
} from './tagsOnPosts'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('tagsOnPosts', () => {
  scenario('returns all tagsOnPosts', async (scenario) => {
    const result = await tagsOnPosts()

    expect(result.length).toEqual(Object.keys(scenario.tagsOnPost).length)
  })

  scenario('returns a single tagsOnPost', async (scenario) => {
    const result = await tagsOnPost({ id: scenario.tagsOnPost.one.id })

    expect(result).toEqual(scenario.tagsOnPost.one)
  })

  scenario('creates a tagsOnPost', async (scenario) => {
    const result = await createTagsOnPost({
      input: {
        postId: scenario.tagsOnPost.two.postId,
        tagId: scenario.tagsOnPost.two.tagId,
        assignedById: scenario.tagsOnPost.two.assignedById,
      },
    })

    expect(result.postId).toEqual(scenario.tagsOnPost.two.postId)
    expect(result.tagId).toEqual(scenario.tagsOnPost.two.tagId)
    expect(result.assignedById).toEqual(scenario.tagsOnPost.two.assignedById)
  })

  scenario('updates a tagsOnPost', async (scenario) => {
    const original = await tagsOnPost({ id: scenario.tagsOnPost.one.id })
    const result = await updateTagsOnPost({
      id: original.id,
      input: { postId: scenario.tagsOnPost.two.postId },
    })

    expect(result.postId).toEqual(scenario.tagsOnPost.two.postId)
  })

  scenario('deletes a tagsOnPost', async (scenario) => {
    const original = await deleteTagsOnPost({ id: scenario.tagsOnPost.one.id })
    const result = await tagsOnPost({ id: original.id })

    expect(result).toEqual(null)
  })
})
