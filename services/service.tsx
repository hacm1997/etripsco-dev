import { useState } from "react";
//Planes data
export const dataPlans = [
    {
        id: 1,
        id_name: "pfiesta",
        username: 'root',
        title: 'Bahía Atardecer',
        price: '40.000',
        description: 'Recorre la bahía de Cartagena mientras cae el atardecer y disfrutas de la mejor música crossover, licores y bebidas nacionales.',
        linked: '#',
        image: '/images/principal_sliders/cholon-forever.jpg',
        link: 'https://api.whatsapp.com/send?phone=573006282760&text=%C2%A1Hola%20Etrips!%F0%9F%8C%B4%F0%9F%90%AC%20%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20me%20gustar%C3%ADa%20sumarme%20a%20la%20experiencia%20del%20tour%20Bah%C3%ADa%20Atardecer%20para%20el%20d%C3%ADa:%20_____%20'
    },
    {
        id: 2,
        id_name: "pfiesta",
        username: 'root',
        title: 'Bahía Nocturno',
        price: '40.000',
        description: 'Recorre la bahía de Cartagena mientras ves las luces de la ciudad y disfrutas de la mejor música crossover, licores y bebidas nacionales.',
        linked: '#',
        image: '/images/principal_sliders/princesa.png',
        link: 'https://api.whatsapp.com/send?phone=573006282760&text=%C2%A1Hola%20Etrips!%F0%9F%8C%B4%F0%9F%90%AC%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20me%20gustar%C3%ADa%20sumarme%20a%20la%20experiencia%20del%20Tour%20Bah%C3%ADa%20Nocturno%20para%20el%20d%C3%ADa:%20_____%20'
    },
    {
        id: 3,
        id_name: "pfiesta",
        username: 'root',
        title: 'Cholon Forever',
        price: '200.000',
        description: 'Disfruta de una gran fiesta en yate dentro de la isla más rumbera del caribe. Incluye almuerzo y dos cervezas nacionales.',
        linked: '#',
        image: '/images/principal_sliders/cholon-forever.jpg',
        link: 'https://api.whatsapp.com/send?phone=573006282760&text=%C2%A1Hola%20Etrips!%F0%9F%8C%B4%F0%9F%90%AC%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20me%20gustar%C3%ADa%20sumarme%20a%20la%20experiencia%20del%20Tour%20Cholon%20Forever%20para%20el%20d%C3%ADa:%20_____%20'
    },
    {
        id: 4,
        id_name: "pgroup",
        username: 'root',
        title: 'Tour Agua Azul Terrestre',
        price: '200.000',
        description: 'Disfruta un plan en compañía de tus amigos en playa blanca baru.',
        linked: '#',
        image: '/images/principal_sliders/cholon-forever.jpg',
        link: 'https://api.whatsapp.com/send?phone=573006282760&text=%C2%A1Hola%20Etrips!%F0%9F%8C%B4%F0%9F%90%AC%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20me%20gustar%C3%ADa%20sumarme%20a%20la%20experiencia%20del%20Tour%20Agua%20Azul%20Terrestre%20para%20el%20d%C3%ADa:%20_____%20'
    },
    {
        id: 5,
        id_name: "pgroup",
        username: 'root',
        title: 'Tour 5 Islas + Plankton',
        price: '250.000',
        description: 'Disfruta de las islas más rumberas del caribe, encontrarás un gran paisaje y  arrecifes coralinos.',
        linked: '#',
        image: '/images/principal_sliders/princesa.png',
        link: 'https://api.whatsapp.com/send?phone=573006282760&text=%C2%A1Hola%20Etrips!%F0%9F%8C%B4%F0%9F%90%AC%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20me%20gustar%C3%ADa%20sumarme%20a%20la%20experiencia%20del%20Tour%205%20Islas%20+%20Plankton%20para%20el%20d%C3%ADa:%20_____%20'
    },
    {
        id: 6,
        id_name: "pgroup",
        username: 'root',
        title: 'Tour 5 Islas',
        price: '220.000',
        description: 'Conoce Bocachica, Islas del Rosario, Agua Azul Barú, Playa Tranquila Barú e Isla Cholon en un solo día.',
        linked: '#',
        image: '/images/principal_sliders/cholon-forever.jpg',
        link: 'https://api.whatsapp.com/send?phone=573006282760&text=%C2%A1Hola%20Etrips!%F0%9F%8C%B4%F0%9F%90%AC%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20me%20gustar%C3%ADa%20sumarme%20a%20la%20experiencia%20del%20Tour%205%20Islas%20para%20el%20d%C3%ADa:%20_____%20'
    },
    {
        id: 7,
        id_name: "pgroup",
        username: 'root',
        title: 'Tour 4 Islas + Planctons',
        price: '180.000',
        description: 'Visita las Islas del Rosario, Isla Cholon, Agua Azul, Playa Tranquila y finaliza en la Laguna Encanta donde conocerás la magia del plancton luminoso.',
        linked: '#',
        image: '/images/principal_sliders/cholon-forever.jpg',
        link: 'https://api.whatsapp.com/send?phone=573006282760&text=%C2%A1Hola%20Etrips!%F0%9F%8C%B4%F0%9F%90%AC%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20me%20gustar%C3%ADa%20sumarme%20a%20la%20experiencia%20del%20Tour%204%20Islas%20+%20Plancton%20para%20el%20d%C3%ADa:%20_____%20'
    },
    {
        id: 8,
        id_name: "pgroup",
        username: 'root',
        title: 'Tour 4 Islas ',
        price: '160.000',
        description: 'En un dia conocerás las Islas del Rosario y podrás bañarte en las aguas de Isla Cholon, Agua Azul y Playa Tranquila. Incluye almuerzo. ',
        linked: '#',
        image: '/images/principal_sliders/cholon-forever.jpg',
        link: 'https://api.whatsapp.com/send?phone=573006282760&text=%C2%A1Hola%20Etrips!%F0%9F%8C%B4%F0%9F%90%AC%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20me%20gustar%C3%ADa%20sumarme%20a%20la%20experiencia%20del%20Tour%204%20Islas%20para%20el%20d%C3%ADa:%20_____%20'
    },
    {
        id: 9,
        id_name: "curses",
        username: 'root',
        title: 'Buceo Mini Curso',
        price: '230.000',
        description: 'Sumérgete y vive la experiencia bajo del mar realizando el curso de buceo que Etrips tiene para ti.',
        linked: '#',
        image: '/images/principal_sliders/cholon-forever.jpg',
        link: 'https://api.whatsapp.com/send?phone=573006282760&text=%C2%A1Hola%20Etrips!%F0%9F%A5%BD%F0%9F%90%9F%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20me%20gustar%C3%ADa%20vivir%20la%20experiencia%20debajo%20el%20mar,%20estoy%20interesad@%20en%20realizar%20el%20curso%20de%20Buceo%20Mini%20Curso.%20%C2%BFMe%20pueden%20suministrar%20m%C3%A1s%20informaci%C3%B3n'
    },
    {
        id: 10,
        id_name: "curses",
        username: 'root',
        title: 'Buceo en Naufragios',
        price: '270.000',
        description: '¿Te gustaría realizar un curso de buceo especializado? Inscribete con Etrips para vivir la experiencia en las islas de Cartagena.',
        linked: '#',
        image: '/images/principal_sliders/princesa.png',
        link: 'https://api.whatsapp.com/send?phone=573006282760&text=%C2%A1Hola%20Etrips!%F0%9F%A5%BD%F0%9F%90%9F%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20me%20gustar%C3%ADa%20vivir%20la%20experiencia%20debajo%20el%20mar,%20estoy%20interesad@%20en%20realizar%20el%20curso%20de%20Buceo%20en%20Naufragios.%20%C2%BFMe%20pueden%20suministrar%20m%C3%A1s%20informaci%C3%B3n'
    },
    {
        id: 11,
        id_name: "curses",
        username: 'root',
        title: 'Buceo Certificación',
        price: '1.100.000',
        description: '¿quieres aprender a bucear? capacitate y disfruta con Etrips el curso completo de buceo por las mejores islas del mar caribe.',
        linked: '#',
        image: '/images/principal_sliders/cholon-forever.jpg',
        link: 'https://api.whatsapp.com/send?phone=573006282760&text=%C2%A1Hola%20Etrips!%F0%9F%A5%BD%F0%9F%90%9F%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20me%20gustar%C3%ADa%20vivir%20la%20experiencia%20debajo%20el%20mar,%20estoy%20interesad@%20en%20realizar%20el%20curso%20de%20Buceo%20Certificaci%C3%B3n.%20%C2%BFMe%20pueden%20suministrar%20m%C3%A1s%20informaci%C3%B3n'
    }
];

