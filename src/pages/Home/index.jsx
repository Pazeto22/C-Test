import React from "react";

import Navbar from "components/ui/Navbar";
import SwiperBanner from "components/SwiperBanner";
import ProductsForSale from "components/ProductsForSale";

export default function Home() {
  return (
    <>
      <Navbar />
      <SwiperBanner />
      <ProductsForSale />
    </>
  );
}
