import './main.css'

import * as React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom';
import store from './redux/store'

import { UniversalRouter } from './universal-router'
import StopwatchesDashboard from './components/StopwatchesDashboard'
import StopwatchDetails from './components/StopwatchDetails'

export function Root(props) {
  return (
      <Provider store={store}>
          <UniversalRouter location={props.location}>
              <Route exact path="/">
                  <StopwatchesDashboard />
              </Route>
              <Route path="/stopwatch/:id">
                  <StopwatchDetails />
              </Route>        
          </UniversalRouter> 
      </Provider>
  )
}
