import styles from "./styles.module.css";
import { useMediaQuery } from 'react-responsive';
import SliTours from "./tour_slide/tourSlide";

export default function Tours() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
    return (
        <>


                <div className={styles.content}>
                    <h1>Nuestros planes de tour</h1>
                </div>
                <div className={"container "}>
                    <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                    {isDesktopOrLaptop &&
                        <SliTours/>
                    }
                    </div>
                    </div>
                </div>

                {isTabletOrMobile &&
                <div>
                    <SliTours/>
                </div>
                }

        </>
    )

}
