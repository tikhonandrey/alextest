import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import MenuButton from '../components/menubutton';
import Basket from '../components/basket';
import { logOut } from '../actions/user';
import ActionBackToShop from 'material-ui/svg-icons/navigation/arrow-back';
import ActionUser from 'material-ui/svg-icons/social/person';
import ActionExit from 'material-ui/svg-icons/action/exit-to-app';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router'
import IconButton from 'material-ui/IconButton';

const styles = {
    centering: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 0
    },
    button: {
        color: '#fff'
    },
    exit:{
        color: '#fff',
        padding: 12
    }
};


@connect((state, props) => ({
    username: state.username,
    routing: state.routing
}),{ logOut })
export default class Header extends Component {
    static propTypes = {

    };
    state = {
        showBackToProduct: true
    };
    //todo корзина остается при последнем минусе
    //todo стейт корзины хранить в localStorage
    componentWillMount(){
        this.setState({
             showBackToProduct: !~['/products', '/'].indexOf(this.props.routing.locationBeforeTransitions.pathname)
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            showBackToProduct: !~['/products', '/'].indexOf(nextProps.routing.locationBeforeTransitions.pathname)
        })
    }

    render() {
        const {username} = this.props;
        const {showBackToProduct} = this.state;

        const backToShopping = <Link to ="/products" activeClassName="active">
            <FlatButton
                label={window.document.body.clientWidth < 320 ? "" : "К покупкам"}
                style={styles.button}
                icon={
                    <ActionBackToShop/>
                }/>
        </Link>;
        const exit = <IconButton
            tooltipPosition="bottom-center"
            touch
            iconStyle={styles.button}
            onTouchTap={this.props.logOut}
            tooltip="Выход">
            <ActionExit/>
        </IconButton>;
        const signIn = (username == '') ?
            <MenuButton link = "/signin" name="Войти"><ActionUser/></MenuButton> :
            <h1>{username}</h1>;
        const basketLayout = <div style={styles.centering}>
            {signIn}&nbsp;&nbsp;&nbsp;<Basket/>{(username != '') && exit}
        </div>;
        const settings = {
            showMenuIconButton: showBackToProduct,
            iconElementLeft: backToShopping,
            iconStyleLeft: styles.centering,
            iconElementRight: basketLayout
        };


        return <AppBar {...settings}/>;
    }
}

