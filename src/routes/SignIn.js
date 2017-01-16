import React, { PropTypes } from 'react'

function SignIn(props) {
    return (
        <div>
            <label about="login" title="Login"/>
            <input type="text" name="login"/>
            <label about="pass" title="Password"/>
            <input type="password" name="pass"/>

            <button type="submit">SignIn</button>
        </div>
    )
}

SignIn.propTypes = {
}

export default SignIn