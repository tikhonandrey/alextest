import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import Preloader from '../components/preloader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {loadProducts, addToBasket} from '../actions/shoping';
import ActionShop from 'material-ui/svg-icons/action/shopping-cart';
const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: '40px 0 0 0'
    },
    gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto',
    },
    title:{
        fontSize: 20
    }
};

@connect((state, props) => ({
        products: state.products,
    }),
    { addToBasket, loadProducts }
)
export default class Products extends Component {
    static propTypes = {
        products: PropTypes.object,
        addToBasket: PropTypes.func.isRequired,
        loadProducts: PropTypes.func.isRequired
    };

    componentDidMount() {
        const {loadProducts } = this.props;

        loadProducts()
    }

    addToBasket=(productId)=>()=>{
        this.props.addToBasket(productId)
    };

    render() {
        const {products, loading} = this.props;
        if(products.loading) return <div style={styles.root}><Preloader/></div>;

        return (
            <div style={styles.root}>
                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                >
                    {products && products.entities.map((item) => (
                        <GridTile
                            key={item.id}
                            title={<span style={styles.title}>{item.title}</span>}
                            subtitle={<h2>{item.cost}</h2>}
                            actionIcon={<IconButton onClick={this.addToBasket(item.id)}><ActionShop color="white" /></IconButton>}
                        >
                            <img src={item.img} />
                        </GridTile>
                    ))}
                </GridList>
            </div>
        )
    }
}
