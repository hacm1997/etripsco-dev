import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {

    return (
        <>
            <section className={styles.footer}>
                <div className={styles.display+" container"}>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className={styles.footer_content +" col-md-3"}>
                            <img className={styles.imgfooter} src="/images/icons/logo-e-trips-blanco.png" alt="Logo | E-trips"/>
                            <br/>
                            <h5 className={styles.nosotros}>
                                <strong>Sobre nosotros</strong>
                            </h5>
                            <div className={styles.contentFooter}>

                                <div>
                                    <p className={styles.contenido}>Somos anfitriones de la cultura, turismo,
                                        buena vida y tour en Cartagena. Adquiere con nosotros paquetes turísticos
                                        y vive la experiencia pensada en cumplir tus deseos, garantizando que tus
                                        sentidos se van a conectar con el turismo nacional.</p>
                                </div>


                            </div>
                        </div>

                        <div className={styles.footer_content +" col-md-3 align-self-end"}>
                            <h5 className={styles.tituContacto}>
                                <strong>Contacto</strong>
                            </h5>
                            <div className={styles.icoCont}>
                                <Link href={"#"}>
                                    <a>
                                        <img className="hoverIcon rounded-circle" width={30} height={30}
                                             src="/images/icons/ubicacion.png" alt=""/>
                                    </a>
                                </Link>
                                {" "}
                                <p className={styles.contenidoContacto}>
                                    &nbsp;&nbsp;Calle del Colegio 34-100–34-2, <br/> &nbsp;&nbsp;Cartagena, Colombia
                                </p>

                            </div>
                            <div className={styles.icoCont}>


                                <img
                                    width={30}
                                    height={30}
                                    className="rounded-circle"
                                    src="/images/icons/telefono.png"
                                    alt=""
                                />
                                {" "}

                                <p className={styles.contenidoContacto}>
                                    &nbsp;&nbsp; (+57) 324 4548138
                                    <br/>
                                    &nbsp;&nbsp; (+57) 300 6282760
                                </p>
                            </div>

                            <div className={styles.icoCont}>


                                <img
                                    width={30}
                                    height={30}
                                    className="rounded-circle"
                                    src="/images/icons/horario.png"
                                    alt=""
                                />
                                {" "}

                                <p className={styles.contenidoContacto}>
                                    &nbsp;&nbsp; Horario de atención
                                    <br/>
                                    &nbsp;&nbsp; Lunes a Sábado
                                    <br />
                                    &nbsp;&nbsp; 07:00 am a 09:00 pm
                                </p>
                            </div>
                        </div>
                        <div  className={styles.footer_content +" col-md-4"}>
                            <h5 className={styles.tituContacto}>
                                <strong>Redes sociales</strong>
                            </h5>
                            <div className={styles.rSocial}>

                                <Link href="https://www.instagram.com/etripsco/" passHref>
                                    <a target="_blank" className={styles.icoI}>
                                        <img width={30} height={30}
                                             className={styles.ico + " hoverIcon rounded-circle"}
                                             src="/images/icons/instagram.png" alt="" title="Instagram"/>
                                    </a>
                                </Link>
                                <Link href="https://www.facebook.com/etripsco/" passHref>
                                    <a target="_blank" className={styles.icoF}>
                                        <img width={30} height={30}
                                             className={styles.ico + " hoverIcon rounded-circle"}
                                             src="/images/icons/facebook.png" alt="" title="Facebook"/>
                                    </a>
                                </Link>
                                <Link href="https://www.tiktok.com/@cholonforever?_t=8W2BEROqLXp&_r=1" passHref>
                                    <a target="_blank" className={styles.icoT}>
                                        <img width={30} height={30}
                                             className={styles.ico + " hoverIcon rounded-circle"}
                                             src="/images/icons/tik-tok.png" alt="" title="Tik Tok"/>
                                    </a>
                                </Link>


                            </div>

                            <div className={styles.policy}>
                                <Link href="/policy/Terminos y condiciones de Adventure.pdf">
                                    <a target="_blank" className={styles.policy}>
                                        Ver Términos y Condiciones
                                    </a>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <br/>
                            <p className={styles.desarrollado}>
                                Desarrollado por{" "}
                                <Link
                                    href="https://kru360.com/?utm_source=Pagina+web&utm_medium=Clic&utm_campaign=mfr&utm_id=mfr"
                                    passHref>
                                    <a className={styles.kru}
                                       target="_blank">
                                        KRU 🚀
                                    </a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
