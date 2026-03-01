import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import BlogCart from "./BlogCart";
import Datas from "../../../../Datas";

const { blogs } = Datas;

function Blogs() {
  return (
    <section className="blog_with_swiper_section">
      <div className="blog_with_swiper_section__header">
        <h5>Read Our</h5>
        <h2>Latest Blog</h2>
      </div>
      <Swiper
        modules={[Navigation]}
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          850: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <BlogCart blog={blog} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Blogs;
