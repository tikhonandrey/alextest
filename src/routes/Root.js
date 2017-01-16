import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import AppBar from 'material-ui/AppBar';

class Root extends Component {
    static propTypes = {

    };

    state = {
        username: ''
    };

    static childContextTypes = {
        username: PropTypes.string
    };

    getChildContext() {
        return {
            username: this.state.username
        }
    }

    render() {
        return (
            <Provider store={store}>

                <div>
                    <AppBar
                        title="Корзина"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                    {/*todo*/}
                    <div><h1>Авторизация</h1></div>
                    {this.props.children}
                </div>

            </Provider>
        )
    }
}

export default Root