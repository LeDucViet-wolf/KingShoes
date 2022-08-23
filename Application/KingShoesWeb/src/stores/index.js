import createSagaMiddleware from "redux-saga"
import { configureStore } from '@reduxjs/toolkit'

import rootReducer from "./reducers"
import rootSaga from "./sagas"

// import * as Sentry from "@sentry/react"

// const sentryReduxEnhancer = Sentry.createReduxEnhancer()

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: true,
  // enhancers: [sentryReduxEnhancer]
})

sagaMiddleware.run(rootSaga)

export default store
