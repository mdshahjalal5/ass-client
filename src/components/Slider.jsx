import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router";
import { useMediaQuery } from "react-responsive";

const Slider = () => {
  const mobile = useMediaQuery({ maxWidth: 1220 });
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      slidesPerView={mobile ? 1 : 2}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <Link to="/doctor-profile">
          <img
            className="w-full h-[60vh] rounded-xl shadow-xl"
            src="https://images.deepai.org/art-image/e00bdfc5fd4e418e92dbeb7076ccf0f3/a-modern-smart-home-interior-showcasing-iot-devices-a.jpg"
            alt="Slide 1"
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.deepai.org/art-image/4fcd36c7c84e4f2ab532ef7f373ab6ef/a-tech-enthusiast-s-workspace-with-dual-monitors-circ.jpg"
          className="w-full h-[60vh] rounded-xl shadow-xl"
          alt="Slide 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.deepai.org/art-image/3939882b488542189113a6554b726969/a-vr-user-in-a-futuristic-living-room-wearing-a-heads.jpg"
          className="w-full h-[60vh] rounded-xl shadow-xl"
          alt="Slide 3"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.deepai.org/art-image/ab55c939ecb24ad69d17f808a51b8874/a-3d-printer-in-action-printing-a-mechanical-part-clo.jpg"
          className="w-full h-[60vh] rounded-xl shadow-xl"
          alt="Slide 3"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
