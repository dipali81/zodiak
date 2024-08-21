import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle'; // Import all Swiper styles
import { Autoplay, Navigation, Pagination } from 'swiper/modules'; // Import modules
import { Link } from 'react-router-dom';
import { FaSearch, FaChevronDown } from 'react-icons/fa'; // Import the search icon from react-icons

const images = [
  'images/homepage-8-slider-img-5.jpg',
  'images/homepage-8-slider-img-2.jpg',
  'images/homepage-4-slider-img-3.jpg',
  'images/homepage-8-slider-img-6.jpg',
];
const links = [
  { to: '/logo-design', text: 'Logo' },
  { to: '/t-shirt-design', text: 'T-shirt' },
  { to: '/website-design', text: 'Website' },
];
const Slider = () => {
  return (
    <section className="wow animate__fadeIn p-0 main-slider mobile-height  mb-16">
      <div className="relative container-fluid p-0">
        <div
          id="slider-container"
          className="absolute top-14 left-20 z-10"
          style={{ display: 'block' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="wow no-padding" style={{ visibility: 'visible' }}>
              <div className="h-full ">
                <div className="h-full flex flex-col">
                  <div className="flex flex-col justify-center text-center md:text-left md:pr-5">
                    <h1 className="text-gray-800 font-bold text-5xl leading-tight mb-6 lg:w-3/5 md:w-7/10 sm:w-full">
                      Grow your Business with #1 Creative Marketplace
                    </h1>
                    <p className="text-gray-600 text-lg mb-5 lg:w-1/2 md:w-3/5 sm:w-full sm:mb-4">
                      Whatever your business needs, we connect you with creative experts to make it look and feel professional. Good design makes great business.
                    </p>

                    <div className="md:w-10/12 ">

                      <div className="relative w-full bg-white border border-gray-300 rounded-md mb-5 px-4 py-2">
                        {/* Magnifying Glass Icon */}
                        <FaSearch
                          className="text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                          aria-hidden="true"
                        />

                        {/* Select Input */}
                        <select className="w-full bg-transparent appearance-none pl-10 pr-8 py-3 text-gray-700 text-sm focus:outline-none"
                        >
                          <option>What are you Looking for? E.g. Logo Design, Website etc.</option>
                          <option value="Logo Design">Logo Design</option>
                          <option value="Packaging Design">Packaging Design</option>
                          <option value="Brochure Design">Brochure Design</option>
                          <option value="Logo Design">Logo Design</option>
                          <option value="Packaging Design">Packaging Design</option>
                          <option value="Brochure Design">Brochure Design</option>
                        </select>
                        {/* Chevron Down Icon */}
                        <FaChevronDown
                          className="text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
                          aria-hidden="true"
                        />
                      </div>

                      <div className="text-center mt-5">
                        <ul className="flex items-center space-x-4">
                          <li>
                            <p className="text-gray-600 text-lg font-bold mr-2">Popular:</p>
                          </li>
                          {links.map((link, index) => (
                            <li key={index}>
                              <Link
                                to={link.to}
                                className="bg-transparent border border-2 border-[#1B1464] text-[#1B1464] font-bold uppercase px-8 py-3 rounded-[7px] text-center transition-colors duration-300 hover:bg-[#1B1464] hover:text-white whitespace-nowrap"
                              >
                                {link.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Swiper
          style={{
            width: '100%',
            height: '570px', // Adjust this value as needed
          }}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation
          modules={[Autoplay, Navigation, Pagination]} // Specify modules here
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* You can add additional content or overlays here if needed */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* CSS to hide navigation arrows */}
      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          display: none; /* Hide arrows */
        }
      `}</style>
    </section>
  );
};

export default Slider;