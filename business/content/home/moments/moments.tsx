import SlidersMoments from "./sliders_moments/slider_moment";
import styles from "./styles.module.css";
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from "react";
import MobNavbar from "../../../component/navbar/responsive/mobnavbar";

export default function Moments() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })

    //For render the web site
    const [showChild, setShowChild] = useState(false);
    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
    return null;
    }
    return (
        <>
            <div className={styles.content}>

                <div className="container">
                    <div className={styles.cont +" row"}>
                        <div className={"col-2 "+styles.img_icon}>
                            {isDesktopOrLaptop &&<img width={150} height={150} src="/images/moments/logo-e-trips.png" alt="E-trips-logo"/>}
                        </div>

                        <div className="col-7">
                            <h2 className={styles.title_moments}>Momentos inolvidables</h2>

                            <div className={styles.text}>
                                <p>
                                    Disfruta de las playas más bonitas, pagando precios justos y contando
                                    con los mejores planes turísticos y la mejor atención de la ciudad.<br/>

                                    Prepárate para vivir momentos inolvidables en familia, en pareja o con tus amigos.
                                    En  Etrips te ofrecemos todas las experiencias que no te puedes perder al estar en Cartagena.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={styles.moments}>
                    <SlidersMoments/>
                </div>
            </div>

        </>
    )
}
