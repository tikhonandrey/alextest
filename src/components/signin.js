import React from 'react';
import { connect } from 'react-redux';
import {setUserName} from '../actions/user';
// material ui theme
// import { OAuthSignInButton } from "redux-auth/material-ui-theme";

import { EmailSignInForm } from "redux-auth/default-theme";

@connect((state, props) => ({

}),
{  setUserName }
)
export default class Signin extends React.Component {
    state={
        login:''
    };

    handleChange=(type)=>(e)=>{
           this.setState({
               [type]: e.target.value
           })
    };
    auth=(e)=>{
        e.preventDefault();
        this.props.setUserName(this.state.login)
    };

    render() {
        return (
            <div>
                <EmailSignInForm/>

                <label about="login" title="Login"/>
                <input
                    type="text"
                    name="login"
                    value={this.state.login}
                    onChange={this.handleChange('login')}/>


                <button type="submit" onClick={this.auth}>SignIn</button>

            </div>
        );
    }
}