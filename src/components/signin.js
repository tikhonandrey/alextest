import React from 'react';
import { connect } from 'react-redux';
import {setUserName} from '../actions/user';
import { EmailSignInForm, OAuthSignInButton } from "redux-auth/material-ui-theme";
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';


const style = {
    paper: {
        margin: 20,
        padding: 50,
        display: 'block',
    },
    icon: {
        color: '#000'
    }
};


@connect((state, props) => ({}),{ setUserName })
export default class Signin extends React.Component {
    setName=(userdata)=>{
        this.props.setUserName(userdata);
    };
    render() {
        return (
            <Paper style={style.paper}>
                <OAuthSignInButton
                    // icon={<IconButton style={style.icon} iconClassName="muidocs-icon-custom-facebook" />}
                    provider="facebook"
                    next={this.setName}>
                    Facebook
                </OAuthSignInButton>
                <EmailSignInForm next={this.setName} />
            </Paper>
        );
    }
}