import React, { useEffect, useState } from "react";
import type {NextPage} from 'next';
import styles from "./styles.module.css";
import Layout from '../../business/component/layout/layout';
import Navbar from '../../business/component/navbar/navbar';
import Vender from '../../business/content/vender/vender';
import { useMediaQuery } from 'react-responsive';
import MobNavbar from "../../business/component/navbar/responsive/mobnavbar";
import Tours from "../../business/content/vender/tours/tours";
import Daytrips from "../../business/content/vender/daytrips/daytrips";
import SectionForm from "../../business/content/vender/section_form/section_form";
import Head from "next/head";

const Home: NextPage = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });

    //For render the webSite
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
                <meta name="description" content="Vende con nosotros" />
            </Head>
            {/*Principal Component Layout for 'Quieres vender' Page*/}
            <div className={styles.content2}>
                <a href="#form" className={styles.float} rel="noreferrer">
                    <i className="fa fa-arrow-down"></i>
                </a>
            </div>

            <div className={styles.principal}>
                {isDesktopOrLaptop &&
                    <Navbar/>
                }

                {isTabletOrMobile &&
                    <MobNavbar/>
                }

                <Vender />
            </div>

            <Tours />

            <Daytrips />

            <div id="form">
                <SectionForm />
            </div>

        </Layout>

        </>
    )
}

export default Home
