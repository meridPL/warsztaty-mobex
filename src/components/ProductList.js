import React from 'react';
import Product from '../components/Product';
import ProductPromo from '../components/ProductPromo';
import ProductStrore from '../store/ProductStore'
import { observer, inject } from 'mobx-react';

@inject('productStore')
@observer
class ProductList extends React.Component {

    handleBuyClick = id => {
        console.log(this.props.productStore.handleBuyClick(id));
        // this.props.productStrore.handleBuyClick(id);

        /*console.log(id);
        console.log("A");
        const product = ProductStrore.products.find(p => p.id === id)
        console.log(product);
        product.sold++;
        */


                    // this.setState(state => {
                    //     const products = ProductStrore.products.map(p => p.id === id
                    //         ? { ...p, sold: p.sold++ }
                    //         : p)
                    //     return products;
                    // })
    }

    filtrOn = event => {
        ProductStrore.filtrOn(event);
        /*
        console.log(event.target.value);
        // this.setState({ filtr: event.target.value })
        ProductStrore.filtr = event.target.value;
        console.log(ProductStrore.filtr);
        */
    }
    render() {
        return (
            <div>
                <input onChange={this.filtrOn} />
                <ul>
                    {ProductStrore.products
                        .filter(p => p.name.toLowerCase().includes(ProductStrore.filtr))
                        .sort((a, b) => { return a.name.localeCompare(b.name) })
                        .map((v, k) => (
                        <li key={v.id}>
                            {v.promo ?
                                <ProductPromo name={v.name} /> :
                                <Product onBuyClick={this.handleBuyClick} name={v.name} sold={v.sold} id={v.id} />
                            }
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ProductList;