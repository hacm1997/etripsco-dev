import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import type { NextPage } from 'next'
import Layout from "../../business/component/layout/layout";
import Navbar from "../../business/component/navbar/navbar";
import {useMediaQuery} from "react-responsive";
import MobNavbar from "../../business/component/navbar/responsive/mobnavbar";
import Login from "../../business/content/login/login";
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
            <Head>
                <meta name="description" content="Login admin - Etrips" />
            </Head>
            <Login />

        </>
    )
}

export default Index
