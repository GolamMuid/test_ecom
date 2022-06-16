import React from "react";
import ProductDefault from "../components/ProductDefault";

function Home() {
  return (
    <div>
      <ProductDefault
        salePercentage="20% off"
        productName="iphone 11 pro"
        oldPrice="$600"
        currentPrice="$500"
        image="a1.jpg"
      />
    </div>
  );
}

export default Home;
