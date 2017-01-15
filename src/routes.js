import React from 'react'
import { Router, Route, IndexRedirect, IndexRoute, Redirect } from 'react-router'
import history from './history'
import Root from './routes/Root'
import NotFound from './routes/NotFound'
import ErrorPage from './routes/ErrorPage'

export default (
    <Router history={history}>
        <Route path = "/" component={Root}>

            <Route path = "error" component={ErrorPage} />
            <Route path = "*" component={NotFound} />
        </Route>
    </Router>
)