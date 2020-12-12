import React from "react";
import "./styles.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import SwiperCore, { Pagination } from "swiper";
import "swiper/components/pagination/pagination.scss";

import SlideContent from "./SlideContent";

// Imagens para o Banner
import Banner1 from "assets/images/banner1.jpg";
import Banner2 from "assets/images/banner2.jpg";
import Banner3 from "assets/images/banner3.jpg";
import Banner4 from "assets/images/banner4.jpg";

SwiperCore.use([Pagination]);
export default function SwiperBanner() {
  return (
    <div className="swiper-banner">
      <Swiper loop={true} pagination={{ clickable: true }}>
        <SwiperSlide>
          <SlideContent
            h3Content={"Olá, o que você está buscando?"}
            h1Content={"Criar ou migrar seu e-commerce?"}
            Banner={Banner1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            h3Content={"Começando seu e-commerce agora?"}
            h1Content={"Temos a receita perfeita para você"}
            Banner={Banner2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            h3Content={"Quer se tornar ainda mais bem-sucedido?"}
            h1Content={"Aprenda a buscar novos clientes"}
            Banner={Banner3}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            h3Content={"Dúvidas sobre as formas de pagamento?"}
            h1Content={"Entenda todas e passe a lucrar mais"}
            Banner={Banner4}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
