import { standard } from "./Profile.mock"

const Profile = () => {
  const user=standard().user
  console.log(user.firstName)

  return (

    <div className="profile-page">

      <div className="user-info">
        <div className="container">
          <div className="row">

            <div className="col-xs-12 col-md-10 offset-md-1">
              <img src={user.ProfileImage} className="user-img" />
              <h4>{user.firstName} {user.lastName}</h4>
              <p>
                Cofounder @GoThinkster, lived in Aol's HQ for a few months, kinda looks like Peeta from the
                Hunger Games
              </p>
              <p>Created:{user.createdAt}  Updated Last:{user.updatedAt}</p>
              <button className="btn btn-sm btn-outline-secondary action-btn">
                <i className="ion-plus-round"></i>
                &nbsp;
                { user.firstName } { user.lastName }
              </button>
            </div>

          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">

          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link active" >My Articles</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" >Favorited Articles</a>
                </li>
              </ul>
            </div>

            <div className="article-preview">
              <div className="article-meta">
                <a ><img src={user.ProfileImage} /></a>
                <div className="info">
                  <a  className="author">{ user.firstName } { user.lastName }</a>
                  <span className="date">January 20th</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                  <i className="ion-heart"></i> 29
                </button>
              </div>
              <a  className="preview-link">
                <h1>How to build webapps that scale</h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
              </a>
            </div>

            <div className="article-preview">
              <div className="article-meta">
                <a ><img src={ user.ProfileImage } /></a>
                <div className="info">
                  <a  className="author">{ user.firstName } { user.lastName }</a>
                  <span className="date">January 20th</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                  <i className="ion-heart"></i> 32
                </button>
              </div>
              <a  className="preview-link">
                <h1>The song you won't ever stop singing. No matter how hard you try.</h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
                <ul className="tag-list">
                  <li className="tag-default tag-pill tag-outline">Music</li>
                  <li className="tag-default tag-pill tag-outline">Song</li>
                </ul>
              </a>
            </div>


          </div>

        </div>
      </div>

    </div>
  )
}

export default Profile
