import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";
import {dataWitness} from "../../../../../services/service";


SwiperCore.use([Autoplay]);
export default function Witnesses_Sliders(){
    const [rating, setRating] = useState(0) // initial rating value
    const [showMore, setShowMore] = useState(false);
  // Catch Rating value
    const handleRating = (rate: number) => {
        setRating(rate)
        // other logic
    }
    const content = dataWitness.map( (slider:any, index:any) => (
        <SwiperSlide key={index} className={styles.swiper} style={{backgroundColor: `df8640`}}>
            <div key={index} >
                <img src={slider.photo} alt="Fotos-de-testigos"/>
                <div className={"container "} style={{backgroundColor: '#df8640'}}>
                    <br/>
                    <h5 className={styles.username}>{slider.username}</h5>
                    <p className={styles.descriptions}>
                        {showMore ? slider.description.substring(0, 150) : `${slider.description.substring(0, 200)}`}
                        <a className={styles.showmore} type="button" onClick={() => setShowMore(!showMore)}>
                            {showMore ? "Leer menos" : "Leer más"}
                        </a>
                    </p>
                    {/*<p className={styles.descriptions}>{slider.description}</p>*/}
                    <br/>
                    <Rating
                        ratingValue={slider.stars}
                        className={styles.rating_stars}
                        size={25}
                        readonly
                    />
                </div>
            </div>
        </SwiperSlide>

    ))
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                autoplay={{ delay:1800 }}
                style={{
                    // @ts-ignore
                    "--swiper-navigation-color": "#fff",
                }}
                navigation={true}
                spaceBetween={5}
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                    // when window width is >= 640px
                    455: {
                        slidesPerView: 2,
                    },
                    640: {

                        slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 2,
                    },

                    995: {
                        slidesPerView: 3,
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >

                    {content}


            </Swiper>
        </>

    );
  };
