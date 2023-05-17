import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import type { NextPage } from 'next'
import Layout from "../../../business/component/layout/layout";
import Moments from "../../../business/content/home/moments/moments";
import Witnesses from "../../../business/content/home/witnesses/witnesses";
import Planes from "../../../business/content/home/planes/planes";
import Navbar from "../../../business/component/navbar/navbar";

import { useMediaQuery } from 'react-responsive';
import MobNavbar from "../../../business/component/navbar/responsive/mobnavbar";
import Head from "next/head";

const Index: NextPage = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })

    //For render the website
    const [showChild, setShowChild] = useState(false);
    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }

    return (
        <>
            <Layout>
                {/* Principal Layout HOME VIEW */}
                {/* Add Components */}
                <Head>
                    <meta name="description" content="
                Somos anfitriones de la cultura, turismo, buena vida y tour en Cartagena. Adquiere con nosotros
                paquetes turísticos y vive la experiencia pensada en cumplir tus deseos, garantizando que tus sentidos
                se van a conectar con el turismo nacional." />
                </Head>

                <div className={styles.principal}>
                    {isDesktopOrLaptop &&
                        <Navbar/>
                    }

                    {isTabletOrMobile &&
                        <MobNavbar/>
                    }

                    <Planes/>
                </div>

                <div className={styles.moments}>
                    <Moments/>
                </div>

                <div className={styles.witnesses}>
                    <Witnesses/>
                </div>
            </Layout>
        </>
    )
}

export default Index
