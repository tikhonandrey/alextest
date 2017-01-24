import React, { Component, PropTypes } from 'react'
import Header from '../components/header'


function Main(props) {
    return <div>
        <Header />
        {props.children}
    </div>         
}

export default Main