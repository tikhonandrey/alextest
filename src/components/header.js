import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import MenuButton from '../components/menubutton';
import Basket from '../components/basket';
import ActionBackToShop from 'material-ui/svg-icons/navigation/arrow-back';
import ActionUser from 'material-ui/svg-icons/social/person';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router'


const styles = {
    username: {
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        color: '#fff'

    }
};


@connect((state, props) => ({
    username: state.username,
    routing: state.routing
}))
export default class Header extends Component {
    static propTypes = {

    };
    state = {
        showBackToProduct: true
    };

    // componentWillReceiveProps(nextProps) {
    //     this.setState({
    //         showBackToProduct: !nextProps.routing.isActive('products')
    //     })
    // }

    render() {
        const {username} = this.props;
        const {showBackToProduct} = this.state;

        const BackToShopping = <Link to ="/products" activeClassName="active">
            <FlatButton
                label="К покупкам"
                style={styles.button}
                icon={<ActionBackToShop/>}/>
        </Link>;
        const SignIn = <MenuButton link = "/signin" name="Войти"><ActionUser/></MenuButton>;
        const basketLayout = <div style={styles.username}>
            {SignIn}&nbsp;&nbsp;&nbsp;<Basket/>
        </div>;
        const settings = {
            showMenuIconButton: showBackToProduct,
            iconElementLeft: BackToShopping,
            iconElementRight: basketLayout
        };
        return <AppBar {...settings}/>;
    }
}

