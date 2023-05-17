import Form from "./form/form";
import styles from "./styles.module.css";
import {useMediaQuery} from "react-responsive";

export default function SectionForm() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });

    return (
        <>
            <div className={styles.content}>

                <div className="container">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-4">
                            <div className={styles.title}>
                                <p>Déjanos<br/>
                                    tus datos y<br/>
                                    nos <strong>pondremos<br/>
                                    en contacto<br/>
                                    contigo.</strong>
                                </p>
                            </div>
                        </div>

                        <div className="col">
                            <div className={styles.form}>
                                <Form />
                            </div>
                        </div>
                    </div>
                    <div className={styles.logo}>
                        {isDesktopOrLaptop &&<img src="/images/icons/logo-etrips-color2.png"/>}
                    </div>

                </div>

            </div>
        </>
    )

}
