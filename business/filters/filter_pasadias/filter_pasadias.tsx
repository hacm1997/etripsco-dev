import styles from "./styles.module.css";
import * as React from 'react';
import { Range, getTrackBackground } from 'react-range';
import PasadiasSli from "../../content/pasadias/sliders/pasadias_slider";
import { useMediaQuery } from 'react-responsive';
import {usePfiesta} from "../../content/home/planes/sliders/data";
import {dataPsdias} from "../../../services/service";

const STEP = 10000;
const MIN = 30000;
const MAX = 500000;



//Set Format to Number Price's
function formatNumber(number: number){
    return new Intl.NumberFormat().format(number);
}

const FiltroPasadias: React.FC<{rtl: boolean}> = ({ rtl }) => {
    //const [values, setValues] = React.useState([30000, 270000]);
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });

    /*function handleChangePrice(values:any){
        setValues(values);
    };*/

    //console.log(text)

    return (
        <>
        <div className="container">
            <div className={"row "}>
                <div className={"col-2 "}>{/*+styles.general*/}
                    
                    {isDesktopOrLaptop &&
                        <div className={styles.logo}>
                            <img src="/images/icons/logo-etrips-color2.png" alt="Logo-Etrips" />
                        </div>

                    }

                </div>
                <div className={"col "+ styles.slider}>
                    <PasadiasSli
                        data= {dataPsdias}
                        /*selectedPrice={values}*/
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export default FiltroPasadias;
