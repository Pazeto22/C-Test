import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

import Products from "components/Products";

import api from "config/api";
import errorRequest from "common/errorRequest.js";

export default function SwiperProducts() {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const { data } = await api.get(`products`);
      setProducts(data);
    } catch (error) {
      errorRequest(error);
    }
  }

  SwiperCore.use([Navigation, Pagination]);
  return (
    <>
      {products && products.length > 0 ? (
        <Swiper
          spaceBetween={0}
          slidesPerView={2}
          navigation
          pagination
          loop={true}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {products &&
            products.map((product) => (
              <SwiperSlide key={product.productId}>
                <Products product={product} />
              </SwiperSlide>
            ))}
        </Swiper>
      ) : (
        "Produtos não encontrados"
      )}
    </>
  );
}
