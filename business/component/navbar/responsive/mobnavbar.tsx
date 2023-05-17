import React from 'react';
import styles from "./styles.module.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function MobNavbar() {

    return (
        <>
            <Navbar expand="lg">
                <Container>
                <a href="/"><img width={150} height={100} src="/images/icons/logo-e-trips-color.png" /></a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={"me-auto "+ styles.mbMenu}>
                        <Nav.Link href="/">Tours</Nav.Link>
                        <Nav.Link href="/pasadias">Pasadias</Nav.Link>
                        <Nav.Link href="/botes">Botes</Nav.Link>
                        <Nav.Link href="/quieres-vender">¿Quieres vender?</Nav.Link>
                        <Nav.Link href="https://api.whatsapp.com/send?phone=573006282760&text=%C2%A1Hola%20Etrips!%20%F0%9F%8C%B4%F0%9F%90%AC%20%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20me%20gustar%C3%ADa%20sumarme%20a%20la%20experiencia%20de%20disfrutar%20Cartagena%20con%20ustedes">Reservar</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
