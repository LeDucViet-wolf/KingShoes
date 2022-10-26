import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import { Provider } from 'react-redux'
import store from '@/stores'
import { BrowserRouter as Router } from 'react-router-dom'
import { positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { AppProvider } from '@/contexts/AppProvider'

const options = {
  timeout: 3000,
  position: positions.TOP_CENTER
};

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <AppProvider initialValues={{}}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </AppProvider>
  </AlertProvider>
)