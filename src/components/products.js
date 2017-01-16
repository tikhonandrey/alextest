import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {loadProducts, addToBasket} from '../actions/products';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto',
    },
};

@connect((state, props) => ({
        products: state.products
    }),
    { addToBasket, loadProducts }
)
export default class Products extends Component {
    static propTypes = {
        products: PropTypes.arrayOf(PropTypes.object).isRequired,
        addToBasket: PropTypes.func.isRequired,
        loadProducts: PropTypes.func.isRequired
    };

    componentDidMount() {
        const {loadProducts } = this.props;

        loadProducts()
    }

    render() {
        const {products} = this.props;
        return (
            <div style={styles.root}>
                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                >
                    {products && products
                        .each(item =>console.log(item))
                        .map((item) => (
                        <GridTile
                            key={item.id}
                            title={item.title}
                            subtitle={<span>by <b>{item.cost}</b></span>}
                            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                        >
                            <img src={item.img} />
                        </GridTile>
                    ))}
                </GridList>
            </div>
        )
    }
}
