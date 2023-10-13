import React, { useState } from 'react'
import leftArrow from "../../assets/HomePage/dest_left_arrow.svg";
import rightArrow from "../../assets/HomePage/dest_right_arrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {  studentServices, valueServices } from '../../Constants/Constants';
import { useNavigate } from 'react-router-dom';
import './servicesSlider.css'
import Modal from './modal';


function ServicesSlider() {
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const openModal = (service) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedService(null);
        setIsModalOpen(false);
    };

    return (
        <div className='services-wrapper'>
            <h1>Services We Do</h1>
            <h3>Student Services</h3>
            <section className="services-swiper testBorder">
                <div className="servicesSlider-wrap testBorder ">
                    <div className="services-slider-part ">
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: true,
                            }}
                            navigation={{
                                nextEl: ".services-button-next1",
                                prevEl: ".services-button-prev1",
                                clickable: true,
                            }}

                            speed={2000}
                            loop={true}
                            breakpoints={{
                                1024: {
                                    slidesPerView: 2.7,
                                    spaceBetween: 35,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 35,
                                },
                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 35,
                                },
                            }}
                            spaceBetween={15}
                            slidesPerView={2}
                            centeredSlides={true}
                            className="services-us-slid "
                        >
                            {studentServices.map((service, idx) => (
                                <SwiperSlide className="slider-con " key={idx} onClick={() => navigate('/services', { state: service.position })}>
                                    <div className="services-swiper">
                                        <img src={service.icon} alt="calender" />
                                        <h3>{service.title}</h3>
                                        <button
                                            className='services-slider-button'
                                            onClick={() => openModal(service)}
                                        >
                                            Know More
                                        </button>
                                    </div>
                                    {/* <p>{content}</p> */}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="services-slider-controls">
                            <img
                                className="services-button-prev1"
                                src={leftArrow}
                                alt="Previous Button"
                            />
                            <img
                                className="services-button-next1"
                                src={rightArrow}
                                alt="Previous Button"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <h3>Value Added Services</h3>
            <section className="services-swiper testBorder">
                <div className="servicesSlider-wrap testBorder ">
                    <div className="services-slider-part ">
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                nextEl: ".services-button-next2",
                                prevEl: ".services-button-prev2",
                                clickable: true,
                            }}

                            speed={2000}
                            loop={true}
                            breakpoints={{
                                1024: {
                                    slidesPerView: 2.7,
                                    spaceBetween: 35,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 35,
                                },
                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 35,
                                },
                            }}
                            spaceBetween={15}
                            slidesPerView={2}
                            centeredSlides={true}
                            className="services-us-slid "
                        >
                            {valueServices.map((service, idx) => (
                                <SwiperSlide className="slider-con " key={idx} onClick={() => navigate('/services', { state: service.position })}>
                                    <div className="services-swiper">
                                        <img src={service.icon} alt="calender" />
                                        <h3>{service.title}</h3>
                                        <button
                                            className='services-slider-button'
                                            onClick={() => openModal(service)}
                                        >
                                            Know More
                                        </button>
                                    </div>
                                    {/* <p>{content}</p> */}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="services-slider-controls">
                            <img
                                className="services-button-prev2"
                                src={leftArrow}
                                alt="Previous Button"
                            />
                            <img
                                className="services-button-next2"
                                src={rightArrow}
                                alt="Previous Button"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Modal isOpen={isModalOpen} onClose={closeModal} content={selectedService} />
        </div>
    )
}

export default ServicesSlider