// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route, Set } from '@redwoodjs/router'
import UserRolesLayout from 'src/layouts/UserRolesLayout'
import UsersLayout from 'src/layouts/UsersLayout'
import PostsLayout from 'src/layouts/PostsLayout'
import BlogLayout from 'src/layouts/BlogLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={PostsLayout}>
        <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/posts/{id}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/posts/{id}" page={PostPostPage} name="post" />
        <Route path="/posts" page={PostPostsPage} name="posts" />
      </Set>
      <Route path="/settings" page={SettingsPage} name="settings" />
      <Route path="/create-article" page={CreateArticlePage} name="createArticle" />
      {/* <Route path="/register" page={ RegisterPage } name="register" /> */}
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={BlogLayout}>
        {/* <Route path="/article" page={ArticlePage} name="article" /> */}
        <Private unauthenticated="home">
          <Set wrap={UserRolesLayout}>
            <Route path="/admin/user-roles/new" page={UserRoleNewUserRolePage} name="newUserRole" />
            <Route path="/admin/user-roles/{id:String}/edit" page={UserRoleEditUserRolePage} name="editUserRole" />
            <Route path="/admin/user-roles/{id:String}" page={UserRoleUserRolePage} name="userRole" />
            <Route path="/admin/user-roles" page={UserRoleUserRolesPage} name="userRoles" />
          </Set>
          <Set wrap={UsersLayout}>
            <Route path="/admin/users/new" page={UserNewUserPage} name="newUser" />
            <Route path="/admin/users/{id:String}/edit" page={UserEditUserPage} name="editUser" />
            <Route path="/admin/users/{id:String}" page={UserUserPage} name="user" />
            <Route path="/admin/users" page={UserUsersPage} name="users" />
          </Set>
          <Set wrap={PostsLayout}>
            <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
            <Route path="/admin/posts/{id:String}/edit" page={PostEditPostPage} name="editPost" />
            <Route path="/admin/posts/{id:String}" page={PostPostPage} name="post" />
            <Route path="/admin/posts" page={PostPostsPage} name="posts" />
          </Set>
        </Private>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="register" />
        <Route path="/profile" page={ProfilePage} name="profile" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/article/{id:String}" page={ArticlePage} name="article" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
