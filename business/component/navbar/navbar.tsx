import styles from "./styles.module.css";
import { useMediaQuery } from 'react-responsive';
import {BrowserRouter as Router, Routes, Route, NavLink, useRoutes} from "react-router-dom";
import Link from "next/link";
import { useRouter } from "next/router";
import {router} from "next/client";
import {useEffect, useState} from "react";
import useAnalyticsEventTracker from "../../../services/analytics/useAnalyticsEventTracker";

export default function Navbar() {
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
    const router = useRouter();
    const [linkReserv, setLinkReserv] = useState("");
    let hiddenButton = true;

    useEffect(()=>{
        if(router.asPath === "/"){
            setLinkReserv("https://api.whatsapp.com/send?phone=573006282760&text=%C2%A1Hola%20Etrips!%20%F0%9F%8C%B4%F0%9F%90%AC%20%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20me%20gustar%C3%ADa%20sumarme%20a%20la%20experiencia%20de%20disfrutar%20Cartagena%20con%20ustedes");
        }
        if(router.asPath === "/pasadias"){
            setLinkReserv("https://api.whatsapp.com/send?phone=573006282760&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%20Me%20gustar%C3%ADa%20reservar%20con%20ustedes%20un%20pasad%C3%ADa");
        }
        if(router.asPath === "/botes"){
            setLinkReserv("https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%20Estoy%20interesad@%20en%20alquilar%20un%20bote%20con%20ustedes");
        }
        if(router.asPath === "/home/index"){
            setLinkReserv("https://api.whatsapp.com/send?https://api.whatsapp.com/send?phone=573006282760&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%20%20Me%20gustar%C3%ADa%20sumarme%20a%20la%20experiencia%20de%20los%20tours%20con%20ustedes");
        }
    }, []);

    const style = {
        color: router.asPath === "/" ? '#e67a1b' : '#0e738e',
        fontSize: "18px",
        fontWeight: "bold",
        textDecoration: "none"
    }
    const style2 = {
        color: router.asPath === "/pasadias" ? '#e67a1b' : '#0e738e',
        fontSize: "18px",
        fontWeight: "bold",
        textDecoration: "none"
    }
    const style3 = {
        color: router.asPath === "/botes" ? '#e67a1b' : '#0e738e',
        fontSize: "18px",
        fontsize: "20px",
        fontWeight: "bold",
        textDecoration: "none"
    }
    const style4 = {
        color: router.asPath === "/quieres-vender" ? '#e67a1b' : '#0e738e',
        fontSize: "18px",
        fontWeight: "bold",
        textDecoration: "none"
    }

    if(router.asPath === "/quieres-vender"){
        hiddenButton = false;
    }
    const gaEventTracker = useAnalyticsEventTracker('Menu');

    return (
        <>

            <div className={"container "+styles.navbar}>
                <div className="row">

                    <div className={"col-3 "+styles.menu}> {/* E-trips Logue */}
                        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                        <a href="/"><img width={150} height={100} src="/images/icons/logo-e-trips-color.png" /></a>
                    </div>

                    <div className={"col-2 "+styles.menu}></div>

                    <div className={"col-7 "+styles.menu}>
                        <nav className={"navbar navbar-light " + styles.navigation}>{/* Menu's */}

                            <Link href="/">
                                <a onClick={()=>gaEventTracker('home')} style={style} className={"navbar-brand "+ router.pathname=="/" ? "active" : "non-active"}>Tours</a>
                            </Link>
                            <Link href="/pasadias" className={styles.navlinked}>
                                <a onClick={()=>gaEventTracker('pasadias')} style={style2} className={"navbar-brand "+ router.pathname=="/pasadias" ? "active" : "non-active"}>Pasadías</a>
                            </Link>
                            <Link href="/botes" className={styles.navlinked}>
                                <a onClick={()=>gaEventTracker('botes')} style={style3} className={"navbar-brand "+ router.pathname=="/botes" ? "active" : "non-active"}>Botes</a>
                            </Link>
                            <Link href="/quieres-vender" className={styles.navlinked}>
                                <a onClick={()=>gaEventTracker('quieres_vender')} style={style4} className={"navbar-brand "+ router.pathname=="/quieres-vender" ? "active" : "non-active"}>¿Quieres vender?</a>
                            </Link>

                            {hiddenButton ?<a onClick={()=>gaEventTracker('reservar')} href={linkReserv} target="__blank"><button className={"btn btn-warning "+styles.buttonR}>
                                <strong>Reservar</strong>
                            </button></a>: null}

                        </nav>
                    </div>


                </div>
            </div>

        </>
    )
}
