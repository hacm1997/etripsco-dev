import styles from "./styles.module.css";
import React, {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import Table from 'react-bootstrap/Table';

export default function BodyTable({json, count}:any) {

    const [page, setPage] = useState(0);
    //const itemsPerPage = 5;
    const PagesVisited = page * count; //Calculed

    const displayData = json //const for add boats data, and data count
        .slice(PagesVisited, PagesVisited + count)
        .map((data: any, i:any) => {
            return (
                <>
                    <tr key={i}>
                        <td>{data.form_data.agencia}</td>
                        <td>{data.form_data.rnt}</td>
                        <td>{data.form_data.cellphone}</td>
                        <td>{data.form_data.email}</td>
                    </tr>
                </>
            )
        })
    const pageCount = Math.ceil(json.length / count); //divide boats / boast per page

    const changePage = ({selected}: { selected: any }) => { /*selected or change page*/
        setPage(selected);
    };

    return (
        <>
            <div className={styles.info_table}>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Agencia</th>
                            <th>RNT</th>
                            <th>Teléfono</th>
                            <th>E-mail</th>
                        </tr>
                    </thead>
                    <tbody >

                    {displayData}

                    </tbody>
                </Table>

            </div>

            <div className={styles.paginationControl}>
                {/*Nav pagination and options*/}

                <ReactPaginate

                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={styles.paginationsBtns}
                    previousClassName={styles.prevBtns}
                    nextClassName={styles.nextBtns}
                    disabledClassName={styles.paginationsDisable}
                    activeClassName={styles.paginationsActive}

                />

            </div>

        </>
    )
}
