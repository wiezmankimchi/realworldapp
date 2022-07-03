import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CreateArticlePage = () => {
  return (
    <>
      <MetaTags title="CreateArticle" description="CreateArticle page" />

      <h1>CreateArticlePage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/CreateArticlePage/CreateArticlePage.js</code>
      </p>
      <p>
        My default route is named <code>createArticle</code>, link to me with `
        <Link to={routes.createArticle()}>CreateArticle</Link>`
      </p>
    </>
  )
}

export default CreateArticlePage
