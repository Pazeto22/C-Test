import React from "react";

import Navbar from "components/ui/Navbar";
import SwiperBanner from "components/SwiperBanner";
import ProductsForSale from "components/ProductsForSale";
import Newsletter from "components/ui/Newsletter";

export default function Home() {
  return (
    <>
      <Navbar />
      <SwiperBanner />
      <ProductsForSale />
      <Newsletter />
    </>
  );
}
