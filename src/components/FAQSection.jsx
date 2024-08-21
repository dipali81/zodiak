import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const FAQSection = () => {
    const faqItems = [
        {
            id: 1,
            question: 'How do I get started with a project?',
            answer: 'Getting started is easy! You can either select the design service you need from our Categories, fill out the necessary details, and you\'re all set. Alternatively, feel free to reach out to us via our contact form, email, or phone to schedule a consultation.'
        },
        {
            id: 2,
            question: 'What is your design process like from start to finish?',
            answer: 'Our design process typically involves initial consultation and discovery, followed by research, conceptualization, draft creation, client feedback, revisions, and final delivery of the completed design files.'
        },
        {
            id: 3,
            question: 'What types of graphic design services do you offer?',
            answer: 'We provide a wide range of graphic design services, including logo design, branding, website design, print materials (such as business cards, brochures, flyers), social media graphics, packaging design, and more. You can check out the categories sections for more details.'
        },
        {
            id: 4,
            question: 'How long does it typically take to complete a design project?',
            answer: 'The timeline varies depending on the scope and complexity of the project. We\'ll provide you with a detailed timeline estimate during the consultation phase based on your specific requirements.'
        },
        {
            id: 5,
            question: 'How many revisions are included in your graphic design services?',
            answer: 'In our graphic design services, we typically include 3 revisions to ensure your complete satisfaction with the final design.'
        },
        {
            id: 6,
            question: 'What if I\'m not satisfied with the initial design concepts?',
            answer: 'Client satisfaction is our top priority. We offer revisions based on your feedback until we achieve a design that meets your expectations and aligns with your vision.'
        },
        {
            id: 7,
            question: 'What file formats will I receive upon project completion?',
            answer: 'You will receive high-resolution design files in formats suitable for both print and digital use, including JPEG, PNG, PDF, and vector formats such as AI, EPS, and SVG.'
        },
        {
            id: 8,
            question: 'What are the benefits of subscribing to your design services on a monthly basis?',
            answer: 'Subscribing to our design services on a monthly basis provides cost-effectiveness, consistent access to professional design resources, priority support, and flexibility to scale your design needs as your business grows.'
        }
    ];

    return (
        <section className="bg-[#f7f7f7] p-0">
            <div className="container-xxl px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                        <h2 className="text-[#40407a] text-2xl md:text-6xl font-bold mb-2 ">
                            Popular  Questions?
                        </h2>
                        <p className="text-[#626262] text-lg md:mb-8">
                            Have questions? We're here to help.
                        </p>
                        <img src="images/faq.png" alt="FAQ" className="bottom-0 left-0" />
                    </div>
                    <div className="lg:col-span-2">
                        <Accordion allowZeroExpanded>
                            {faqItems.map((item) => (
                                <AccordionItem key={item.id}>
                                    <AccordionItemButton>
                                        <div className="flex mb-2 justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                                            <span className="text-[#232323] text-lg font-semibold">
                                                {item.question}
                                            </span>
                                            <FaAngleDown className="text-[#232323]" />
                                        </div>
                                    </AccordionItemButton>
                                    <AccordionItemPanel>
                                        <div className="p-4 mt-2 bg-gray-100 rounded-lg">
                                            {item.answer}
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;