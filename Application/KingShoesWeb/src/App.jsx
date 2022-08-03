import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RoutePages from './routes/RoutePages'
import { Header, Footer } from './components'

const App = () => {
  return (
    <Router>
      <Header />
      <RoutePages></RoutePages>
      <Footer />
    </Router>
  )
}

export default App