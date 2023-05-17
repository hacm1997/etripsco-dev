import React from "react";
import Head from "next/head";
import styles from "./styles.module.css";
import { useMediaQuery } from 'react-responsive';
import Footer from "../footer/footer";
import Script from "next/script";

export default function Layout({children}: any) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
    return (
        <>

        <div className={styles.content}>

            <Head>
                <title>E-trips - Anfitriones de la cultura y la buena vida</title>
                <meta name="keywords" content="Pasadías, Tour, Buena vida, Cultura, Tour en Cartagena, Botes, Playas, Beach, Lanchas" />
                <meta name="google-site-verification" content="pfuLpIW9ahnrc3CXzEPkdYmJpQmSHtlqnjhH_ie8zDQ" />
            </Head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
            <link rel="canonical" href="https://etripsco.com"/>
            <a href="https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%20Quiero%20ser%20aliado%20de%20ustedes%20y%20vender%20sus%20planes.%20%C2%BFQu%C3%A9%20debo%20hacer?"
               className={styles.float} target="_blank" rel="noreferrer">
                <i className="fa fa-whatsapp my-float"></i>
            </a>
            {children}

            {isDesktopOrLaptop &&
                <div className={styles.footer}>
                    <Footer />
                </div>
            }

            {isTabletOrMobile &&
                <div className={styles.footer_responsive}>
                    <Footer />
                </div>
            }

        </div>

        </>
    )
}
