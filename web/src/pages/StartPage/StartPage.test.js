import { render } from '@redwoodjs/testing/web'

import StartPage from './StartPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StartPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartPage />)
    }).not.toThrow()
  })
})
