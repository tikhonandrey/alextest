import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../store'

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
                    {/*todo*/}
                    <div><h1>Корзина</h1></div>
                    <div><h1>Список товаров</h1></div>
                    <div><h1>Авторизация</h1></div>
                    {this.props.children}
                </div>

            </Provider>
        )
    }
}

export default Root