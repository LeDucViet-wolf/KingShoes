import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import useScript from './hooks/useScript'
import RoutePages from './routes/RoutePages'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  useScript('../public/js/main.js')

  return (
    <Router>
      <Header />
      <RoutePages></RoutePages>
      <Footer />
    </Router>
  )
}

export default App
