import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/Article/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="home-page">
        <div className="banner">
          <div className="container">
            <h1 className="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>
        <div className="container page">
          <div className="row">

            <div className="col-md-9">
              <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                  <li className="nav-item">
                    <a className="nav-link disabled" >Your Feed</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" >Global Feed</a>
                  </li>
                </ul>
              </div>
              <ArticlesCell />

            </div>

            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>

                <div className="tag-list">
                  <a  className="tag-pill tag-default">programming</a>
                  <a  className="tag-pill tag-default">javascript</a>
                  <a  className="tag-pill tag-default">emberjs</a>
                  <a  className="tag-pill tag-default">angularjs</a>
                  <a  className="tag-pill tag-default">react</a>
                  <a  className="tag-pill tag-default">mean</a>
                  <a  className="tag-pill tag-default">node</a>
                  <a  className="tag-pill tag-default">rails</a>
                </div>
              </div>
            </div>

          </div>
        </div>


      </div>

    </>
  )
}

export default HomePage
