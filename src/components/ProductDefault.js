import React from "react";
import {
  AddToCartButton,
  NewContainer,
  NewText,
  ProductDefaultContainer,
  ProductImage,
  SalePercentageContainer,
  WishlistViewCompare,
  WishlistViewCompareContainer,
  ProductNameRatingPriceContainer,
  ProductRating,
  ProductOldPrice,
  ProductName,
  ProductCurrentPrice,
} from "./ProductDefault.style";
import { BsEye, BsHeart, BsStar } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";

function ProductDefault(props) {
  return (
    <ProductDefaultContainer>
      <NewContainer>
        <NewText>New</NewText>
      </NewContainer>
      <SalePercentageContainer>
        {" "}
        {props.salePercentage}{" "}
      </SalePercentageContainer>
      <WishlistViewCompareContainer>
        <WishlistViewCompare>
          <BsHeart />
        </WishlistViewCompare>
        <WishlistViewCompare>
          <BsEye />
        </WishlistViewCompare>
        <WishlistViewCompare>
          <FiRefreshCw />
        </WishlistViewCompare>
      </WishlistViewCompareContainer>
      <ProductImage>
        <img src={process.env.PUBLIC_URL + "/" + props.image} alt="" />
      </ProductImage>
      <AddToCartButton> Add To Cart </AddToCartButton>
      <ProductNameRatingPriceContainer>
        <ProductRating>
          <BsStar />
          <BsStar />
          <BsStar />
          <BsStar />
          <BsStar />
        </ProductRating>
        <ProductOldPrice>{props.oldPrice}</ProductOldPrice>
        <ProductName>{props.productName}</ProductName>
        <ProductCurrentPrice>{props.currentPrice}</ProductCurrentPrice>
      </ProductNameRatingPriceContainer>
    </ProductDefaultContainer>
  );
}

export default ProductDefault;
