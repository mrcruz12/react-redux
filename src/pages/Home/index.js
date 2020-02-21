import React from 'react';

import { MdShoppingCart } from 'react-icons/md';
import { ProdictList } from './styles';

export default function Home() {
  return (
    <ProdictList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/bota-caterpillar-comfort-fielder-masculino/10/NGF-0065-010/NGF-0065-010_zoom2.jpg?ims=326x"
          alt="tenis"
        />
        <strong>Bota Masc</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar no carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/bota-caterpillar-comfort-fielder-masculino/10/NGF-0065-010/NGF-0065-010_zoom2.jpg?ims=326x"
          alt="tenis"
        />
        <strong>Bota Masc</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar no carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/bota-caterpillar-comfort-fielder-masculino/10/NGF-0065-010/NGF-0065-010_zoom2.jpg?ims=326x"
          alt="tenis"
        />
        <strong>Bota Masc</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar no carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/bota-caterpillar-comfort-fielder-masculino/10/NGF-0065-010/NGF-0065-010_zoom2.jpg?ims=326x"
          alt="tenis"
        />
        <strong>Bota Masc</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar no carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/bota-caterpillar-comfort-fielder-masculino/10/NGF-0065-010/NGF-0065-010_zoom2.jpg?ims=326x"
          alt="tenis"
        />
        <strong>Bota Masc</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar no carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/bota-caterpillar-comfort-fielder-masculino/10/NGF-0065-010/NGF-0065-010_zoom2.jpg?ims=326x"
          alt="tenis"
        />
        <strong>Bota Masc</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar no carrinho</span>
        </button>
      </li>
    </ProdictList>
  );
}
