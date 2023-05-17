import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import React, {useEffect, useState} from "react";
import SwiperCore, {Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import { Navigation, Pagination, A11y } from "swiper";
import {dataPlansVender} from "../../../../../services/service";

SwiperCore.use([Autoplay]);

export default function SliTours() {

    return(
        <>
            <div>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    autoplay={{ delay:1500 }}
                    style={{
                        // @ts-ignore
                        "--swiper-navigation-color": "#fff",
                    }}
                    spaceBetween={15}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {

                            spaceBetween: 5,
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 2,
                        },
                        // when window width is >= 1024px
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {dataPlansVender.map((slider) => (
                        <SwiperSlide key={slider.id} >
                            <div className={styles.sliders} style={{backgroundImage: `url(${slider.image})`}} title="Tours-Etrips">
                                <div className={"user-image "+styles.images}>
                                    <div className={styles.blank}></div>
                                    <h2 className={styles.titles}>{slider.title}</h2>
                                    {/*<p className={styles.prices}>{slider.price} COP/por persona</p>*/}
                                    <p className={styles.descriptions}>{slider.description}</p>
                                    <a className={"btn btn-sm "+styles.btn_cards} href="https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A4%A9%F0%9F%8C%B4%20Para%20mi%20empresa%20ser%C3%ADa%20de%20mucho%20agrado%20poder%20sumarse%20al%20equipo%20de%20distribuidores"
                                       target="__blank">
                                        Reservar
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}<br/><br/>
                </Swiper>
            </div>
        </>
    );
}
