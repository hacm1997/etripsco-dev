import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import type { AppProps } from 'next/app'
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module'
import {useEffect} from "react";

const TRACKING_ID = "UA-248351463-1"; // OUR_TRACKING_ID UA-246198663-2 || G-NKCV5TNMV8
ReactGA.initialize(TRACKING_ID);

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    const tagManagerArgs = {
      gtmId: 'GTM-PGW8SBR'
    }

    TagManager.initialize(tagManagerArgs)
  },[])
  return <Component {...pageProps} />
}

export default MyApp
