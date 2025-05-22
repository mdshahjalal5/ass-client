import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <Link to="/doctor-profile">
          <img
            className="w-full h-[70vh] max-sm:h-[50vh] max-sm:h-[50vh] rounded-xl shadow-xl"
            src="https://images.deepai.org/art-image/2f454155dda24c3092d82313c5418387/a-traditional-bangladeshi-beef-tehari-served-on-a-whi.jpg"
            alt="Slide 1"
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.deepai.org/art-image/dab0727e89d749f181a2b26550ba8ee8/hilsa-fish-cooked-in-mustard-sauce-shorshe-ilish-serv.jpg"
          className="w-full h-[70vh] max-sm:h-[50vh] rounded-xl shadow-xl"
          alt="Slide 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.deepai.org/art-image/d95e3d7921f1457f832c3ce005c26946/white-chicken-curry-bangladeshi-chicken-rezala-in-a-c.jpg"
          className="w-full h-[70vh] max-sm:h-[50vh] rounded-xl shadow-xl"
          alt="Slide 3"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.deepai.org/art-image/747917527f894e3982dd1b95d9d299da/bangladeshi-prawn-coconut-curry-chingri-malai-curry-p.jpg"
          className="w-full h-[70vh] max-sm:h-[50vh] rounded-xl shadow-xl"
          alt="Slide 3"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
