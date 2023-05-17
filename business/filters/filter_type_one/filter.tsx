import styles from "./styles.module.css"
import 'antd/dist/antd.css';
import { useState } from 'react';
import * as React from "react";
import useMouseUp from "../../../hooks/useMouseUp";
import moment from "moment";
import "moment/locale/es";
import FiltroBotes from "../filter_type_two/filter_two";

moment.locale("es");


const Filter: React.FC<{ min: any, max: any, rtl: boolean }> = ({ rtl }) => {
    const [values, setValues] = React.useState([0, 500000]);
    const [subMenuPrecio, setSubMenuPrecio] = useState(false)
    const [subMenuPersonas, setSubMenuPersonas] = useState(false)
    const refsubMenuPrecio = React.useRef<HTMLDivElement>(null);
    const refsubMenuPersonas = React.useRef<HTMLDivElement>(null);
    const [personas, setPersona] = useState(1);

    const persona = () => {
        setSubMenuPersonas(!subMenuPersonas)
    }

    useMouseUp(refsubMenuPrecio, () => {
        setSubMenuPrecio(false)
    })
    useMouseUp(refsubMenuPersonas, () => {
        setSubMenuPersonas(false)
    })

    //Variables and function for disabled days of second datepicker
    const [date, setDate] = React.useState(false);
    const [date2, setDate2] = React.useState(false);

    const [click, setClick] = React.useState(false);

    return (
        <>
            <div className={styles.general}>

                <form action="">
                    <div className={styles.content_filter+" input-group"}>

                        <div onClick={persona} className={styles.rango_person}>
                            <i className={'bx bxs-user ' + styles.ico_use}></i> <p>{personas} {personas < 2 ? ' Persona' : 'Personas'}</p>
                        </div>
                        {subMenuPersonas ? <div ref={refsubMenuPersonas} className={styles.sub_menu_persona}>
                            <div className={styles.persona}>
                                <p>Personas</p>
                                <div className={styles.calculo}>
                                    <span onClick={() => setPersona(personas > 0 ? personas - 1 : personas)} className={styles.neg}>-</span>
                                    <span onClick={() => setPersona(personas + 1)} className={styles.mas}>+</span>
                                </div>
                            </div>
                        </div> : null}
                        <div hidden={true}>
                            <button type="button"  className={"btn " + styles.btn_buscar}>Buscar</button>
                        </div>

                    </div>
                </form>

            </div>

            {/*Child filter and boats cards pagination*/}
            <FiltroBotes
                rtl={false}
                rtl2={false}
                rangePrice={values}
                date1={date}
                date2={date2}
                persons={personas}
                isClick={click}
            />

        </>
    )
}
export default Filter;
