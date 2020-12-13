import React from "react";
import "./styles.scss";

import SwiperProducts from "./SwiperProducts";

export default function ProductsForSale({ SaleTitle }) {
  return (
    <div className="view">
      <div className="top-sellers-title">
        <h2>{SaleTitle ? SaleTitle : "Mais vendidos"}</h2>
      </div>
      <SwiperProducts />
    </div>
  );
}
