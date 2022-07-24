import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import useScript from './hooks/useScript'
import RoutePages from './routes/RoutePages'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  useScript('../public/lib/jquery/jquery-3.4.1.min.js')
  useScript('../public/lib/bootstrap/bootstrap.bundle.min.js')
  useScript('../public/lib/easing/easing.min.js')
  useScript('../public/lib/owlcarousel/owl.carousel.min.js')
  useScript('../public/mail/jqBootstrapValidation.min.js')
  useScript('../public/mail/contact.js')
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
