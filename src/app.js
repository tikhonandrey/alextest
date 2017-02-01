import React from 'react'
import { render } from 'react-dom'
import { renderApp } from "./store/utils";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import routes from './routes'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import { Provider } from 'react-redux'

const reactRoot = window.document.getElementById("approot");

render(<MuiThemeProvider>
    <Provider store={store} key="provider">
        <div>
            {routes}
        </div>
    </Provider>
</MuiThemeProvider>, reactRoot);

