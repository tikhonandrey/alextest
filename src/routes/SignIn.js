import React, { PropTypes } from 'react'
import Signin from '../components/signin'
const style = {
    position:'absolute',
    width: '100%',

    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '40px 0 0 0'
};
function SignIn(props) {
    return (
        <div style={style}>
           <Signin />
        </div>
    )
}

SignIn.propTypes = {
}

export default SignIn