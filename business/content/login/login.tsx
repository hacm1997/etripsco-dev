import styles from "./styles.module.css";
import React, {useEffect, useMemo, useState} from "react";
import config from "../../../infrastructure/config";
import stateService, {useData} from "../../../services/form-service/api";
import BodyTable from "./table";
import * as XLSX from 'xlsx';

export default function Login() {
    const [hidden, setHidden] = useState(true);
    const [hidden2, setHidden2] = useState(false);
    const [hidden3, setHidden3] = useState(false);
    const [dataJson, getData] = useData();
    const [clickToAuth, setclickToAuth] = useState(false);
    const [inputs, setInputs] = useState(
        {
            username: "",
            password: "",
            amount: 10
        }
    );

    //Function handle, get de values input's
    const handleChanges = async (evt:any) =>{
        const value = evt.target.value;
        setInputs({
            ...inputs,
            [evt.target.name]: (value)
        });
    }
    //console.log(inputs.amount)
    function auth(){
        if (inputs.username == config.USERNAME) {
            if (inputs.password == config.PASSWORD) {
                setclickToAuth(true);
                setHidden(false);
                setHidden2(true);
                setHidden3(false);
                setclickToAuth(true);
            } else {
                setHidden3(true);
            }
        } else {
            setHidden3(true);
        }
    }
    const downloadExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(dataJson.map((dt:any) => dt.form_data));
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, "RegistroEtrips.xlsx");
    };

    //console.log(inputs.amount)
    useEffect(()=>{
        if(clickToAuth === true){
            getData();
        }
    }, [clickToAuth]);
    //console.log(dataJson);
    return (
        <>
            <div className={"container "+styles.content}>

                {hidden ?<div className={styles.form}>
                    <div className={styles.logo}>
                        <img src="/images/icons/logo-e-trips-color.png" alt="Etrips"/>
                    </div>

                    <div className={styles.auth_login}>
                        <input onChange={handleChanges} name="username" className="form-control" type="text" placeholder="Usuario"/>
                    </div>

                    <div className={styles.auth_login}>
                        <input onChange={handleChanges} name="password" className="form-control" type="password" placeholder="Contraseña"/>
                    </div>

                    <br/>
                    {hidden3 ?
                        <div className={styles.error}>
                        <p>¡Credenciales erroneas!</p><br/>
                        </div>
                    : null}
                    <div className={styles.btn}>
                        <a href="/" type="button" className="btn btn-light">Salir</a>
                        <button onClick={auth} className="btn btn-success">Continuar</button>
                    </div>

                </div>:null}

                {hidden2 ? <section>
                    <div className={styles.logo}>
                        <img src="/images/icons/logo-e-trips-color.png" alt="Logo-Etrips"/>
                    </div>
                    <div className={styles.data_info}>
                        <h5>¡Registro de agencias que completaron el formulario de contacto!</h5>
                        <div className={styles.auth_login}>
                            <p>Datos por página:</p>
                            <select onChange={handleChanges} name="amount">
                                <option value={10}>10</option>
                                <option value={15}>15</option>
                                <option value={20}>20</option>
                                <option value={30}>30</option>
                                <option value={50}>50</option>
                            </select>
                            <button onClick={downloadExcel} className="btn btn-sm btn-success" type="button">Descargar Excel</button>
                        </div>

                        <div >
                            <BodyTable json={dataJson} count={inputs.amount}/>
                        </div>

                    </div>
                </section>: null}

            </div>
        </>
    )
}
