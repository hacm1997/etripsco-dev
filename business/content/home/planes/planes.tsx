import Sliders from "./sliders/sliders";
import styles from "./styles.module.css";
import React, { useState } from 'react';
import { useMediaQuery } from "react-responsive";

export default function Principal() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })

    const [plans, setPlans] = useState('');

    const changePlans = (e:any) => {
        setPlans(e.target.value);
    }

    return (
        <>
            <div className={styles.content}>

                <div className="container">
                    <div className="row">
                        <div className={"col "+styles.title}>
                            <h1><strong>Elige tu plan pasadía o tour en Cartagena ¡Disfruta!</strong></h1>
                            <br/>
                            <p>Selecciona tu tipo de plan</p>
                            <div className={styles.custom_select}>
                                <select className={styles.select_plan} onChange={changePlans}>
                                    <option value="o">Elige un plan...</option>
                                    <option value="plan fiestero">Plan fiestero</option>
                                    <option value="planes grupales">Planes grupales</option>
                                    <option value="cursos">Cursos</option>
                                </select>
                            </div>
                        </div>

                        {isDesktopOrLaptop &&
                            <div className="col-9">
                                <Sliders plans={plans} />
                            </div>
                        }
                        {isTabletOrMobile &&
                        <div className="col-10">
                            <Sliders plans={plans} />
                        </div>
                        }
                    </div>


                </div>


            </div>

        </>
    )
}
