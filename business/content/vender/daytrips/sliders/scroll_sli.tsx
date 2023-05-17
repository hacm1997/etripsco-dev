import styles from "./styles.module.css";
import { useMediaQuery } from 'react-responsive';
import {dataPasadias} from "../../../../../services/service";
import {A11y, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import React from "react";

export default function ScrollSli() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });

    const content= dataPasadias.map((sliders, index:any) => (
        <div className={"row "+ styles.row_content} key={index}>
            <div className="col-2 "></div>
            <div className={"col-4 "+ styles.image}>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    style={{
                        // @ts-ignore
                        "--swiper-navigation-color": "#fff",
                    }}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation={true}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {

                            spaceBetween: 5,
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 1,
                        },
                        // when window width is >= 1024px
                        1024: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    {sliders.image.map((sli, index:any) => (
                        <SwiperSlide key={index} >
                            <img src={sli.img} />
                        </SwiperSlide>
                    ))}<br/><br/>
                </Swiper>
                {/*<img src={sliders.image} />*/}
            </div>
            <div className={styles.content_sli}>
                <div className={styles.img_desc}>
                    <h2>{sliders.title}</h2>
                    <p>{sliders.description}</p>

                </div>
                <div className={styles.contrata}>
                    <a href="https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A4%A9%F0%9F%8C%B4%20Para%20mi%20empresa%20ser%C3%ADa%20de%20mucho%20agrado%20poder%20sumarse%20al%20equipo%20de%20distribuidores"
                       type="button" target="__blank" className={"btn btn-sm "+styles.btn_contrata}>Contratar</a>
                </div>
            </div>
        </div>
    ))

    const contentMob=dataPasadias.map((sliders, index:any) => (
        <div className={styles.row_content} key={index}>

            <div >
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    style={{
                        // @ts-ignore
                        "--swiper-navigation-color": "#fff",
                    }}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {

                            spaceBetween: 5,
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 1,
                        },
                        // when window width is >= 1024px
                        1024: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    {sliders.image.map((sli, index:any) => (
                        <SwiperSlide key={index} >
                            <img src={sli.img} />
                        </SwiperSlide>
                    ))}<br/><br/>
                </Swiper>
            </div>
            <div className={styles.content_sli}>
                <div>
                    <h4>{sliders.title}</h4>
                    <p>{sliders.description}</p>
                    <a href="#" type="button" className={"btn btn-sm "+styles.btn_contrata}>Contratar</a>
                </div>
            </div>
        </div>
    ))

    return (
        <>

        <div className={"overflow-auto "+styles.scroll_sli}>
            <>
                {isDesktopOrLaptop &&
                    content
                }

                {isTabletOrMobile &&
                    contentMob
                }

            </>
        </div>

        </>
    )

}
