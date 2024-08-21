import React from 'react';

const ProjectSection = ({bgColor}) => {
    return (
        <section  className={`relative mt-10 mb-10 bg-[${bgColor}] bg-cover bg-center bg-no-repeat rounded-lg mx-[15%] mb-[5%] pt-[6%] pb-[6%]`}>
           
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <div className="text-center lg:w-full md:w-[80%]">
                        <h2 className="text-white font-semibold text-4xl md:text-7xl lg:mx-auto mb-[35px] animate__animated animate__fadeInUp">
                            We would love to hear about start your new project?
                        </h2>
                        <a
                            href="categories.html"
                            className={`inline-block text-[${bgColor}] bg-white border uppercase font-bold border-white py-3 px-10 rounded-full text-sm hover:bg-transparent hover:text-white transition-colors duration-300 animate__animated animate__fadeInUp`}
                            style={{ animationDelay: '0.2s' }}
                        >
                            Start New Project
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
