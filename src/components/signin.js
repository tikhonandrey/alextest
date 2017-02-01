import React from 'react';
import { connect } from 'react-redux';
import {setUserNameAndGoShoping,signIn } from '../actions/user';
import { EmailSignInForm } from "redux-auth/material-ui-theme";
import Paper from 'material-ui/Paper';
import FacebookLogin from 'react-facebook-login';


import ActionExitToApp from "material-ui/svg-icons/action/exit-to-app";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";


const style = {
    paper: {
        margin: 20,
        padding: 50,
        display: 'block'
    },
    icon: {
        color: '#000'
    },
    submit:{
        float: "right",
        marginTop: 50
    },
    submitButton: {
        color: '#fff',
        backgroundColor: '#00bcd4'
    }
};


@connect((state, props) => ({}),{ signIn, setUserNameAndGoShoping })
export default class Signin extends React.Component {
    setName=(type)=>(userdata)=>{
        // console.log('userdata: ',userdata);
        this.props.setUserNameAndGoShoping(
            type==='oauth' ? userdata.name : userdata.user.name
        );
    };
    state={
        login: '',
        password:''
    };
    handleSubmit(e){
        e.preventDefault();
        console.log('handleSubmit');
        this.props.signIn(this.state)
        
    }
    handleInput=(field)=>(e, value)=>{
        this.setState({
            [field]: value
        });
    };

    render() {
        return (
            <Paper style={style.paper}>
                <FacebookLogin
                    textButton="FACEBOOK"
                    appId="376365562743158"
                    callback={this.setName('oauth')} />

                <form style={{clear: "both", overflow: "hidden"}}
                      onSubmit={this.handleSubmit.bind(this)}>

                    <TextField
                        type="text"
                        className="email-sign-in-email"
                        ref="login"
                        floatingLabelText="Логин"
                        value={this.state.login}
                        onChange={this.handleInput("login")}
                        fullWidth

                      /> 
                    
                    <TextField
                        type="password"
                        className="email-sign-in-email"
                        ref="password"
                        floatingLabelText="Пароль"
                        value={this.state.password}
                        onChange={this.handleInput("password")}
                        fullWidth

                      />
                   

                    <RaisedButton
                        type="submit"
                        style={style.submit}
                        buttonStyle={style.submitButton}
                        icon={<ActionExitToApp/>}
                        className='email-sign-in-submit'                                 
                        onClick={this.handleSubmit.bind(this)}
                        primary>
                        Войти
                    </RaisedButton>
                </form>
            </Paper>
        );
    }
}