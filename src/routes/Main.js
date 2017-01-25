import React, { Component, PropTypes } from 'react'
import Header from '../components/header'
import { RouteTransition } from 'react-router-transition';


function Main(props) {
    return <div>
        <Header />
        <RouteTransition
            pathname={props.location.pathname}
            atEnter={{ translateX: 100 }}
            atLeave={{ translateX: -100 }}
            atActive={{ translateX: 0 }}
            mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}>
            {props.children}
        </RouteTransition>
    </div>
}

export default Main