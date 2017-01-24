import React from 'react';
import { connect } from 'react-redux';
import {setUserName} from '../actions/user';
import { EmailSignInForm, OAuthSignInButton } from "redux-auth/material-ui-theme";
import Paper from 'material-ui/Paper';


const style = {
    margin: 20,
    padding: 50,
    display: 'block'
};

export default class Signin extends React.Component {

    render() {
        return (
            <Paper style={style}>
                <OAuthSignInButton/>
                <EmailSignInForm/>
            </Paper>
        );
    }
}