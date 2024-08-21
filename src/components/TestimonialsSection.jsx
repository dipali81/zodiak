import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const TestimonialsSection = () => {

    const testimonials = [
        {
            id: 1,
            name: 'Shoko Mugikura',
            position: 'Design Manager',
            image: 'images/avtar-19.jpg',
            testimonial: 'I wanted to hire the best and after looking at several other companies, I knew Jacob was the perfect guy for the job. He is a true professional.',
            bgColor: 'bg-[#d2e9e6]',
        },
        {
            id: 2,
            name: 'Alexander Harvard',
            position: 'Co-Founder / CEO',
            image: 'images/avtar-20.jpg',
            testimonial: 'I wanted to hire the best and after looking at several other companies, I knew Jacob was the perfect guy for the job. He is a true professional.',
            bgColor: 'bg-[#cde7eb]',
        },
        {
            id: 3,
            name: 'Lindsay Swanson',
            position: 'Creative Director',
            image: 'images/avtar-21.jpg',
            testimonial: 'I wanted to hire the best and after looking at several other companies, I knew Jacob was the perfect guy for the job. He is a true professional.',
            bgColor: 'bg-[#cee1f2]',
        },
        {
            id: 4,
            name: 'Herman Miller',
            position: 'Creative Director',
            image: 'images/avtar-22.jpg',
            testimonial: 'I wanted to hire the best and after looking at several other companies, I knew Jacob was the perfect guy for the job. He is a true professional.',
            bgColor: 'bg-[#dddbf3]',
        },
        {
            id: 5,
            name: 'Herman Miller',
            position: 'Creative Director',
            image: 'images/avtar-23.jpg',
            testimonial: 'I wanted to hire the best and after looking at several other companies, I knew Jacob was the perfect guy for the job. He is a true professional.',
            bgColor: 'bg-[#fdf9ee]',
        },
        {
            id: 6,
            name: 'Herman Miller',
            position: 'Creative Director',
            image: 'images/avtar-24.jpg',
            testimonial: 'I wanted to hire the best and after looking at several other companies, I knew Jacob was the perfect guy for the job. He is a true professional.',
            bgColor: 'bg-[#fdf1ee]',
        },
    ];

    return (
        <section className="">
            <div className="">
             
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                      }}
                  
                    modules={[Autoplay, Navigation, Pagination]}
                    className="relative pb-12"
                >
                    {testimonials.map(({ id, name, position, image, testimonial, bgColor }) => (
                        <SwiperSlide key={id}>
                            <div className={`py-20 px-12 text-center w-full h-full ${bgColor}`}>
                                <img
                                    src={image}
                                    alt={name}
                                    className="rounded-full w-36 h-36 mx-auto mb-6"
                                />
                                <p className="mb-4">{testimonial}</p>
                                <span className="text-[#eb3b5a] text-sm font-bold uppercase block">{name}</span>
                                <span className="text-[#626262] text-xs uppercase">{position}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TestimonialsSection;