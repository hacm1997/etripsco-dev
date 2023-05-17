import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

const data = [
    {
        id: 1,
        username: 'root',
        image: '/images/moments/moment1.png'
    },
    {
        id: 2,
        username: 'root',
        image: '/images/moments/moment2.png'
    },
    {
        id: 3,
        username: 'root',
        image: '/images/moments/moment3.png'
    },
    {
        id: 4,
        username: 'root',
        image: '/images/moments/moment1.png'
    },
    {
        id: 2,
        username: 'root',
        image: '/images/moments/moment2.png'
    },
    {
        id: 3,
        username: 'root',
        image: '/images/moments/moment3.png'
    },
    {
        id: 4,
        username: 'root',
        image: '/images/moments/moment1.png'
    }
]

export default function SlidersMoments(){
    const content = data.map( (slider:any, index:any) => (
        <SwiperSlide key={index} className={"slide "+styles.slide_content}>
            <div key={index}>
                <div className={"slide-content "+styles.sliders} style={{backgroundImage: `url(${slider.image})`}} title="Momentos-inolvidables">
                </div>
            </div>
        </SwiperSlide>

    ))
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={80}
                slidesPerView={1}
                style={{
                    // @ts-ignore
                    "--.swiper-scrollbar-drag-color": "#fff",
                }}

                navigation
                scrollbar={{ dragSize: 100 }}
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
                <div className={styles.content}>

                    { content }

                </div>

            </Swiper>
        </>

    );
  };
