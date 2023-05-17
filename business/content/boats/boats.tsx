import Filter from "../../filters/filter_type_one/filter";
import styles from "./styles.module.css";
import * as React from "react";
import {useMediaQuery} from "react-responsive";

export default function Boats() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    return (
        <>
            {isDesktopOrLaptop &&<Filter max={0} min={0} rtl={false}/>}
            {isTabletOrMobile && <div className={styles.filterMob}><Filter max={0} min={0} rtl={false}/></div>}
            {isDesktopOrLaptop &&
                <img className={styles.logue} src="/images/icons/logo-etrips-color2.png" alt="E-trips"/>
            }
        </>
    )

}
