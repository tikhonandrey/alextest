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
    centering: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 0
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

        const BackToShopping = <Link to ="/products" activeClassName="active">
            <FlatButton
                label={window.document.body.clientWidth < 320 ? "" : "К покупкам"}
                style={styles.button}
                icon={
                    <ActionBackToShop/>
                }/>
        </Link>;
        const SignIn = <MenuButton link = "/signin" name="Войти"><ActionUser/></MenuButton>;
        const basketLayout = <div style={styles.centering}>
            {SignIn}&nbsp;&nbsp;&nbsp;<Basket/>
        </div>;
        const settings = {
            showMenuIconButton: showBackToProduct,
            iconElementLeft: BackToShopping,
            iconStyleLeft: styles.centering,
            iconElementRight: basketLayout
        };


        return <AppBar {...settings}/>;
    }
}