//Botes data
export const dataBoats = [
    {id: 1, title: 'Magia', price: 215000, capacity: 8, description: '- Cojinería,- Caba de hielo,- Full Sonido ', date: '2022-12-10', image: '/images/boats/Magia.jpg', link: 'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Magia%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 2, title: 'Amén', price: 240000, capacity: 8, description: '- Baño,- Cojinería,- Caba de hielo,- Full Sonido', date: '2022-12-10', image: '/images/boats/Amen.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Am%C3%A9n%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 3, title: 'Isabela', price: 215000, capacity: 8, description: '- Cojinería,- Caba de hielo,- Full Sonido', date: '2022-12-25', image: '/images/boats/Isabella.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Isabela%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 4, title: 'El Toque Mi Negro', price: 280000, capacity: 8, description: '- Cojinería,- Caba de hielo,- Full Sonido', date: '2022-12-25', image: '/images/boats/Al-toque-mi-negro.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20El%20Toque%20Mi%20Negro%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 5, title: 'Valor', price: 285000, capacity: 8, description: '- Cojinería,- Sillas Asoleadoras,- Caba de hielo,- Full Sonido', date: '2022-12-25', image: '/images/boats/Valor.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Valor%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 6, title: 'Sin sensura', price: 295000, capacity: 8, description: '- Cojinería,- Sillas Asoleadoras,- Caba de hielo,- Full Sonido', date: '2022-12-25', image: '/images/boats/Sin-sensura.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Sin%20Sensura%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},

    {id: 7, title: 'Catalunya', price: 315000, capacity: 12, description: '- Cojinería,- Sillas Asoleadoras,- Caba de hielo,- Full Sonido', date: '2022-12-28', image: '/images/boats/Catalunya.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Catalunya%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 8, title: 'Fire Boy', price: 315000, capacity: 12, description: '- Baño,- Cojinería,- Caba de hielo,- Full Sonido', date: '2022-12-28', image: '/images/boats/Fire-boy.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Fire%20Boy%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 9, title: 'Salvaje', price: 515000, capacity: 12, description: '- Baño,- Sillas Asoleadoras,- Cojinería,- Caba de hielo,- Full Sonido', date: '2022-12-28', image: '/images/boats/Salvaje.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Salvaje%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 10, title: 'Lamborghini', price: 315000, capacity: 12, description: '- Baño,- Sillas Asoleadoras,- Cojinería,- Caba de hielo,- Full Sonido', date: '2022-12-28', image: '/images/boats/Lamborgini.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Lamborghini%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 11, title: 'Only Fans', price: 515000, capacity: 12, description: '- Baño,- Sillas Asoleadoras,- Cojinería,- Caba de hielo,- Full Sonido', date: '2022-12-28', image: '/images/boats/Only-fans.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Only%20Fans%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 12, title: 'Sthepanie 1', price: 315000, capacity: 12, description: '- Baño,- Sillas Asoleadoras,- Cojinería,- Caba de hielo,- Full Sonido', date: '2022-12-28', image: '/images/boats/Stephanie.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Sthepanie%202%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},

    {id: 13, title: 'Chaparrita', price: 515000, capacity: 20, description: '- Baño,- Sillas Asoleadoras,- Cojinería,- Caba de hielo,- Full Sonido', date: '2022-12-28', image: '/images/boats/Chaparrita.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Chaparrita%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 14, title: 'Bismark', price: 315000, capacity: 20, description: '- Baño,- Sillas Asoleadoras,- Cojinería,- Caba de hielo,- Full Sonido', date: '2022-12-28', image: '/images/boats/Brismarck.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Bismark%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 15, title: 'Don Bruno', price: 515000, capacity: 20, description: '- Baño,- Sillas Asoleadoras,- Cojinería,- Caba de hielo,- Full Sonido', date: '2022-12-28', image: '/images/boats/Don-bruno.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Don%20Bruno%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 16, title: 'Donatella', price: 515000, capacity: 20, description: '- Baño,- Sillas Asoleadoras,- Cojinería,- Caba de hielo,- Full Sonido', date: '2022-12-28', image: '/images/boats/Donatella.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Donatella%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 17, title: 'God Of War', price: 415000, capacity: 20, description: '- Baño,- Sillas Asoleadoras,- Cojinería,- Caba de hielo,- Full Sonido', date: '2022-12-28', image: '/images/boats/God-of-war.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20God%20Of%20War%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 18, title: 'La Leona', price: 415000, capacity: 20, description: '- Baño,- Sillas Asoleadoras,- Cojinería,- Caba de hielo,- Full Sonido', date: '2022-12-05', image: '/images/boats/La-leona.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20La%20Leona%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 19, title: 'Lina Mar', price: 221000, capacity: 20, description: '- Baño,- Sillas Asoleadoras,- Cojinería,- Caba de hielo,- Full Sonido', date: '2022-12-05', image: '/images/boats/no-photo.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Lina%20Mar%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 20, title: 'Molokini', price: 259000, capacity: 20, description: '- Cojinería,- Caba de hielo,- Baño,- Sillas Asoleadoras,- Full Sonido', date: '2022-12-05', image: '/images/boats/Molokini.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Molokini%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 21, title: 'Onix', price: 395000, capacity: 20, description: '- Cojinería,- Caba de hielo,- Baño,- Sillas Asoleadoras,- Full Sonido', date: '2022-12-05', image: '/images/boats/Onix.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Onix%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 22, title: 'Sea Girl', price: 485000, capacity: 20, description: '- Cojinería,- Caba de hielo,- Baño,- Sillas Asoleadoras,- Full Sonido', date: '2022-12-15', image: '/images/boats/Sea-girls.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Sea%20Girl%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 23, title: 'Sugar Mommy', price: 500000, capacity: 20, description: '- Cojinería,- Caba de hielo,- Baño,- Sillas Asoleadoras,- Full Sonido', date: '2022-12-15', image: '/images/boats/Sugar-mommy.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Sugar%20Mommy%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 24, title: 'Vibranium', price: 215000, capacity: 20, description: '- Cojinería,- Caba de hielo,- Baño,- Full Sonido', date: '2022-12-15', image: '/images/boats/Vibranium.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Vibranium%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 25, title: 'Gaviota', price: 485000, capacity: 20, description: '- Cojinería,- Caba de hielo,- Baño,- Sillas Asoleadoras,- Full Sonido', date: '2022-12-15', image: '/images/boats/Gaviota.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Gabiota%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 26, title: 'El Tema', price: 500000, capacity: 20, description: '- Cojinería,- Caba de hielo,- Baño,- Sillas Asoleadoras,- Full Sonido', date: '2022-12-15', image: '/images/boats/no-photo.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20El%20Tema%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},

    {id: 27, title: 'AyA', price: 215000, capacity: 6, description: '- Cojinería,- Sillas Asoleadoras,- Baño,- Caba de hielo,- Full Sonido', date: '2022-12-15', image: '/images/boats/A-y-a.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20AyA%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 28, title: 'Duchamp', price: 485000, capacity: 6, description: '- Cojinería,- Sillas Asoleadoras,- Baño,- Full Sonido', date: '2022-12-15', image: '/images/boats/Duchamp.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Duchamp%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 29, title: 'Etrips', price: 500000, capacity: 2, description: '', date: '2022-12-15', image: '/images/boats/no-photo.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Etrips%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 30, title: 'Gálea', price: 215000, capacity: 6, description: '- Cojinería,- Full Sonido', date: '2022-12-15', image: '/images/boats/Galea.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20G%C3%A1lea%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 31, title: 'Jamba', price: 215000, capacity: 6, description: '- Cojinería,- Caba de hielo,- Full Sonido', date: '2022-12-15', image: '/images/boats/Jamba.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Jamba%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 32, title: 'Matran', price: 485000, capacity: 6, description: '- Cojinería,- Sillas Asoleadoras,- Caba de hielo,- Full Sonido', date: '2022-12-15', image: '/images/boats/Matran.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Matran%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 33, title: 'Mi Bebesita', price: 500000, capacity: 2, description: '- Cojinería,- Caba de hielo,- Full Sonido', date: '2022-12-15', image: '/images/boats/Mi-bebesita.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Mi%20Bebesita%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 34, title: 'Nao Lusitana', price: 215000, capacity: 6, description: '- Cojinería,- Sillas Asoleadoras,- Baño,- Caba de hielo,- Full Sonido', date: '2022-12-15', image: '/images/boats/Nao-lusitana.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Nao%20Lusitana%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 35, title: 'Perfect Time', price: 215000, capacity: 6, description: '- Cojinería,- Caba de hielo,- Full Sonido', date: '2022-12-15', image: '/images/boats/perfect-time.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Perfect%20Time%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 36, title: 'Shama', price: 485000, capacity: 6, description: '- Cojinería,- Caba de hielo,- Full Sonido', date: '2022-12-15', image: '/images/boats/Shama.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Shama%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},

    {id: 37, title: 'Adamantium', price: 500000, capacity: 17, description: '- Baño,- Ducha de agua dulce,- Full Sonido,- Cojineria,- Caba de hielo', date: '2022-12-15', image: '/images/boats/Adamantium.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Adamantium%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 38, title: 'Cero es tres', price: 215000, capacity: 17, description: '- Cojinería,- Baño,- Caba de hielo,- Full Sonido', date: '2022-12-15', image: '/images/boats/0-es-3.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Cero%20es%20Tres%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 39, title: 'Eco Way 1', price: 215000, capacity: 17, description: '- Cojinería,- Baño,- Caba de hielo,- Full Sonido,- Sillas Asoleadoras', date: '2022-12-15', image: '/images/boats/Ecoway-1.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Eco%20Way%202%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 40, title: 'La Flaka', price: 485000, capacity: 17, description: '- Cojinería,- Baño,- Caba de hielo,- Full Sonido,- Sillas Asoleadoras', date: '2022-12-15', image: '/images/boats/La-flaka.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20La%20Flaka%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 41, title: 'El Peluche', price: 500000, capacity: 17, description: '- Cojinería,- Baño,- Caba de hielo,- Full Sonido,- Sillas Asoleadoras', date: '2022-12-15', image: '/images/boats/El-peluche.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20El%20Peluche%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 42, title: 'Quieta', price: 215000, capacity: 17, description: '- Cojinería,- Baño,- Caba de hielo,- Full Sonido', date: '2022-12-15', image: '/images/boats/Quieta.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Quieta%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 43, title: 'Sofía', price: 500000, capacity: 17, description: '- Cojinería,- Baño,- Caba de hielo,- Full Sonido,- Sillas Asoleadoras', date: '2022-12-15', image: '/images/boats/no-photo.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Sofia%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
    {id: 44, title: 'Yoya', price: 215000, capacity: 17, description: '- Cojinería,- Baño,- Caba de hielo,- Full Sonido,- Sillas Asoleadoras', date: '2022-12-15', image: '/images/boats/yoya.jpg', link:'https://api.whatsapp.com/send?phone=573244548138&text=%C2%A1Hola%20Etrips!%F0%9F%A7%A1%F0%9F%9A%A4%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Estoy%20interesad@%20en%20alquilar%20el%20bote%20Yoga%20para%20la%20fecha:%20_________%20hora:_______%20%20%20%20%20%20%20'},
];

//Testigos data
export const dataWitness = [
    {
        id: 1,
        username: 'Natalia Rojas',
        description: 'Mejor tour no pudo haber sido!, Una amiga me los había recomendado, tomé el tour' +
            ' de 4 islas con plankton de 8 am a 8 pm, por 180,000 COP. Demasiado bueno todo, por supuesto' +
            ' al inicio había que esperar un poco ya que estaban recogiendo a los otros pasajeros, igualmente ' +
            'gente muy atenta, te recogen del hotel o puedes llegar a la torre del reloj que desde ahí salen. ' +
            'Incluye snacks y almuerzos, transporte, equipo de snorkel, todo demasiado completo. Recomiendo ese tour una y mil veces.',
        photo: '/images/witnesses/testigo1.png',
        stars: 80
    },
    {
        id: 2,
        username: 'Madeleine',
        description: 'Es muy bueno, no entiendo porqué los malos comentarios, a veces las personas ni tienen la culpa de los percances hay que entender que Cartagena es muy turístico y hay mucha gente.\n' +
            'A mi me gustó mucho',
        photo: '/images/witnesses/testigo2.png',
        stars: 100
    },
    {
        id: 3,
        username: 'Ingeniero Sergio Sanchez',
        description: 'Son una empresa seria, cumplidos y sobre todo atentos.\n Recomendados.',
        photo: '/images/witnesses/testigo3.png',
        stars: 80
    },
    {
        id: 4,
        username: 'Alana Adventures',
        description: 'The Cholon Forever tour was a great time. Excellent care on the boat and customer service fixing a booking issue. Highly recommend.',
        photo: '/images/witnesses/testigo1.png',
        stars: 80
    },
    {
        id: 5,
        username: 'Manuel Pérez Marriaga',
        description: 'Gran equipo, confié en ellos y no me defraudaron. \n Disfruté de las mejores playas en Cartagena.',
        photo: '/images/witnesses/testigo2.png',
        stars: 80
    }
];

//Pasadías Quieres vender
export const dataPasadias = [
    {id: 1, title: 'Cholon Terrestre', precio1: 200000,  description: 'Visita la hermosa isla cholon y vive la experiencia en transporte terrestre.',
        image: [
            {img:'/images/vender/daytrips/slider1.png'},
            {img:'/images/vender/daytrips/corales.png'},
            {img:'/images/vender/daytrips/bendita.png'}],},
    {id: 2, title: 'Playa Tranquila Terrestre', precio1: 100000, description: 'Disfruta de un día dentro de las aguas cristalinas de playa tranquila. Incluye almuerzo y una degustación de frutas tropicales.', image: [
            {img: '/images/vender/daytrips/corales.png'},
            {img: '/images/vender/daytrips/bendita.png'},
            {img: '/images/vender/daytrips/bendita.png'}],},
    {id: 3, title: 'Playa Tranquila Lancha', precio1: 130000, description: 'Aprovecha tu dia disfrutando de aguas cristalinas. Incluye almuerzo y una degustación de frutas tropicales. Serás transportado en lancha', image: [
            {img: '/images/vender/daytrips/bendita.png'},
            {img: '/images/vender/daytrips/pasadia4.png'},
            {img: '/images/vender/daytrips/slider1.png'}],},
    {id: 5, title: 'Playa Tranquila + Plankton', precio1: 145000, description: 'Disfruta de un dia en Playa Tranquila y completa tu experiencia conociendo el plancton luminoso.', image: [
            {img: '/images/vender/daytrips/bendita.png'},
            {img: '/images/vender/daytrips/pasadia4.png'},
            {img: '/images/vender/daytrips/slider1.png'}],},
    {id: 6, title: 'Playa Tranquila + Islas Terrestre', precio1: 120000, description: 'Sumérgete en la experiencia de conocer las playas del caribe colombiano y disfruta de un recorrido lleno de cultura y diversidad biológica.', image: [
            {img: '/images/vender/daytrips/bendita.png'},
            {img: '/images/vender/daytrips/pasadia4.png'},
            {img: '/images/vender/daytrips/corales.png'}],},
    {id: 7, title: 'Playa Tranquila + Islas Lancha', precio1: 150000, description: 'Sumérgete en la experiencia de conocer las playas del caribe colombiano y disfruta de un recorrido lleno de cultura y diversidad biológica.', image: [
            {img: '/images/vender/daytrips/pasadia4.png'},
            {img: '/images/vender/daytrips/corales.png'},
            {img: '/images/vender/daytrips/bendita.png'}],},
    {id: 8, title: 'Playa Tranquila + Snorkel ', precio1: 140000, description: 'Disfruta de un día dentro de las aguas cristalinas de playa tranquila y completa tu experiencia con una clase de snorkel.', image: [
            {img: '/images/vender/daytrips/corales.png'},
            {img: '/images/vender/daytrips/bendita.png'},
            {img: '/images/vender/daytrips/corales.png'}],},
    {id: 9, title: 'Plancton desde Cartagena', precio1: 85000, description: 'Atrévete a conocer la magia del plancton luminoso.', image: [
            {img: '/images/vender/daytrips/bendita.png'},
            {img: '/images/vender/daytrips/corales.png'},
            {img: '/images/vender/daytrips/pasadia4.png'}],},
    {id: 10, title: 'Barú Playa Blanca ', precio1: 30000, description: '', image: [
            {img: '/images/vender/daytrips/pasadia4.png'},
            {img: '/images/vender/daytrips/corales.png'},
            {img: '/images/vender/daytrips/bendita.png'}],},
    {id: 11, title: 'Barú + Islas', precio1: 50000, description: '', image: [
            {img: '/images/vender/daytrips/corales.png'},
            {img: '/images/vender/daytrips/bendita.png'},
            {img: '/images/vender/daytrips/pasadia4.png'}],},
    {id: 12, title: 'Princesa del Mar Terreste', precio1: 150000, description: 'Disfruta del mejor ambiente familiar en Barú ', image: [
            {img: '/images/vender/daytrips/bendita.png'},
            {img: '/images/vender/daytrips/pasadia4.png'},
            {img: '/images/vender/daytrips/corales.png'}],},
    {id: 13, title: 'Princesa del Mar Lancha', precio1: 170000, description: 'Disfruta del mejor ambiente familiar en Barú', image: [
            {img: '/images/vender/daytrips/pasadia4.png'},
            {img: '/images/vender/daytrips/corales.png'},
            {img: '/images/vender/daytrips/bendita.png'}],},
    {id: 14, title: 'Nena Beach Terrestre', precio1: 185000, description: 'Disfruta de un lugar exclusivo dentro de Barú que cuenta con el mejor ambiente de playa. ', image: [
            {img: '/images/vender/daytrips/corales.png'},
            {img: '/images/vender/daytrips/pasadia4.png'},
            {img: '/images/vender/daytrips/bendita.png'}],},
    {id: 15, title: 'Nena Beach Lancha', precio1: 210000, description: 'Disfruta de un lugar exclusivo dentro de Barú que cuenta con el mejor ambiente de playa. ', image: [
            {img: '/images/vender/daytrips/bendita.png'},
            {img: '/images/vender/daytrips/corales.png'},
            {img: '/images/vender/daytrips/pasadia4.png'}],},
    {id: 16, title: 'Nena Beach Atardecer', precio1: 150000, description: 'Disfruta de un lugar exclusivo dentro de Barú que cuenta con el mejor ambiente de playa. ', image: [
            {img: '/images/vender/daytrips/pasadia4.png'},
            {img: '/images/vender/daytrips/bendita.png'},
            {img: '/images/vender/daytrips/corales.png', }],},
    {id: 17, title: 'Nena Beach + Plankton', precio1: 185000, description: 'Disfruta de un lugar exclusivo dentro de Barú que cuenta con el mejor ambiente de playa. Completa tu experiencia conociendo la magia del plancton luminoso.', image: [
            {img: '/images/vender/daytrips/corales.png'},
            {img: '/images/vender/daytrips/pasadia4.png'},
            {img: '/images/vender/daytrips/bendita.png'}],},
];

//Pasadias Data for filter
export const dataPsdias = [
    {id: 1, title: 'Cholon Terrestre', precio1:100000, description: 'Visita la hermosa isla cholon y vive la experiencia en transporte terrestre. Incluye almuerzo y una degustación de frutas tropicales. \n',
        image:'/images/vender/daytrips/slider1.png',
    link:'https://api.whatsapp.com/send?phone=573006282760&text=%C2%A1Hola%20Etrips!%F0%9F%8C%B4%E2%9B%B1%EF%B8%8F%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Me%20gustar%C3%ADa%20reservar%20con%20ustedes%20el%20pasad%C3%ADa%20Cholon%20Terrestre%20para%20el%20d%C3%ADa:%20_____%20'},
    {id: 2, title: 'Playa Tranquila Terrestre', precio1:100000, description: 'Disfruta de un día dentro de las aguas cristalinas de playa tranquila. Incluye almuerzo y una degustación de frutas tropicales.',
        image: '/images/vender/daytrips/corales.png',
    link:'https://api.whatsapp.com/send?phone=573006282760&text=%C2%A1Hola%20Etrips!%F0%9F%8C%B4%E2%9B%B1%EF%B8%8F%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Me%20gustar%C3%ADa%20reservar%20con%20ustedes%20el%20pasad%C3%ADa%20Playa%20Tranquila%20Terrestre%20para%20el%20d%C3%ADa:%20_____%20'},
    {id: 3, title: 'Playa Tranquila Lancha', precio1:100000, description: 'Aprovecha tu dia disfrutando de aguas cristalinas. Incluye almuerzo y una degustación de frutas tropicales. Serás transportado en lancha.',
        image: '/images/vender/daytrips/bendita.png',
    link:'https://api.whatsapp.com/send?phone=573006282760&text=%C2%A1Hola%20Etrips!%F0%9F%8C%B4%E2%9B%B1%EF%B8%8F%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Me%20gustar%C3%ADa%20reservar%20con%20ustedes%20el%20pasad%C3%ADa%20Playa%20Tranquila%20Lancha%20para%20el%20d%C3%ADa:%20_____%20'},
    {id: 5, title: 'Playa Tranquila + Plankton', precio1:100000, description: 'Disfruta de un día en Playa Tranquila y completa tu experiencia conociendo el plancton luminoso.',
        image: '/images/vender/daytrips/bendita.png',
    link:'https://api.whatsapp.com/send?phone=573006282760&text=%C2%A1Hola%20Etrips!%F0%9F%8C%B4%E2%9B%B1%EF%B8%8F%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Me%20gustar%C3%ADa%20reservar%20con%20ustedes%20el%20pasad%C3%ADa%20Playa%20Tranquila%20+%20Plankton%20para%20el%20d%C3%ADa:%20_____%20'},
    {id: 6, title: 'Playa Tranquila + Islas Terrestre', precio1:100000, description: 'Sumérgete en la experiencia de conocer las playas del caribe colombiano y disfruta de un recorrido lleno de cultura y diversidad biológica.',
        image: '/images/vender/daytrips/bendita.png',
    link:'https://api.whatsapp.com/send?phone=573006282760&text=%C2%A1Hola%20Etrips!%F0%9F%8C%B4%E2%9B%B1%EF%B8%8F%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Me%20gustar%C3%ADa%20reservar%20con%20ustedes%20el%20pasad%C3%ADa%20Playa%20Tranquila%20+%20Islas%20Terrestre%20para%20el%20d%C3%ADa:%20_____%20'},
    {id: 7, title: 'Playa Tranquila + Islas Lancha', precio1:100000, description: 'Sumérgete en la experiencia de conocer las playas del caribe colombiano y disfruta de un recorrido lleno de cultura y diversidad biológica. ',
        image: '/images/vender/daytrips/pasadia4.png',
    link:'https://api.whatsapp.com/send?phone=573006282760&text=%C2%A1Hola%20Etrips!%F0%9F%8C%B4%E2%9B%B1%EF%B8%8F%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Me%20gustar%C3%ADa%20reservar%20con%20ustedes%20el%20pasad%C3%ADa%20Playa%20Tranquila%20+%20Islas%20Lancha%20para%20el%20d%C3%ADa:%20_____%20'},
    {id: 8, title: 'Playa Tranquila + Snorkel ', precio1:100000, description: 'Disfruta de un día dentro de las aguas cristalinas de playa tranquila y completa tu experiencia con una clase de snorkel.',
        image: '/images/vender/daytrips/corales.png',
    link:'https://api.whatsapp.com/send?phone=573006282760&text=%C2%A1Hola%20Etrips!%F0%9F%8C%B4%E2%9B%B1%EF%B8%8F%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Me%20gustar%C3%ADa%20reservar%20con%20ustedes%20el%20pasad%C3%ADa%20Playa%20Tranquila%20+%20Snorkel%20para%20el%20d%C3%ADa:%20_____%20'},
    {id: 9, title: 'Plancton desde Cartagena', precio1:100000, description: 'Atrévete a conocer la magia del plancton luminoso.',
        image: '/images/vender/daytrips/bendita.png',
    link:'https://api.whatsapp.com/send?phone=573006282760&text=%C2%A1Hola%20Etrips!%F0%9F%8C%B4%E2%9B%B1%EF%B8%8F%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Me%20gustar%C3%ADa%20reservar%20con%20ustedes%20el%20pasad%C3%ADa%20Plancton%20desde%20Cartagena%20para%20el%20d%C3%ADa:%20_____%20'},
    {id: 10, title: 'Barú Playa Blanca ', precio1:100000, description: 'Incluye almuerzo y una degustación de frutas tropicales. Serás transportado en lancha.',
        image: '/images/vender/daytrips/pasadia4.png',
    link:'https://api.whatsapp.com/send?phone=573006282760&text=%C2%A1Hola%20Etrips!%F0%9F%8C%B4%E2%9B%B1%EF%B8%8F%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Me%20gustar%C3%ADa%20reservar%20con%20ustedes%20el%20pasad%C3%ADa%20Bar%C3%BA%20Playa%20Blanca%20para%20el%20d%C3%ADa:%20_____%20'},
    {id: 11, title: 'Barú + Islas', precio1:100000, description: 'Incluye almuerzo y una degustación de frutas tropicales. Serás transportado en lancha.',
        image: '/images/vender/daytrips/corales.png',
    link:'https://api.whatsapp.com/send?phone=573006282760&text=%C2%A1Hola%20Etrips!%F0%9F%8C%B4%E2%9B%B1%EF%B8%8F%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Me%20gustar%C3%ADa%20reservar%20con%20ustedes%20el%20pasad%C3%ADa%20Bar%C3%BA%20+%20Islas%20para%20el%20d%C3%ADa:%20_____%20'},
    {id: 12, title: 'Princesa del Mar Terreste', precio1:100000, description: 'Disfruta del mejor ambiente familiar en Barú. Incluye almuerzo y una degustación de frutas tropicales.',
        image: '/images/vender/daytrips/bendita.png',
    link:'https://api.whatsapp.com/send?phone=573006282760&text=%C2%A1Hola%20Etrips!%F0%9F%8C%B4%E2%9B%B1%EF%B8%8F%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Me%20gustar%C3%ADa%20reservar%20con%20ustedes%20el%20pasad%C3%ADa%20Pasad%C3%ADa%20Princesa%20del%20Mar%20Terreste%20para%20el%20d%C3%ADa:%20_____%20'},
    {id: 13, title: 'Princesa del Mar Lancha', precio1:100000, description: 'Disfruta del mejor ambiente familiar en Barú. Incluye almuerzo y una degustación de frutas tropicales.',
        image: '/images/vender/daytrips/pasadia4.png',
    link:'https://api.whatsapp.com/send?phone=573006282760&text=%C2%A1Hola%20Etrips!%F0%9F%8C%B4%E2%9B%B1%EF%B8%8F%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Me%20gustar%C3%ADa%20reservar%20con%20ustedes%20el%20pasad%C3%ADa%20Pasad%C3%ADa%20Princesa%20del%20Mar%20Lancha%20para%20el%20d%C3%ADa:%20_____%20'},
    {id: 14, title: 'Nena Beach Terrestre', precio1:100000, description: 'Disfruta de un lugar exclusivo dento de Barú que cuenta con el mejor ambiente de playa. Incluye almuerzo y una degustación de frutas tropicales.',
        image: '/images/vender/daytrips/corales.png',
    link:'https://api.whatsapp.com/send?phone=573006282760&text=%C2%A1Hola%20Etrips!%F0%9F%8C%B4%E2%9B%B1%EF%B8%8F%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Me%20gustar%C3%ADa%20reservar%20con%20ustedes%20el%20pasad%C3%ADa%20Nena%20Beach%20Terrestre%20para%20el%20d%C3%ADa:%20_____%20'},
    {id: 15, title: 'Nena Beach Lancha', precio1:100000, description: 'Disfruta de un lugar exclusivo dento de Barú que cuenta con el mejor ambiente de playa. Incluye almuerzo y una degustación de frutas tropicales.',
        image: '/images/vender/daytrips/bendita.png',
    link:'https://api.whatsapp.com/send?phone=573006282760&text=%C2%A1Hola%20Etrips!%F0%9F%8C%B4%E2%9B%B1%EF%B8%8F%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Me%20gustar%C3%ADa%20reservar%20con%20ustedes%20el%20pasad%C3%ADa%20Nena%20Beach%20Lancha%20para%20el%20d%C3%ADa:%20_____%20'},
    {id: 16, title: 'Nena Beach Atardecer', precio1:100000, description: 'Disfruta de un lugar exclusivo dento de Barú que cuenta con el mejor ambiente de playa. Incluye almuerzo y una degustación de frutas tropicales.',
        image: '/images/vender/daytrips/pasadia4.png',
    link:'https://api.whatsapp.com/send?phone=573006282760&text=%C2%A1Hola%20Etrips!%F0%9F%8C%B4%E2%9B%B1%EF%B8%8F%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Me%20gustar%C3%ADa%20reservar%20con%20ustedes%20el%20pasad%C3%ADa%20Nena%20Beach%20Atardecer%20para%20el%20d%C3%ADa:%20_____%20'},
    {id: 17, title: 'Nena Beach + Plankton', precio1:100000, description: 'Disfruta de un lugar exclusivo dento de Barú que cuenta con el mejor ambiente de playa. Incluye almuerzo y una degustación de frutas tropicales.',
        image: '/images/vender/daytrips/corales.png',
    link:'https://api.whatsapp.com/send?phone=573006282760&text=%C2%A1Hola%20Etrips!%F0%9F%8C%B4%E2%9B%B1%EF%B8%8F%20Vengo%20de%20su%20sitio%20web%20etrips.com%20y%20Me%20gustar%C3%ADa%20reservar%20con%20ustedes%20el%20pasad%C3%ADa%20Nena%20Beach%20+%20Plankton%20para%20el%20d%C3%ADa:%20_____%20'},
];

export const dataPlansVender = [
    {
        id: 1,
        id_name: "pfiesta",
        username: 'root',
        title: 'Bahía Atardecer',
        price: '40.000',
        description: 'Recorre la bahía de Cartagena mientras cae el atardecer y disfrutas de la mejor música crossover, licores y bebidas nacionales.',
        linked: '#',
        image: '/images/principal_sliders/cholon-forever.jpg'
    },
    {
        id: 2,
        id_name: "pfiesta",
        username: 'root',
        title: 'Bahía Nocturno',
        price: '40.000',
        description: 'Recorre la bahía de Cartagena mientras ves las luces de la ciudad y disfrutas de la mejor música crossover, licores y bebidas nacionales.',
        linked: '#',
        image: '/images/principal_sliders/princesa.png'
    },
    {
        id: 3,
        id_name: "pfiesta",
        username: 'root',
        title: 'Cholon Forever',
        price: '200.000',
        description: 'Disfruta de una gran fiesta en yate dentro de la isla más rumbera del caribe. Incluye almuerzo y dos cervezas nacionales.',
        linked: '#',
        image: '/images/principal_sliders/cholon-forever.jpg'
    },
    {
        id: 4,
        id_name: "pgroup",
        username: 'root',
        title: 'Tour Agua Azul Terrestre',
        price: '200.000',
        description: 'Disfruta un plan en compañía de tus amigos en playa blanca baru.',
        linked: '#',
        image: '/images/principal_sliders/cholon-forever.jpg'
    },
    {
        id: 5,
        id_name: "pgroup",
        username: 'root',
        title: 'Tour 5 Islas + Plankton',
        price: '250.000',
        description: 'Disfruta de las islas más rumberas del caribe, encontrarás un gran paisaje y  arrecifes coralinos.',
        linked: '#',
        image: '/images/principal_sliders/princesa.png'
    },
    {
        id: 6,
        id_name: "pgroup",
        username: 'root',
        title: 'Tour 5 Islas',
        price: '220.000',
        description: 'Conoce Bocachica, Islas del Rosario, Agua Azul Barú, Playa Tranquila Barú e Isla Cholon en un solo día.',
        linked: '#',
        image: '/images/principal_sliders/cholon-forever.jpg'
    },
    {
        id: 7,
        id_name: "pgroup",
        username: 'root',
        title: 'Tour 4 Islas + Planctons',
        price: '180.000',
        description: 'Visita las Islas del Rosario, Isla Cholon, Agua Azul, Playa Tranquila y finaliza en la Laguna Encanta donde conocerás la magia del plancton luminoso.',
        linked: '#',
        image: '/images/principal_sliders/cholon-forever.jpg'
    },
    {
        id: 8,
        id_name: "pgroup",
        username: 'root',
        title: 'Tour 4 Islas ',
        price: '160.000',
        description: 'En un dia conocerás las Islas del Rosario y podrás bañarte en las aguas de Isla Cholon, Agua Azul y Playa Tranquila. Incluye almuerzo. ',
        linked: '#',
        image: '/images/principal_sliders/cholon-forever.jpg'
    },
    {
        id: 9,
        id_name: "curses",
        username: 'root',
        title: 'Buceo Mini Curso',
        price: '230.000',
        description: 'Sumérgete y vive la experiencia bajo del mar realizando el curso de buceo que Etrips tiene para ti.',
        linked: '#',
        image: '/images/principal_sliders/cholon-forever.jpg'
    },
    {
        id: 10,
        id_name: "curses",
        username: 'root',
        title: 'Buceo en Naufragios',
        price: '270.000',
        description: '¿Te gustaría realizar un curso de buceo especializado? Inscribete con Etrips para vivir la experiencia en las islas de Cartagena.',
        linked: '#',
        image: '/images/principal_sliders/princesa.png'
    },
    {
        id: 11,
        id_name: "curses",
        username: 'root',
        title: 'Buceo Certificación',
        price: '1.100.000',
        description: '¿quieres aprender a bucear? capacitate y disfruta con Etrips el curso completo de buceo por las mejores islas del mar caribe.',
        linked: '#',
        image: '/images/principal_sliders/cholon-forever.jpg'
    }
];

//Set Format to Number Price's
export const formatNumber = (number: number) => {
    return new Intl.NumberFormat().format(number);
}
