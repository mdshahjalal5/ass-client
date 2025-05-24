import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

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
        <img
          className="w-full h-[80vh]  max-sm:h-[50vh] rounded-xl shadow-xl"
          src="https://images.deepai.org/art-image/b5baf97e05f04ddea5d146c3cc7c65cb/variety-of-colorful-sushi-rolls-with-salmon-tuna-avoc.jpg"
          alt="Slide 1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.deepai.org/art-image/d9420ff50d6847f1a0ae63987db0ee6a/authentic-italian-margherita-pizza-with-mozzarella-ch.jpg"
          className="w-full h-[80vh] max-sm:h-[50vh] rounded-xl shadow-xl"
          alt="Slide 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.deepai.org/art-image/8e0f6a2c2e39476a9b2ada95f68c0567/mexican-street-style-tacos-al-pastor-filled-with-gril.jpg"
          className="w-full h-[80vh] max-sm:h-[50vh] rounded-xl shadow-xl"
          alt="Slide 3"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.deepai.org/art-image/d1f02bcc80564822a5c95170d69afec8/japanese-miso-ramen-bowl-with-sliced-pork-boiled-egg-.jpg"
          className="w-full h-[80vh] max-sm:h-[50vh] rounded-xl shadow-xl"
          alt="Slide 4"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.deepai.org/art-image/c8a8c78b8b8b45eba55fa36ff31853c5/a-traditional-bangladeshi-dish-of-begun-vorta-mashed-.jpg"
          className="w-full h-[80vh] max-sm:h-[50vh] rounded-xl shadow-xl"
          alt="Slide 5"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.deepai.org/art-image/e90c5bf903c641d1a3ce2c7a3f5c2ee9/vietnamese-pho-bowl-with-thin-beef-slices-rice-noodle.jpg"
          className="w-full h-[80vh] max-sm:h-[50vh] rounded-xl shadow-xl"
          alt="Slide 6"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
