import React,{PropTypes} from 'react';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router'

const styles = {
    largeIcon: {
        width: 60,
        height: 60,
    },
    large: {
        width: 120,
        height: 120,
        padding: 30
    }
};
function MenuButton(props) {
    return (
        <Link to = {props.link} activeClassName="active">
            <IconButton
                iconStyle={styles.largeIcon}
                style={styles.large}
                tooltip={props.name}
            >
                {props.children}
            </IconButton>
        </Link>
    )
}

MenuButton.propTypes = {
    name: PropTypes.string,
    link: PropTypes.string
}

export default MenuButton
