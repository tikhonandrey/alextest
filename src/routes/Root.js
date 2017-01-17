import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import AppBar from 'material-ui/AppBar';
import MenuButton from '../components/menubutton';
import ActionShop from 'material-ui/svg-icons/action/shopping-cart';
import ActionProducts from 'material-ui/svg-icons/action/shop';
import ActionUser from 'material-ui/svg-icons/social/person';



/*
* как обычно продукты и корзина
* жмякаешь на корзину грит залогинтесь для подтверждения покупок
* логинишся
* */
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

    //todo следить за изменением context трудновато

    render() {

        const Basket = <MenuButton link = "/basket" name="Корзина"><ActionShop/></MenuButton>;
        const SignIn = <MenuButton link = "/signin" name="Войти"><ActionUser/></MenuButton>;
        return (
            <Provider store={store}>
                <div>
                    <AppBar

                    >
                        <MenuButton link = "/products" name="К покупкам"><ActionProducts/></MenuButton>
                    </AppBar>
                    {this.props.children}

                </div>
            </Provider>
        )
    }
}

export default Root