import React from 'react'
import ReactDOM   from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import routes from './routes'
import rootSaga from './redux/sagas'
import logger from 'redux-logger'
import rootReducer from './redux/reducers'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore } from 'redux'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware, logger))

const component = (
  <Provider store={store}>
    <Router>
      {routes}
    </Router>
  </Provider>
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(component, document.getElementById('root'))
