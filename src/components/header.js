import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import MenuButton from '../components/menubutton';
import ActionBasket from 'material-ui/svg-icons/action/shopping-cart';
import ActionBackToShop from 'material-ui/svg-icons/navigation/arrow-back';
import ActionUser from 'material-ui/svg-icons/social/person';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router'


const styles = {
    button: {
        color: '#fff'

    }
};
@connect((state, props) => ({
    username: state.username
}))
export default class Header extends Component {
    static propTypes = {

    };

    static contextTypes = {
        router: PropTypes.object
    };

    render() {
        const {username} = this.props;

        const BackToShopping = <Link to ="/products" activeClassName="active">
            <FlatButton
                label="К покупкам"
                style={styles.button}
                icon={<ActionBackToShop/>}/>
        </Link>;
        const Basket = <MenuButton link = "/basket" name="Корзина"><ActionBasket/></MenuButton>;
        const SignIn = <MenuButton link = "/signin" name="Войти"><ActionUser/></MenuButton>;

        const settings = {
            showMenuIconButton: true,
            iconElementLeft: BackToShopping,
            iconElementRight: username === '' ? SignIn : <div>{username} {Basket}</div>
        };
        return <AppBar {...settings}/>;
    }
}

