import type {NextPage} from 'next';
import styles from "./styles.module.css";
import Layout from '../../business/component/layout/layout';
import Navbar from '../../business/component/navbar/navbar';
import Boats from '../../business/content/boats/boats';
import { useMediaQuery } from 'react-responsive';
import MobNavbar from "../../business/component/navbar/responsive/mobnavbar";
import React, { useEffect, useState } from 'react';
import Head from "next/head";

const Home: NextPage = () => {
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
        <Layout>
            <Head>
                <meta name="description" content="Alquiler de botes y lanchaz con Etrips" />
            </Head>
            {/*Principal Component Layout for Boats Page*/}
            <div className={styles.principal}>
                {isDesktopOrLaptop &&
                    <Navbar/>
                }

                {isTabletOrMobile &&
                    <MobNavbar/>
                }

                <Boats />
            </div>


        </Layout>

        </>
    )
}

export default Home
