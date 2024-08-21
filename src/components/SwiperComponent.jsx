import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const SwiperComponent = () => {
  // Array containing image data, button text, and hrefs
  const slides = [
    { imageSrc: 'images/home-banner01.jpg', buttonText: 'Catalogue', buttonHref: 'catalog-design.html', buttonColor: 'bg-[#6200ff] text-white hover:bg-[#4705b1] focus:bg-[#4705b1]' },
    { imageSrc: 'images/home-banner02.jpg', buttonText: 'Flyer', buttonHref: 'flyer-design.html', buttonColor: 'bg-[#EA2027] text-white hover:bg-[#aa3e17] focus:bg-[#aa3e17]' },
    { imageSrc: 'images/home-banner03.jpg', buttonText: 'Logo & Business card', buttonHref: 'logo-business-card.html', buttonColor: 'bg-[#2ed573] text-white hover:bg-[#239f56] focus:bg-[#239f56]' },
    { imageSrc: 'images/home-banner04.jpg', buttonText: 'Logo', buttonHref: 'logo-design.html', buttonColor: 'bg-[#1B1464] text-white hover:bg-[#161146] focus:bg-[#161146]' },
    { imageSrc: 'images/home-banner05.jpg', buttonText: 'Newspaper Ad', buttonHref: 'newspaper-ad.html', buttonColor: 'bg-[#EE5A24] text-white hover:bg-[#c64b1e] focus:bg-[#c64b1e]' },
    { imageSrc: 'images/home-banner06.jpg', buttonText: 'Packaging Design', buttonHref: 'packaging-design.html', buttonColor: 'bg-[#40407a] text-white hover:bg-[#363666] focus:bg-[#363666]' },
    { imageSrc: 'images/home-banner07.jpg', buttonText: 'Rollup Banner', buttonHref: 'rollup-banner-design.html', buttonColor: 'bg-[#ff214f] text-white hover:bg-[#ff214f] focus:bg-[#ff214f]' },
    { imageSrc: 'images/home-banner08.jpg', buttonText: 'Label Design', buttonHref: 'label-design.html', buttonColor: 'bg-[#fed330] text-white hover:bg-[#c09e1e] focus:bg-[#c09e1e]' },
  ];

  return (
    <div className="overflow-hidden relative">
      <Swiper
        className="swiper-container"
        slidesPerView={1}
        loop={true}
        allowTouchMove={true}
        centeredSlides={true}
        spaceBetween={5}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        keyboard={{ enabled: true, onlyInViewport: true }}
        breakpoints={{
          1200: { slidesPerView: 4 },
          992: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
        }}
        modules={[Autoplay, Navigation, Pagination]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative p-[10px]">
            <img src={slide.imageSrc} alt={slide.buttonText} className="w-full shadow-[0_0_12px_rgba(0,0,0,0.1)] rounded-[10px] h-auto" />
            <div className="absolute bottom-8 left-0 right-0 flex justify-center">
              <a
                href={slide.buttonHref}
                className={`inline-block font-bold text-white px-[45px] py-[12px] text-sm leading-[25px] rounded-[50px]  transition duration-300 ${slide.buttonColor}`}
              >
                {slide.buttonText}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;