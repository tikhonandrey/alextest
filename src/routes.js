import React from 'react'
import { Router, Route, IndexRedirect, IndexRoute, Redirect } from 'react-router'
import history from './history'
import Main from './routes/Main'
import SignIn from './routes/SignIn'
import Products from './routes/Products'
import NotFound from './routes/NotFound'
import ErrorPage from './routes/ErrorPage'

export default (
    <Router history={history}>
        <Route path = "/" component={Main}>
            <IndexRoute component={Products}/>
            <Route path = "signin" component={SignIn} />
            <Route path = "products" component={Products} />
            <Route path = "basket" component={Products} />

            <Route path = "error" component={ErrorPage} />
            <Route path = "*" component={NotFound} />
        </Route>
    </Router>
)