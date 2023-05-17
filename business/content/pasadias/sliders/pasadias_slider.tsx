import styles from "./styles.module.css";
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from "react";

export default function PasadiasSli( {data, search}:any ) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });

    const [list, setList] = useState(data);
    const [resultsFound, setResultsFound] = useState(true);


    const applyFilter = () =>{
        let updateList = data;

        setList(updateList);
        !updateList.length ? setResultsFound(false) : setResultsFound(true);
        //console.log("update list: "+list)
    };

    useEffect(() => {
        applyFilter();

        //data = updateListTwo;
      }, [search]);

    const content=list.map((sliders:any, index:any) => (
                <div className={"row "+ styles.row_content} /*onChange={}*/ key={index}>
                    <div className="col-4 "></div>
                    <div className={"col-2 "+ styles.image}>
                        <img src={sliders.image} />
                    </div>
                    <div className={styles.content_sli}>
                        <div>
                            <h1>{sliders.title}</h1>
                            {/*<p className={styles.prices}>{formatNumber(sliders.precio1)} COP/Persona<br/></p>*/}
                            <p className={styles.description}>{sliders.description}</p>
                            <a href={sliders.link} target="__blank" type="button" className={"btn btn-sm "+styles.btn_contrata}>Reservar</a>
                        </div>
                    </div>
                </div>
        ))
        const contentMob=list.map((sliders:any, index:any) => (
                <div className={styles.row_content_mob} key={index}>

                    <div >
                        <img src={sliders.image} />
                    </div>
                    <div className={styles.content_sli_mob}>
                        <div>
                            <h2>{sliders.title}</h2>
                            {/*<p className={styles.prices}>{formatNumber(sliders.precio1)} CO/Adulto<br/></p>*/}
                            <p>{sliders.description}</p>
                            <a href={sliders.link} type="button" className={"btn btn-sm "+styles.btn_contrata}>Reservar</a>
                        </div>
                    </div>
                </div>
        ))

    return (

        <>
        <div className={"overflow-auto "+styles.scroll_sli}>
            {resultsFound ?
                <>
                {isDesktopOrLaptop &&
                    content
                }
                {isTabletOrMobile &&
                    contentMob
                }
                </>

                : <p>No se encontraron resultados</p>}
        </div>

        </>
    )
}
