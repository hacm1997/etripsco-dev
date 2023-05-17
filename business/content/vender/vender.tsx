import styles from "./styles.module.css";
import { useMediaQuery } from 'react-responsive';

export default function Vender() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-2 "></div>
                    <div className={"col-6 "+styles.main_title}>
                        <div>
                            <h1>¿Quieres vender <br/> nuestros planes? <br />
                                Escríbenos
                            </h1>
                            <button className={styles.btn_contact}><a>Contactar</a></button>
                        </div>
                        {isDesktopOrLaptop &&
                            <img className={styles.img} src="/images/vender/person.png" alt="Quieres-Vender-Etrips"/>
                        }
                        
                    </div>
                </div>
            </div>
        </>
    )

}