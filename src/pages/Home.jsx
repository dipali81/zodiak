import React, { useState, useEffect, useRef } from 'react';
import Slider from '../components/Slider';
import SwiperComponent from '../components/SwiperComponent';
import TestimonialsSection from '../components/TestimonialsSection';
import ProjectSection from '../components/ProjectSection';
import FAQSection from '../components/FAQSection';
import { Link } from 'react-router-dom';
import { FaImage, FaInfinity, FaEdit, FaClock, FaComments, FaMoneyBillAlt } from 'react-icons/fa';

const Home = () => {
  const logos = [
    'images/logo-1.png',
    'images/logo-2.png',
    'images/logo-3.png',
    'images/logo-4.png',
    'images/logo-5.png',
    'images/logo-6.png',
  ];

  const portfolioItems = [
    {
      imgSrc: 'images/portfolio-item64.jpg',
      altText: 'Graphic Design',
      title: 'Graphic Design',
      description: '100+ We created graphic design',
      link: 'brochure-design.html',
    },
    {
      imgSrc: 'images/portfolio-item65.jpg',
      altText: 'Logo & Business Card',
      title: 'Brand Identity',
      description: '200+ We created brand identity',
      link: 'blog-post-layout-01.html',
    },
    {
      imgSrc: 'images/portfolio-item66.jpg',
      altText: 'Label Design',
      title: 'Packaging Design',
      description: '100+ We created packaging design',
      link: 'blog-post-layout-01.html',
    },
    {
      imgSrc: 'images/portfolio-item67.jpg',
      altText: 'Cartoon Character',
      title: 'Illustration',
      description: '500+ We created children book illustration',
      link: 'cartoon-character.html',
    },
  ];
  const features = [
    {
      id: 1,
      image: 'images/icon-1.png',
      number: '01.',
      title: 'Tell us what you need designed',
      description: 'Tell us what you need, complete your creative brief in a matter of minutes. Start by choosing a category.',
    },
    {
      id: 2,
      image: 'images/icon-2.png',
      number: '02.',
      title: 'Get custom designs',
      description: 'Receive multiple options of designs made exclusively for you, provide feedback and get as many revisions as you want.',
    },
    {
      id: 3,
      image: 'images/icon-3.png',
      number: '03.',
      title: 'Finalize your design',
      description: 'Once you are happy with your design, you can approve and download the files.',
    },
  ];

  const clientFeatures = [
    {
      id: 1,
      icon: <FaImage />,
      iconColor: 'text-[#fed330]', // bright-orange
      title: 'High Quality Design',
      description: 'Experience high-quality design crafted with precision, creativity, and attention to detail, ensuring your vision is brought to life beautifully.',
    },
    {
      id: 2,
      icon: <FaInfinity />,
      iconColor: 'text-[#fed330]', // bright-orange
      title: 'Unlimited Revisions',
      description: 'Enjoy the freedom of unlimited revisions, ensuring your design meets your exact specifications and expectations every step of the way.',
    },
    {
      id: 3,
      icon: <FaEdit />,
      iconColor: 'text-lavender',
      title: 'Design on Demand',
      description: 'Get custom designs on demand, tailored to your preferences and needs, ensuring fast, efficient, and personalized solutions for your projects.',
    },
    {
      id: 4,
      icon: <FaClock />,
      iconColor: 'text-lime-green',
      title: 'Fast Turnaround Time',
      description: 'Experience rapid turnaround times, ensuring your design needs are met promptly and efficiently, without compromising quality or attention to detail.',
    },
    {
      id: 5,
      icon: <FaComments />,
      iconColor: 'text-bright-turquoise',
      title: '24/7 Customer Support',
      description: 'Enjoy round-the-clock customer support, ensuring assistance is always available whenever you need it, guaranteeing a seamless and stress-free experience.',
    },
    {
      id: 6,
      icon: <FaMoneyBillAlt />,
      iconColor: 'text-bright-turquoise',
      title: 'Money Back Guarantee',
      description: "Rest assured with our money-back guarantee, providing peace of mind that if you're not satisfied, your investment is protected.",
    },
  ];
 
  return (
    <>
      <Slider />
      <section id="portfolio" className="bg-white wow animate__fadeIn no-padding-bottom">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center w-2/3">
            <h2 className="text-[#40407a] font-poppins  text-6xl font-bold">
              Explore Our Diverse Range of Design Services
            </h2>
            <p className="text-lg mt-4 mb-0">
              Discover a wide array of design services tailored to meet <br /> every business need and elevate your brand to new heights.
            </p>
            <Link
              to="categories.html"
              className="bg-[#1B1464] border border-[#1B1464] text-white hover:bg-transparent hover:text-[#1B1464] font-bold uppercase px-10 py-3 rounded-full mt-8 inline-block transition-colors duration-300"
            >
              Browse More Categories
            </Link>
          </div>
        </div>
        <div className="box-layout">
          <SwiperComponent />
        </div>
        <section className="wow animate__fadeIn py-12">
          <div className="flex justify-center">
            <div className="text-center mb-8">
              <span className="text-dark-gray text-xl font-poppins font-medium">
                Trusted By:
              </span>
            </div>
          </div>

          <div className=" px-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {logos.map((logo, index) => (
                <div key={index} className="flex justify-center">
                  <img src={logo} alt={`Logo ${index + 1}`} className="w-auto h-auto" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className=" bg-[#f7f7f7] mb-10">
          <div className=" mx-auto">
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center w-2/3">

                <h2 className="text-[#40407a] font-poppins  text-6xl font-bold">
                  Getting great designs has never been simpler
                </h2>
                <p className="w-4/5 sm:w-9/10 mx-auto text-lg mt-4">
                  From logos that define the very roots of a brand's success to t-shirts that speak of versatile yet engaging personalities, if you need a design, we've got you covered.
                </p>
              </div>
            </div>

            <div className="overflow-hidden mx-2">
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
                {portfolioItems.map((item, index) => (
                  <li key={index} className="relative bg-extra-dark-gray overflow-hidden">
                    <figure>
                      <img src={item.imgSrc} alt={item.altText} className="w-full h-auto" />
                      <div className="absolute bottom-32 left-0 w-full text-white p-4">
                        <Link to={item.link}
                          className="bg-[#FFFFFF]  text-black hover:bg-black hover:text-[#FFFFFF] font-bold uppercase px-10 py-3 rounded-full mt-8 inline-block transition-colors duration-300"

                        >
                          {item.title}
                        </Link>
                      </div>
                    </figure>
                    <div className="text-left p-6">
                      <div className="text-dark-gray text-2xl font-poppins font-semibold mb-2">{item.title}</div>
                      <p className="text-lg font-normal">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center mt-8 md:mt-5 mb-10">
              <Link to="services.html"
                className="bg-[#1B1464]  border border-[#1B1464] text-white hover:bg-transparent hover:text-[#1B1464] font-bold uppercase px-10 py-3 rounded-full mt-8 inline-block transition-colors duration-300">
                Browse More Services
              </Link>
            </div>
          </div>
          <section className="  min-h-screen relative overflow-hidden">
            {/* Background Layer */}
            <div className=" absolute inset-0 z-0"></div>

            {/* HTML5 Video */}
            <video
              loop
              autoPlay

              muted
              className="absolute inset-0 object-cover w-full h-full"
              poster="images/maintenance-bg.jpg"
            >
              <source type="video/mp4" src="video/video.mp4" />
            </video>
          </section>
        </section>
        <section className="relative py-12">
          <div className="flex justify-center">
            <div className="text-center w-2/3">

              <h2 className="text-[#40407a] font-poppins  text-6xl font-bold">
                Simplify Your Business Essentials

              </h2>
              <p className="md:w-[27rem] w-4/5 mx-auto text-lg mt-4">
                Explore a diverse range of professional design services, featuring thousands of creative options, delivered within budget and on schedule, customized for you in easy steps.
              </p>


            </div>
          </div>
          <div className="container mx-auto px-4 lg:px-0">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map(({ id, image, number, title, description }) => (
                <div key={id} className="flex flex-col bg-white p-8 rounded-lg">
                  <div className="flex justify-center mb-4 ">
                    <img src={image} alt={`Feature ${id}`} className="w-1/2" />
                  </div>
                  <div className="flex items-center mb-4">
                    <h2 className="text-[#7158e2] text-5xl font-semibold mr-4">{number}</h2>
                    <span className="text-3xl text-[#232323] font-semibold w-full">
                      {title.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </span>
                  </div>
                  <p className="text-base text-[#232323] w-4/5 md:w-[16rem]">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="bg-[#6c5ce7] animate__fadeIn py-6 md:py-24 md:px-24">
          <div className=" md:px-12  lg:px-6 px-2">
            <div className="flex flex-wrap items-center">
              {/* Section Title */}
              <div className="w-full lg:w-1/3 text-center md:text-left mb-9 sm:mb-12 md:pr-14">
                <h2 className="text-white font-semibold text-3xl md:text-7xl mb-4">Why Clients Love Us?</h2>
                <p className="text-white  text-lg w-4/5 lg:w-9/10 md:w-full mx-auto md:mx-0">
                  Million individuals admire us for our steadfast dedication to delivering outstanding design services, unmatched quality, and customized solutions perfectly suited to their distinct requirements. Satisfaction is assured with us.
                </p>
              </div>
              {/* Feature Boxes */}
              <div className="w-full lg:w-2/3 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">
                {clientFeatures.map(({ id, icon, iconColor, title, description }) => (
                  <div key={id} className="flex flex-col items-center md:items-start text-white">
                    <div className={`mb-5 ${iconColor}  text-4xl mb-4`}>
                      {icon}
                    </div>
                    <div className="text-2xl font-semibold mb-4">{title}</div>
                    <p className="text-base w-4/5 xl:w-9/10 sm:w-full">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white animate__fadeIn py-12 px-20 mt-12">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-[#40407a] font-semibold text-5xl">What Clients Say</h2>
            </div>
          <TestimonialsSection />
          </div>
        </section>
      <ProjectSection  bgColor="#6200ff"/>
      <FAQSection />
      </section>
    </>
  )
};

export default Home;