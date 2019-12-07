import React from 'react';
import styled from 'styled-components';

import CartButton from './CartButton.jsx';

const Image = styled.img`
  width: 100px;
  height: 100px;
  display: block;
  margin: auto;
  object-fit: scale-down;
`;

const Name = styled.p`
  box-sizing: border-box;
  color: rgb(0, 30, 115);
  font-family: Human BBY Web, Arial, Helvetica, sans-serif;
  font-size: 13px;
  line-height: normal;
  max-height: 48px;
  white-space: normal;
  height: 35px;
`;

const Price = styled.p`
  box-sizing: border-box;
  color: rgb(29, 37, 44);
  font-family: Human BBY Web, Arial, Helvetica, sans-serif;
  font-size: 15px;
  font-stretch: 100%;
  font-style: normal;
  font-weight: bold;
  line-height: 18px;
  white-space: normal;
  height: 35px;
`;


const ProductItem = props => (
  <React.Fragment>
    <Image src={props.productItem.image}></Image>
    <Name>{props.productItem.name}</Name>
    <div>STARS PLACEHOLDER</div>
    <Price>{props.productItem.price}</Price>
  </React.Fragment>
);

export default ProductItem;
