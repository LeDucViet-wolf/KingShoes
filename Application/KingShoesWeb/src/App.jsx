import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import useScript from './hooks/useScript'
import RoutePages from './routes/RoutePages'
import Header from './components/Header'
import Footer from './components/Footer'
import axios from 'axios'

const App = () => {
  useScript('../public/js/main.js')
  console.log(import.meta.env.VITE_KingShoesAPI)
  axios.get(import.meta.env.VITE_KingShoesAPI + 'customers/get-all').then(res => console.log(res.data))
  return (
    <Router>
      <Header />
      <RoutePages></RoutePages>
      <Footer />
    </Router>
  )
}

export default App
