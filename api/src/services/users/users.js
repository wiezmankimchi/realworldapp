import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany()
}

export const user = ( { id } ) => {
  return db.user.findUnique( {
    where: { id },
  } )
}

export const createUser = ( { input } ) => {
  return db.user.create( {
    data: input,
  } )
}

export const updateUser = ( { id, input } ) => {
  return db.user.update( {
    data: input,
    where: { id },
  } )
}

export const deleteUser = ( { id } ) => {
  return db.user.delete( {
    where: { id },
  } )
}

export const User = {
  posts: ( _obj, { root } ) =>
    db.user.findUnique( { where: { id: root.id } } ).posts(),
  userRoles: ( _obj, { root } ) =>
    db.user.findUnique( { where: { id: root.id } } ).userRoles(),
  comments: ( _obj, { root } ) =>
    db.user.findUnique( { where: { id: root.id } } ).commnet(),
  favorites: ( _obj, { root } ) =>
    db.user.findUnique( { where: { id: root.id } } ).favorites(),
  tags: ( _obj, { root } ) =>
    db.user.findUnique( { where: { id: root.id } } ).tags(),
}