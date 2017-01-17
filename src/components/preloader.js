import React, { Component, PropTypes } from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';


const style = {
    container: {
        position: 'relative'
    },
    refresh: {
        display: 'inline-block',
        position: 'relative'
    }
};
const Preloader =()=>(<RefreshIndicator
    size={50}
    left={0}
    top={0}
    loadingColor="#FF9800"
    status="loading"
    style={style.refresh}
/>);

export default Preloader;