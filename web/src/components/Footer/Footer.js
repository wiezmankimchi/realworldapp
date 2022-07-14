import {Link, routes} from '@redwoodjs/router'
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Link to={routes.home()} className="logo-font">conduit</Link>
        <span className="attribution">
          An interactive learning project from <a href="\\thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  )
}

export default Footer
