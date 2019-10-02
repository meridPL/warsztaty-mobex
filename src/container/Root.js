import React from 'react';
import ProductList from '../components/ProductList';
import '../App.css';

import { configure } from 'mobx';

import { Provider } from 'mobx-react';
import ProductStrore from '../store/ProductStore'


configure({ enforceActions: true });

const Root = () => (
    <Provider productStore={ProductStrore}>

        <ProductList />
    </Provider>
)

export default Root;