useAuth
import { useAuth } from "@redwoodjs/auth"
import { Link, routes } from "@redwoodjs/router"
import Footer from "src/components/Footer/Footer"
import Header from "src/components/Header/Header"



const BlogLayout = ( { children } ) => {
  const { isAuthenticated, currentUser, logOut, hasRole } = useAuth()

  return (
    <>
      <Header />
      <main>{ children }</main>
      <Footer />
    </>
  )
}

export default BlogLayout
