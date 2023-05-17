import { useState } from "react";

const plan1 = [
    {
        id: 1,
        username: 'root',
        title: 'Tour Bahía Atardecer',
        price: '40.000',
        description: 'Recorre la bahía de Cartagena mientras cae el atardecer y disfrutas de la mejor música crossover, licores y bebidas nacionales.',
        linked: '#',
        image: '/images/principal_sliders/cholon-forever.jpg'
    },
    {
        id: 1,
        username: 'root',
        title: 'Tour Bahía Nocturno',
        price: '40.000',
        description: 'Recorre la bahía de Cartagena mientras ves las luces de la ciudad y disfrutas de la mejor música crossover, licores y bebidas nacionales.',
        linked: '#',
        image: '/images/principal_sliders/princesa.png'
    },
    {
        id: 2,
        username: 'root',
        title: 'Tour Cholón Forever',
        price: '200.000',
        description: 'Disfruta de una gran fiesta en yate dentro de la isla más rumbera del caribe. Incluye almuerzo y dos cervezas nacionales.',
        linked: '#',
        image: '/images/principal_sliders/cholon-forever.jpg'
    }
]
const plan2 = [
    {
        id: 1,
        username: 'root',
        title: 'Tour Agua Azul Terrestre',
        price: '200.000',
        description: 'Disfruta un plan en compañía de tus amigos en playa blanca baru.',
        linked: '#',
        image: '/images/principal_sliders/cholon-forever.jpg'
    },
    {
        id: 2,
        username: 'root',
        title: 'Tour 5 Islas + Plankton',
        price: '250.000',
        description: 'Disfruta de las islas más rumberas del caribe, encontrarás un gran paisaje y  arrecifes coralinos.',
        linked: '#',
        image: '/images/principal_sliders/princesa.png'
    },
    {
        id: 3,
        username: 'root',
        title: 'Tour 5 Islas',
        price: '220.000',
        description: 'Conoce Bocachica, Islas del Rosario, Agua Azul Barú, Playa Tranquila Barú e Isla Cholon en un solo día.',
        linked: '#',
        image: '/images/principal_sliders/cholon-forever.jpg'
    }
]
export function usePfiesta() {
    const [planFiestero, setPlanFiestero] = useState<Array<any>>([]);
    const [planTwo, setPlanTwo] = useState<Array<any>>([]);

    const getPlanFiestero = async () => {
        try {
            setPlanFiestero(plan1);
            setPlanTwo(plan2);
        }catch (err) {
            console.log(err +" ERROR TO GET DATA!");
        }
    }
    getPlanFiestero();
    return [planFiestero,planTwo, getPlanFiestero] as const;
}

export function useDptosCitiesCol() {
    const [dataLatam, setDataLatam] = useState<Array<any>>([]);//latam countries

    const getDataCol = async () => {
        try {

            setDataLatam(plan1);//save Latam countries
        }catch (err) {
            console.log(err +" ERROR TO GET DATA!");
        }
    }
    getDataCol();
    return [dataLatam, getDataCol] as const;
}