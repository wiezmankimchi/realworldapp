import { render } from '@redwoodjs/testing/web'

import CreateArticlePage from './CreateArticlePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CreateArticlePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreateArticlePage />)
    }).not.toThrow()
  })
})
