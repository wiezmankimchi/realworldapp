useAuth
import { useAuth } from "@redwoodjs/auth"
import { Link, routes } from "@redwoodjs/router"
import Header from "src/components/Header/Header"



const BlogLayout = ( { children } ) => {
  const { isAuthenticated, currentUser, logOut, hasRole } = useAuth()

  return (
    <>
    <Header/>
      <header>
        <div className="flex-between">
          <h1>
            <Link to={ routes.home() }>Redwood Blog</Link>
          </h1>
          { isAuthenticated ? (

            <div>
              <span className="rw-field-error">Logged in as { currentUser.email }</span>{ ' ' }
              { hasRole( 'admin' ) &&
                <>
                  <Link to={ routes.users() } ><button className="rw-button">Users</button></Link>
                  <Link to={ routes.posts() } ><button className="rw-button">Posts</button></Link>
                </>
              }
              <button type="button" onClick={ logOut } className="rw-button">
                Logout
              </button>

            </div>
          ) : (
            <Link to={ routes.login() } ><button className="rw-button">Login</button></Link>
          ) }
        </div>
        <nav>
          <ul>
            <li>
              <Link to={ routes.home() }>Home</Link>
            </li>
            <li>
              <Link to={ routes.about() }>About</Link>
            </li>
            <li>
              <Link to={ routes.contact() }>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{ children }</main>
    </>
  )
}

export default BlogLayout
