import React, { Component, PropTypes } from 'react'
import Header from '../components/header'


class Main extends Component {
    render() {

        return (           
            <div>
                <Header />
                {this.props.children}
            </div>          
        )
    }
}

export default Main