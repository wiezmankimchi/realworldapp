import { Link, routes } from '@redwoodjs/router'

const formatDatetime = ( value ) => {
  if ( value ) {
    const currentTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const userLocale =
      navigator.languages && navigator.languages.length
        ? navigator.languages[ 0 ]
        : navigator.language
    const valueDate = new Date( value )
    return valueDate.toLocaleString( userLocale, { timeZone: currentTZ } )
  }
}

const Article = ({ article, preview }) => {
  return (
    <>
      { preview && <div className="article-preview">
        <div className="article-meta">
          <Link to={routes.profile()}><img src={article.author.ProfileImage} /></Link>
          <div className="info">
            <Link to={routes.article({id:article.id})}  className="author">{article.author.firstName} {article.author.lastName}</Link>
            <span className="date">{formatDatetime(article.createdAt)}</span>
          </div>
          <button className="btn btn-outline-primary btn-sm pull-xs-right">
            <i className="ion-heart"></i> 29
          </button>
        </div>
         <Link to={routes.article({id:article.id})} className="preview-link">
          <h1>{ article.title }</h1>
          <p>{ article.body.substring(1,150) }...</p>
          <span>Read more...</span>
        </Link>
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
