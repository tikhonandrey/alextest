import React from 'react'
import { render } from 'react-dom'
import { renderApp } from "./store/utils";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import routes from './routes'
import {AuthGlobals} from 'redux-auth/material-ui-theme'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import { Provider } from 'react-redux'

const reactRoot = window.document.getElementById("approot");
renderApp()
    .then(({redirectPath, blank} = {}) => {
        if (blank) {
            // if `blank` is true, this is an OAuth redirect and should not
            // be rendered
            return <div>No script</div>;
        } else {
            return (
                <MuiThemeProvider>
                    <Provider store={store} key="provider">
                        <div>
                            <AuthGlobals />
                            {routes}
                        </div>
                    </Provider>
                </MuiThemeProvider>
            );
        }
    })
    .then(appComponent => {
        render(appComponent, reactRoot);
    });
