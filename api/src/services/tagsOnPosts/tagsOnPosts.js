import { db } from 'src/lib/db'

export const tagsOnPosts = () => {
  return db.tagsOnPost.findMany()
}

export const tagsOnPost = ({ id }) => {
  return db.tagsOnPost.findUnique({
    where: { id },
  })
}

export const createTagsOnPost = ({ input }) => {
  return db.tagsOnPost.create({
    data: input,
  })
}

export const updateTagsOnPost = ({ id, input }) => {
  return db.tagsOnPost.update({
    data: input,
    where: { id },
  })
}

export const deleteTagsOnPost = ({ id }) => {
  return db.tagsOnPost.delete({
    where: { id },
  })
}

export const TagsOnPost = {
  post: (_obj, { root }) =>
    db.tagsOnPost.findUnique({ where: { id: root.id } }).post(),
  tag: (_obj, { root }) =>
    db.tagsOnPost.findUnique({ where: { id: root.id } }).tag(),
  author: (_obj, { root }) =>
    db.tagsOnPost.findUnique({ where: { id: root.id } }).author(),
}
