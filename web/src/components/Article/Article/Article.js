import { Link, routes } from '@redwoodjs/router'

const Article = ({ article, preview }) => {
  return (
    <>
      { preview && <div class="article-preview">
        <div class="article-meta">
          <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
          <div class="info">
            <a href="" class="author">Eric Simons</a>
            <span class="date">January 20th</span>
          </div>
          <button class="btn btn-outline-primary btn-sm pull-xs-right">
            <i class="ion-heart"></i> 29
          </button>
        </div>
        <a href="" class="preview-link">
          <h1>{ article.title }</h1>
          <p>{ article.body.substring(1,100) }...</p>
          <span>Read more...</span>
        </a>
      </div> }
    {!preview && <article>
      <header>
        <h2>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div>{article.body}</div>
      <div>Posted at: {article.createdAt}</div>
    </article>}
    </>
  )
}

export default Article
