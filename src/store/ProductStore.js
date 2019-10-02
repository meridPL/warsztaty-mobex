import {observable, action, computed} from 'mobx';

class ProductStore{
    @observable products = [
        { id: 0, name: "Apple ", sold: 0, promo: false },
        { id: 1, name: "Wafle", sold: 0, promo: false },
        { id: 2, name: "Banana", sold: 0, promo: true },
        { id: 3, name: "Coffee", sold: 0, promo: false },
        { id: 4, name: "Coffee", sold: 0, promo: false },
    ];
    @observable filtr = "";

    @action handleBuyClick = id => {
            console.log(id);
            console.log("A");
            const product = this.products.find(p => p.id === id)
            console.log(product);
            product.sold = product.sold+2;
    }

    @action filtrOn = event => {
        console.log(event.target.value);
        // this.setState({ filtr: event.target.value })
        this.filtr = event.target.value;
        console.log(this.filtr);
    }
    @computed get allSold(){
        
    }

}

const store = new ProductStore();
export default store;

// npm i @babel/plugin-proposal-decorators --save-dev
// npm i mobx mobx-react --save