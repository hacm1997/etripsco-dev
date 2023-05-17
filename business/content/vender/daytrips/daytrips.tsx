import ScrollSli from "./sliders/scroll_sli";
import styles from "./styles.module.css";
import React from "react";

export default function Daytrips() {

    return (
        <>
            <div className={styles.cont}>

                <div className={styles.content}>
                    <h3>Nuestros planes de pasadías</h3>

                </div>

                <ScrollSli />

            </div>
        </>
    )

}
