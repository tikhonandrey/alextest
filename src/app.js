import React from 'react'
import { render } from 'react-dom'
import routes from './routes'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

render(<MuiThemeProvider>{routes}</MuiThemeProvider>, document.getElementById('approot'));