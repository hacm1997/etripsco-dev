import styles from "./styles.module.css";
import * as React from 'react';
import { Range, getTrackBackground } from 'react-range';
import Pagination from "../../content/boats/pagination/pagination";
import {formatNumber} from "../../../services/service";

const STEP = 20000;
const MIN = 200000;
const MAX = 1000000;

const STEP2 = 1;
const MIN2 = 2;
const MAX2 = 40;

export default function FiltroBotes({ rtl, rtl2, rangePrice, date1, date2, persons, isClick }: any) {
    const [values, setValues] = React.useState([200000, 600000]);
    const [values2, setValues2] = React.useState([2, 20]);

    function handleChangePrice(values:any){
        setValues(values);
    };

    function handleChangeCapacity(values2:any){
        setValues2(values2);
    };

    return (
        <>
        <div className={"container "+styles.content}>

            <div className="row">

                    <div className={"col-3 "+styles.general}>
                        {/*<div className={styles.content_1}>
                            <h2>Filtrar</h2>
                            <p>Precio</p>

                            <div className={styles.range}>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        flexWrap: 'wrap'
                                    }}
                                >
                                    <Range
                                        values={values}
                                        step={STEP}
                                        min={MIN}
                                        max={MAX}
                                        rtl={rtl}
                                        onChange={handleChangePrice}
                                        renderTrack={({ props, children }) => (
                                            <div
                                                onMouseDown={props.onMouseDown}
                                                onTouchStart={props.onTouchStart}
                                                style={{
                                                    ...props.style,
                                                    height: '36px',
                                                    display: 'flex',
                                                    width: '100%'
                                                }}
                                            >
                                                <div
                                                    ref={props.ref}
                                                    style={{
                                                        height: '5px',
                                                        width: '100%',
                                                        borderRadius: '4px',
                                                        background: getTrackBackground({
                                                            values,
                                                            colors: ['#ccc', '#DF863F', '#ccc'],
                                                            min: MIN,
                                                            max: MAX,
                                                            rtl
                                                        }),
                                                        alignSelf: 'center'
                                                    }}
                                                >
                                                    {children}
                                                </div>
                                            </div>
                                        )}
                                        renderThumb={({ props }) => (
                                            <div
                                                {...props}
                                                style={{
                                                    ...props.style,
                                                    height: '16px',
                                                    width: '16px',
                                                    borderRadius: '50px',
                                                    backgroundColor: '#DF863F',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    boxShadow: '0px 2px 6px #AAA'
                                                }}
                                            >

                                            </div>
                                        )}
                                    />
                                </div>
                                <div className={styles.content_range}>
                                    <div>
                                        <p>Min</p>
                                    </div>
                                    <div>
                                        <p>Max</p>
                                    </div>
                                </div>
                                <div className={styles.valor_filtro}>
                                    <div  className={styles.vaule1}>
                                        <p><span>$</span> {formatNumber(values[0])}</p>
                                    </div>
                                    <div  className={styles.vaule2}>
                                        <p><span>$</span> {formatNumber(values[1])}</p>
                                    </div>
                                </div>

                            </div>


                        </div><br/>*/}

                        <div className={styles.content_1}>
                            <p>Capacidad</p>

                            <div className={styles.range}>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        flexWrap: 'wrap'
                                    }}
                                >
                                    <Range
                                        values={values2}
                                        step={STEP2}
                                        min={MIN2}
                                        max={MAX2}
                                        rtl={rtl2}
                                        onChange={handleChangeCapacity}
                                        renderTrack={({ props, children }) => (
                                            <div
                                                onMouseDown={props.onMouseDown}
                                                onTouchStart={props.onTouchStart}
                                                style={{
                                                    ...props.style,
                                                    height: '36px',
                                                    display: 'flex',
                                                    width: '100%'
                                                }}
                                            >
                                                <div
                                                    ref={props.ref}
                                                    style={{
                                                        height: '5px',
                                                        width: '100%',
                                                        borderRadius: '4px',
                                                        background: getTrackBackground({
                                                            values: values2,
                                                            colors: ['#ccc', '#DF863F', '#ccc'],
                                                            min: MIN2,
                                                            max: MAX2,
                                                            rtl: rtl2
                                                        }),
                                                        alignSelf: 'center'
                                                    }}
                                                >
                                                    {children}
                                                </div>
                                            </div>
                                        )}
                                        renderThumb={({ props }) => (
                                            <div
                                                {...props}
                                                style={{
                                                    ...props.style,
                                                    height: '16px',
                                                    width: '16px',
                                                    borderRadius: '50px',
                                                    backgroundColor: '#DF863F',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    boxShadow: '0px 2px 6px #AAA'
                                                }}
                                            >

                                            </div>
                                        )}
                                    />
                                </div>
                                <div className={styles.content_range}>
                                    <div>
                                        <p>Min</p>
                                    </div>
                                    <div>
                                        <p>Max</p>
                                    </div>
                                </div>
                                <div className={styles.valor_filtro}>
                                    <div className={styles.vaule1}>
                                        <p>{formatNumber(values2[0])}</p>
                                    </div>
                                    <div className={styles.vaule2}>
                                        <p>{formatNumber(values2[1])}</p>
                                    </div>
                                </div>

                            </div>


                        </div>

                    </div>

                    <div className={"col-8 "+ styles.slider}>
                        <Pagination
                        selectedPrice={values}
                        selectedCapacity={values2}
                        //rangePriceFilter1={rangePrice}
                        //date1={date1}
                        //date2={date2}
                        persons={persons}
                        isClick={isClick}
                        />
                    </div>
                </div>

        </div>
        </>
    )
}
