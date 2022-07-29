import React, {useEffect} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RoutePages from './routes/RoutePages'
import Header from './components/Header'
import Footer from './components/Footer'

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
