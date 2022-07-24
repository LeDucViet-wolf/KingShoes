import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'

const RoutePages = () => {
  const auth = localStorage.getItem('token')
  return (
    <Routes>
      {
        <>
          <Route path="/" element={<Home />} />
        </>
      }
    </Routes>
  )
}

export default RoutePages
