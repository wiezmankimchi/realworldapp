import Header from './Header'

export const generated = () => {
  return <Header />
}
export const authenticated = () => {
  return <Header isAuthenticated={true}/>
}

export default { title: 'Components/Header' }
