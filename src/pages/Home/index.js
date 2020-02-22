import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import { ProdictList } from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const listProducts = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: listProducts });
  }
  handleAddProduct = product => {
    const { dispatch } = this.props;

    dispatch({ type: 'ADD_TO_CART', product });
  };

  render() {
    const { products } = this.state;

    return (
      <ProdictList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.price}</span>
            <button
              type="button"
              onClick={() => this.handleAddProduct(product)}
            >
              <div>
                <MdShoppingCart size={16} color="#fff" /> 3
              </div>
              <span>Adicionar no carrinho</span>
            </button>
          </li>
        ))}
      </ProdictList>
    );
  }
}

export default connect()(Home);
// Home;
