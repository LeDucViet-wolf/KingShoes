import
React,
{
  useEffect,
  useLocation,
  useNavigationType,
  createRoutesFromChildren,
  matchRoutes
} from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import { Provider } from 'react-redux'
import store from '@/stores'
import { BrowserRouter as Router } from 'react-router-dom'
import * as Sentry from "@sentry/react"
import { BrowserTracing } from "@sentry/tracing"

// Sentry.init({
//   dsn: "https://b572c05111b44dfbb3eeaa1f6edba93e@o1373783.ingest.sentry.io/6680449",
//   // normalizeDepth: 10, // Or however deep you want your state context to be.
//   integrations: [
//     new BrowserTracing({
//       routingInstrumentation: Sentry.reactRouterV6Instrumentation(
//         useEffect,
//         useLocation,
//         useNavigationType,
//         createRoutesFromChildren,
//         matchRoutes,
//       )
//     }),
//   ],
//   tracesSampleRate: 1.0,
// })

// const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)