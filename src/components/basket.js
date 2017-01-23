import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import ActionBasket from 'material-ui/svg-icons/action/shopping-cart';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import DelIcon from 'material-ui/svg-icons/action/delete';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Badge from 'material-ui/Badge';
import {deleteFromBasket} from '../actions/shoping';
import { connect } from 'react-redux';

const styles = {
    img:{
        borderRadius: 3
    }
};


@connect((state, props) => ({
        products: state.products,
        basketItems: state.basket,
    }),
    { deleteFromBasket }
)
export default class Basket extends React.Component {
    state = {
        open: false,
    };

    handleTouchTap = (event) => {
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleDelete=(basketId)=>()=>{
        this.props.deleteFromBasket(parseInt(basketId));
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };
    render() {
        const {open, anchorEl} = this.state;
        const {basketItems} = this.props;
        const count = basketItems.total;

        const basket = <ActionBasket
            onTouchTap={this.handleTouchTap}
            label="Корзина"
        />;

        return (
            <div>
                {count == 0 ? basket : <Badge
                    badgeContent={count}
                    secondary
                >
                    {basket}
                </Badge>}
                <Popover
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.handleRequestClose}
                    animation={PopoverAnimationVertical}>
                        <List>
                            <Subheader>У Вас в корзине</Subheader>

                            {basketItems.entities.reduce((acc, item, i, array) => {
                                const product = item.product;


                                acc.push(
                                    <ListItem
                                        key={product.id}
                                        leftAvatar={
                                            <Avatar style={styles.img} src={product.img} />}
                                        rightIconButton={
                                            <IconButton
                                                onClick={this.handleDelete(product.id)}
                                                touch
                                                tooltip="Удалить"
                                                tooltipPosition="bottom-left">
                                                <DelIcon color={grey400} />
                                            </IconButton>}
                                        primaryText={<h2>{product.title} <span>{product.cost}</span></h2>}
                                        secondaryText={
                                            <h2>количество: {item.count}</h2>
                                        }
                                    />);
                                if( item !== array.last() ){
                                    acc.push(<Divider key={'divider' + product.id} inset />);
                                }


                                return acc;
                            }, [])}
                        </List>
                </Popover>
            </div>
        );
    }
}