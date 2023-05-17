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
import {dataPlans} from "../../../../../services/service";
import useAnalyticsEventTracker from "../../../../../services/analytics/useAnalyticsEventTracker";

SwiperCore.use([Autoplay]);

let selectedPlan: any[] = [];
const Sliders : React.FC<{plans:string}> = ({plans}) => {

        function filterItems(arr:any, query:any) {
            return arr.filter((el: string) => el.toLowerCase().includes(query.toLowerCase()));
        }
        const result = dataPlans.filter((obj) => {
            if(plans == "plan fiestero"){
                return obj.id_name === 'pfiesta';
            }else if(plans == "planes grupales") {
                return obj.id_name === 'pgroup';
            }else if(plans == "cursos"){
                return obj.id_name === 'curses';
            }else {
                return dataPlans;
            }

        });
        selectedPlan = result;
    const gaEventTracker = useAnalyticsEventTracker('Menu');
    console.log("plan => ", selectedPlan)
    const content = selectedPlan.map((slider:any,index:any) => (
        <SwiperSlide key={index} >
            <div className={styles.sliders} style={{backgroundImage: `url(${slider.image})`}} title="Planes">
                <div className={"user-image "+styles.images}>
                    <div className={styles.blank}></div>
                    <h2 className={styles.titles}>{slider.title}</h2>
                    {/*<p className={styles.prices}>{slider.price} COP/por persona</p>*/}
                    <p className={styles.descriptions}>{slider.description}</p>
                    <a onClick={()=>gaEventTracker('reserva_plan')} href={slider.link} className={"btn btn-sm "+styles.btn_cards} target="__blank">Reservar</a>
                </div>
            </div>
        </SwiperSlide>
    ))
    return (
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
                      {content}<br/><br/>
                  </Swiper>
                </div>
            </>

          );
}
export default Sliders;
