import React, {useState} from "react";
import styles from "./styles.module.css";
import config from "../../../../../infrastructure/config";
import moment from "moment";
import stateService from "../../../../../services/form-service/api";
import useAnalyticsEventTracker from "../../../../../services/analytics/useAnalyticsEventTracker";
import Modal from 'react-bootstrap/Modal';

moment.locale("es");
export default function Form() {
    //Config default date
    const now = moment.utc().local().add(1, 'day');
    const currentDate = now.toJSON();
    const [newHidden, setNewHidden] = useState(false);
    const [values, setValues] = React.useState({
        agenciaIn: "",
        rntIn: "",
        emailIn: "",
        cellphoneIn: ""
    });
    //console.log(currentDate);

    //Function handle, get de values input's
    const handleChange = async (evt:any) =>{
        const value = evt.target.value;
        setValues({
            ...values,
            [evt.target.name]: value
        });
        //console.log(value)
    }
    //Init the save to form
    const initSavePostForm = {
        tenant: "ETRIPS",
        form_ref: "contact",
        created_at: currentDate,
        comm_pref: ["email"],
        form_data: {agencia: values.agenciaIn, rnt:values.rntIn, email: values.emailIn, cellphone: values.cellphoneIn},
        comm_options: {
            transport: {
                host: config.HOST,
                auth:{user: config.USER_MAIL_SENDER, pass: config.USER_MAIL_PASSWORD}
            },
            mail: {
                from: "E-trips "+'<'+config.USER_MAIL_SENDER+'>',
                subject: "Gracias por contactarnos!",
                html: "<h1>¡Hola "+ values.agenciaIn+ "!</h1>"+"<img src='cid:unique@welcome.ee'/>",
                attachments: [{
                    "filename": "Email-confirmacion-etrips.jpg",
                    "cid": "unique@welcome.ee"
                }]
            }
        }
    };

    //Modal view
    function closeModal(){
        setNewHidden(false)
        window.location.reload();
    }

    const handleSubmit = (ev:any) => {

        setNewHidden(true);
        var dt = initSavePostForm;
        stateService.create(dt)
        console.log(dt)
        ev.preventDefault();

    };

    const gaEventTracker = useAnalyticsEventTracker('Contact us');

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.form}>
            <div className="form-group">
                <input
                    className={"fomr-control"}
                    id="agenciaIn"
                    name="agenciaIn"
                    type="text"
                    placeholder="Nombre de Agencia"
                    value={values.agenciaIn}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <input
                    className={"fomr-control"}
                    id="rntIn"
                    name="rntIn"
                    type="number"
                    placeholder="RNT"
                    value={values.rntIn}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <input
                    className={"fomr-control"}
                    id="cellphoneIn"
                    name="cellphoneIn"
                    type="number"
                    placeholder="Tel/Cel"
                    value={values.cellphoneIn}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <input
                    className={"fomr-control"}
                    id="emailIn"
                    name="emailIn"
                    type="email"
                    placeholder="E-mail"
                    value={values.emailIn}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <button onClick={()=>gaEventTracker('contact')} className="btn" type="submit">Enviar</button>
            </div>
            </form>
            {newHidden ?
                <div >
                    <Modal show={true} className={styles.modal_view} >
                        <Modal.Body className={styles.modal_body}>
                            <div >
                                {/* AQUÍ EL COMPONENTE MODAL */}
                                <div className={styles.title_modal}>
                                    <p>GRACIAS POR CONTACTAR CON NOSOTROS</p>
                                </div>
                                <div className={styles.description_modal}>
                                    <p>Pronto nos comunicaremos con su agencia</p>
                                </div>
                                <div className={styles.boton}>
                                    <button onClick={closeModal} className="btn btn-light">Cerrar</button>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            : null}
        </>
    );
}
