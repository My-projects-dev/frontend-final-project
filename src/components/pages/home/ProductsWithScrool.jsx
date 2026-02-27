import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import ProductCart from "../shop/ProductCart";
import Datas from "../../../Datas";

const { products } = Datas;

function ProductsWithScrool({
  productDatas = [],
  navigation = true,
  title = "",
  subtitle = "",
}) {
  const pr = productDatas.length > 0 ? productDatas : products;

  return (
    <section className="product_with_swiper_section">
      <div className="product_with_swiper_section__header">
        <h3>{subtitle}</h3>
        <h2>{title}</h2>
      </div>

      <Swiper
        modules={navigation ? [Navigation] : []}
        loop={true}
        spaceBetween={30}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            navigation: false,
          },
          580: {
            slidesPerView: 2,
            navigation: false,
          },
          992: {
            slidesPerView: 3,
            navigation: navigation,
          },
        }}
      >
        {pr.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCart product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ProductsWithScrool;
