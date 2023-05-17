import styles from "./styles.module.css";
import {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import { useMediaQuery } from 'react-responsive';
import {dataBoats} from "../../../../services/service";

export default function Pagination({selectedPrice, selectedCapacity, date1, date2, persons, applyFilter}:any) {
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 1224px)'});
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});

    //const [boats, setBoats] = useState(data);
    const [pageNumber, setPageNumber] = useState(0);

    const minDate = date1;
    const maxDate = date2;
    //console.log(minDate, maxDate);

    const boatsPerPage = 12; //Cards for page
    const PagesVisited = pageNumber * boatsPerPage; //Calculed

    const [list, setList] = useState(dataBoats);
    const [resultsFound, setResultsFound] = useState(true);

    //console.log("la lista: "+ list)
    let updateList = dataBoats;

    //Function for Filter type 2
    applyFilter = () => {

        // --- Price filter --- //
        const minPrice = selectedPrice[0];
        const maxPrice = selectedPrice[1];

        //console.log(minPrice, maxPrice);

        updateList = updateList.filter(
            (item: { price: number; }) => item.price >= minPrice && item.price <= maxPrice
        );

        // --- Capacity (person) Filter --- //
        const minCapacity = selectedCapacity[0];
        const maxCapacity = selectedCapacity[1];

        //console.log(minCapacity, maxCapacity);

        updateList = updateList.filter(
            (item: { capacity: number; }) => item.capacity >= minCapacity && item.capacity <= maxCapacity
        )

        setList(updateList);
        !updateList.length ? setResultsFound(false) : setResultsFound(true);
        //console.log("la lista update: "+ list)
    };

    //Function for Filter type 1 (principal)
    const generalFilter = () => {
        // --- Date filter --- //
        if(minDate==false || minDate==null && maxDate==false || maxDate==null){
            updateList = dataBoats;
        }else if(minDate){
            updateList = updateList.filter(
                (item: { date: string }) => Date.parse(item.date) > Date.parse(minDate)
            );
        }else if(maxDate!=false && minDate==false){
            updateList = dataBoats;
            alert("¡Debe ingresar una fecha inicial!");
        }else{
            updateList = updateList.filter(
                (item: { date: string }) => Date.parse(item.date) >= Date.parse(minDate) && Date.parse(item.date) <= Date.parse(maxDate)
            );
        }
        //console.log(updateList, minDate, maxDate);

        //General Person x boats filter
        const GenealCapacity = persons;
        updateList = updateList.filter(
            (item: { capacity: number; }) => item.capacity === GenealCapacity
        );

        setList(updateList);
        !updateList.length ? setResultsFound(false) : setResultsFound(true);

    }

    useEffect(() => {
        applyFilter();
        //data = updateListTwo;
    }, [selectedPrice, selectedCapacity]);

    const displayBoats = list //const for add boats data, and data count
        .slice(PagesVisited, PagesVisited + boatsPerPage)
        .map((boats: any, index:any) => {
            return (

                <div key={index} className="col-6 col-md-4">
                    <div className={"card " + styles.cards}>
                        <img className={"card-img-top " + styles.image_card} src={boats.image} alt="Botes-Etrips"/>
                        <div className={"card-body " + styles.cardBody}>
                            <h4 className={"card-title " + styles.titles}>{boats.title}</h4>
                            <p className={"card-text " + styles.descriptions}>Máximo {boats.capacity} por
                                persona</p>
                            <p className={"card-text " + styles.descriptions2}><strong>incluye:</strong></p>

                            <div className={styles.contentDetails}>
                                {boats.description.split(',').map((item:any, index:any)=>(
                                    <div key={index}>
                                        <p className={styles.caracteristica} >{item}</p>
                                    </div>

                                ))}
                            </div>

                            <a href={boats.link} type="button" className={styles.btn_reserv} target="__blank">Reservar</a>
                        </div>
                    </div>
                </div>

            )
        })

    /* Responsive grid */
    const boatsPerPageMob = 1; //Cards for page
    const PagesVisitedMob = pageNumber * boatsPerPageMob; //Calculed

    const displayBoatsMob = list //const for add boats data, and data count
        .slice(PagesVisitedMob, PagesVisitedMob + boatsPerPageMob)
        .map((boats: any, index:any) => {
            return (

                <div key={index} className="col-6 col-md-4">
                    <div className={"card " + styles.cardsMob}>
                        <img className={"card-img-top " + styles.image_card} src={boats.image} alt="Botes-Etrips"/>
                        <div className={"card-body " + styles.cardBody}>
                            <h4 className={"card-title " + styles.titles}>{boats.title}</h4>
                            <p className={"card-text " + styles.descriptions}>Máximo {boats.capacity} por
                                persona</p>
                            <p className={"card-text " + styles.descriptions2}><strong>incluye:</strong></p>

                            <div className={styles.contentDetails}>
                                {boats.description.split(',').map((item:any, index:any)=>(
                                    <div key={index}>
                                        <p className={styles.caracteristica} >{item}</p>
                                    </div>

                                ))}
                            </div>

                            <a href={boats.link} type="button" className={styles.btn_reserv} target="__blank">Reservar</a>
                        </div>
                    </div>
                </div>

            )
        })

    const pageCount = Math.ceil(list.length / boatsPerPage); //divide boats / boast per page
    const pageCountMob = Math.ceil(list.length / boatsPerPageMob); //divide boats / boast per page Mobile
    const changePage = ({selected}: { selected: any }) => { /*selected or change page*/
        setPageNumber(selected);
    };

    return (
        <>
            <button onClick={generalFilter} className={"btn " + styles.btn_buscar}>Buscar</button>

            <div>

                <div className="container">

                    {isDesktopOrLaptop &&
                        <div className={"row " + styles.columns}>
                            {resultsFound ?
                            displayBoats : <h1>No se encontraron resultados</h1>}
                        </div>
                    }
                    {isTabletOrMobile &&
                        <div className={"row " + styles.columns_two}>
                            {resultsFound ?
                            displayBoatsMob : <h1>No se encontraron resultados</h1>} {/*Display list of boats (6 per page)*/}
                        </div>
                    }
                </div>
                <br/>

                <div className={styles.paginationControl}>
                    {/*Nav pagination and options*/}
                    {isDesktopOrLaptop &&
                        <ReactPaginate

                            pageCount={pageCount}
                            onPageChange={changePage}
                            containerClassName={styles.paginationsBtns}
                            previousClassName={styles.prevBtns}
                            nextClassName={styles.nextBtns}
                            disabledClassName={styles.paginationsDisable}
                            activeClassName={styles.paginationsActive}

                        />
                    }
                    {isTabletOrMobile &&
                        <ReactPaginate

                            pageCount={pageCountMob}
                            onPageChange={changePage}
                            containerClassName={styles.paginationsBtns}
                            previousClassName={styles.prevBtns}
                            nextClassName={styles.nextBtns}
                            disabledClassName={styles.paginationsDisable}
                            activeClassName={styles.paginationsActive}

                        />
                    }
                </div>
            </div>
        </>
    )
}
