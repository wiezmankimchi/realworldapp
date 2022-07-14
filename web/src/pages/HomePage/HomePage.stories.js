import HomePage from './HomePage'
import { standard as mockData} from './HomePage.mock'

// const standard = () => ( {
  // articles: [ { id: 42, title: "Title 42", body: "lurem ipsum 42" }, { id: 43, title: "Title 43", body: "lurem ipsum 43" }, { id: 44, title: "Title 44", body: "lurem ipsum 44" } ],
// } )

const standard = mockData()

export const generated = () => {
  return <HomePage />
}

export default { title: 'Pages/HomePage' }
