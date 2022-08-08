import createSagaMiddleware from "redux-saga"
import { configureStore } from '@reduxjs/toolkit'

import rootReducer from "./reducers"
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: true
})

sagaMiddleware.run(rootSaga)

export default store
