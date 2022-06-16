import styled from "styled-components";

export const ProductDefaultContainer = styled.div`
  position: relative;
  cursor: pointer;
  background-color: ${(props) => props.theme.color.bg};
  width: 300px;
`;
export const NewContainer = styled.div`
  width: 0;
  height: 0;
  border-top: 60px solid ${(props) => props.theme.color.invertedBg};
  border-right: 60px solid transparent;
  position: absolute;
  z-index: 2;
`;
export const NewText = styled.div`
  position: absolute;
  color: ${(props) => props.theme.color.invertedPrimary};
  font-size: 0.825rem;
  font-weight: 500;
  top: -48px;
  left: 6px;
  transform: rotate(-45deg);
  z-index: 2;
`;
export const SalePercentageContainer = styled.div`
  background-color: ${(props) => props.theme.color.invertedBg};
  color: ${(props) => props.theme.color.invertedPrimary};
  position: absolute;
  right: 6px;
  top: 6px;
  font-size: 0.625rem;
  font-weight: 400;
  padding: 2px;
  z-index: 2;
`;
export const WishlistViewCompareContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  font-size: 1rem;
  color: #777;
  background-color: white;
  position: absolute;
  right: 6px;
  top: 24px;
  z-index: 2;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  ${ProductDefaultContainer}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;
export const WishlistViewCompare = styled.div`
  font-size: 1.125rem;
  padding: 8px;
  border: solid 1px ${(props) => props.theme.color.borderPrimary};
  transition: all 0.3s ease;
  &:hover {
    background-color: ${(props) => props.theme.color.invertedBg};
    color: ${(props) => props.theme.color.invertedPrimary};
  }
`;

export const ProductImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    max-height: 280px;
    min-height: 250px;
    max-width: 100%;
    transition: all 0.3s ease;
    z-index: 0;
    ${ProductDefaultContainer}:hover & {
      transform: scale(1.1);
    }
  }
`;
export const AddToCartButton = styled.button`
  position: absolute;
  display: block;
  margin: 0 auto;
  width: 90%;
  background-color: ${(props) => props.theme.color.invertedBg};
  color: ${(props) => props.theme.color.invertedPrimary};
  padding: 6px;
  border-radius: 6px;
  border: none;
  bottom: 0;
  left: 5%;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 2;
  &:hover {
    cursor: pointer;
    background-color: #201d1d;
  }
  ${ProductDefaultContainer}:hover & {
    bottom: 22%;
    opacity: 1;
    visibility: visible;
  }
`;
export const ProductNameRatingPriceContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 60px 10px 10px;
  row-gap: 10px;
`;
export const ProductRating = styled.div`
  color: ${(props) => props.theme.color.rating};
`;
export const ProductOldPrice = styled.div`
  color: ${(props) => props.theme.color.primary};
  text-decoration: line-through;
  text-align: right;
  font-size: 0.825rem;
  font-weight: 400;
`;
export const ProductName = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.color.secondary};
`;
export const ProductCurrentPrice = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.color.secondary};
  text-align: right;
`;
