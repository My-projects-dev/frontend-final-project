import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

import Datas from "../../../../Datas";
import ArrivalProduct from "./ArrivalProduct";

const { products } = Datas;

function ArrivalProducts() {
  return (
    <section className="arrival_product_section">
      <div className="arrival_product_section__header">
        <h3>See Our Latest</h3>
        <h2>Arrival Products</h2>
      </div>

      <Swiper
        modules={[Navigation, Grid]}
        spaceBetween={30}
        slidesPerView={3}
        grid={{ rows: 2, fill: "row" }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            grid: { rows: 1, fill: "row" },
          },
          768: {
            slidesPerView: 2,
            grid: { rows: 2, fill: "row" },
          },
          1200: {
            slidesPerView: 3,
            grid: { rows: 2, fill: "row" },
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ArrivalProduct product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ArrivalProducts;
