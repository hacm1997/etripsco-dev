import styles from "./styles.module.css";
import Witnesses_Sliders from "./witnesses_sliders/witnesses_sliders";

export default function Principal() {

    return (
        <>

        <div className={styles.container}>
            <h3>Ellos son testigos</h3>
        </div>

        <div className={styles.container2}>
            <p>
                ¿Te interesa conocer y vivir  lo mejor de Cartagena?
                Mira lo que dicen nuestros clientes de todos los servicios que han disfrutado con nosotros.
                Reserva ahora y también podrás contar tu fantástica experiencia.
            </p>
        </div>
        <div className="container">
            <div className="row">
                <div className="col"></div>
                <div className="col-10">
                <div className={"container "+styles.w_sliders}>
                    <Witnesses_Sliders/>
                </div>
                </div>
                <div className="col"></div>
            </div>
        </div><br /><br /><br /><br />

        </>
    )
}
