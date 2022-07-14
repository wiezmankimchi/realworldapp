import { db } from 'src/lib/db'

export const tags = () => {
  return db.tag.findMany()
}

export const tag = ({ id }) => {
  return db.tag.findUnique({
    where: { id },
  })
}

export const createTag = ({ input }) => {
  return db.tag.create({
    data: input,
  })
}

export const updateTag = ({ id, input }) => {
  return db.tag.update({
    data: input,
    where: { id },
  })
}

export const deleteTag = ({ id }) => {
  return db.tag.delete({
    where: { id },
  })
}

export const Tag = {
  posts: (_obj, { root }) =>
    db.tag.findUnique({ where: { id: root.id } }).posts(),
}
