import Filtro from "../../../filters/filter_type_two/filter_two";
import Pagination from "../pagination/pagination";
import styles from "./styles.module.css";
import { useMediaQuery } from 'react-responsive';


export default function GridBoats() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
    return (
        <>


                {isDesktopOrLaptop &&
                <img className={styles.logue} src="/images/icons/logo-etrips-color2.png" alt="E-trips"/>
                }

        </>
    )
}