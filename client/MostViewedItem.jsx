import React from 'react';
import styled from 'styled-components';

import CartButton from './CartButton.jsx';
import ClickedButton from './ClickedButton.jsx';

const Image = styled.img`
  width: 100px;
  height: 100px;
  display: block;
  margin: 0 0 0 25px;
  object-fit: scale-down;
`;

const Name = styled.p`
  box-sizing: border-box;
  color: rgb(0, 30, 115);
  font-family: Human BBY Web, Arial, Helvetica, sans-serif;
  font-size: 13px;
  max-height: 48px;
  height: 35px;
`;

const Price = styled.p`
  box-sizing: border-box;
  color: rgb(29, 37, 44);
  font-family: Human BBY Web, Arial, Helvetica, sans-serif;
  font-size: 15px;
  font-stretch: 100%;
  font-weight: bold;
  line-height: 18px;
  height: 35px;
`;

const MostViewedItem = props => {
  let starsId = props.mostViewedItem.id;

  let productId = '/products/' + props.mostViewedItem.id;

  if (props.mostViewedItem.stock === 0) {
    return (
      <React.Fragment>
        <a href={productId}>
          <Image src={props.mostViewedItem.image}></Image>
        </a>
        <Name>
          <a href={productId}>
            {props.mostViewedItem.name}
          </a>
        </Name>
        <div className="stars-carousel" id={starsId}></div>
        <Price>{props.mostViewedItem.price}</Price>
        <ClickedButton>Sold Out</ClickedButton>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <a href={productId}>
          <Image src={props.mostViewedItem.image}></Image>
        </a>
        <Name>
          <a href={productId}>
            {props.mostViewedItem.name}
          </a>
        </Name>
        <div className="stars-carousel" id={starsId}></div>
        <Price>{props.mostViewedItem.price}</Price>
        <CartButton></CartButton>
      </React.Fragment>
    );
  }
};

export default MostViewedItem;
