import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Sample image array
const images = [
  'images/homepage-8-slider-img-5.jpg',
  'images/homepage-8-slider-img-2.jpg',
  'images/homepage-4-slider-img-3.jpg',
  'images/homepage-8-slider-img-6.jpg',
];

// Responsive settings for the carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slider = () => {
  return (
    <section className="wow animate__fadeIn p-0 main-slider mobile-height top-space">
      <div className="container relative">
        <div
          id="slider-container"
          className="absolute top-14 left-20 z-10000"
          style={{ display: 'block' }}
        >
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="col wow no-padding" style={{ visibility: 'visible' }}>
              <div className="container h-100">
                <div className="row h-100">
                  <div className="col-12 flex justify-center md:justify-start flex-col text-center md:text-start no-padding-left md:pr-5">
                    <h1 className="alt-font text-gray-blue font-weight-700 letter-spacing-minus-1 line-height-80 mb-25 lg:w-60 md:w-70 lg:line-height-auto sm:w-100 sm:mb-15">
                      Grow your Business with #1 Creative Marketplace
                    </h1>
                    <p className="text-gray-blue text-large mb-5 lg:w-50 md:w-60 sm:w-100 sm:mb-15">
                      Whatever your business needs, we connect you with creative experts to make it look and feel professional. Good design makes great business.
                    </p>

                    <div className="col-md-10">
                      <div className="select-style big-select bg-white rounded-md">
                        <i className="fa-solid fa-magnifying-glass icon-very-small ml-15 mt-20 mr-20 absolute cursor-pointer"></i>
                        <select name="budget" id="budget" className="bg-transparent mb-0">
                          <option>What are you Looking for? E.g. Logo Design, Website etc.</option>
                          <option value="Logo Design">Logo Design</option>
                          <option value="Packaging Design">Packaging Design</option>
                          <option value="Brochure Design">Brochure Design</option>
                        </select>
                      </div>
                      <div className="social-icon-style-8">
                        <ul className="small-icon">
                          <li>
                            <p className="text-gray-blue text-large alt-font strong mr-5 sm:mt-5">Popular :</p>
                          </li>
                          <li>
                            <a href="#" target="_blank" className="btn btn-blue btn-small-new mr-5 sm:mt-5">Logo</a>
                          </li>
                          <li>
                            <a href="#" target="_blank" className="btn btn-blue btn-small-new mr-5 sm:mt-5">T-shirt</a>
                          </li>
                          <li>
                            <a href="#" target="_blank" className="btn btn-blue btn-small-new mr-5 sm:mt-5">Website</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
        >
          {images.map((image, index) => (
            <div key={index} className="cover-background" style={{ backgroundImage: `url(${image})` }}>
              {/* You can add additional content or overlays here if needed */}
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Slider;