import {PostData} from "./types";
import http from "./http-common";
import axios from "axios";
import config from "../../infrastructure/config";
import {Cookies} from "react-cookie";
import {useState} from "react";

//Post Function (create)
const create = (data: PostData) => {

    return http.post<PostData>("/", data).then(res => {

        if(res.status === 201){
            console.log(res.status);
        }else{
            alert("¡NO SE HA PODIDO ENVIAR LOS DATOS, POR FAVOR INTENTELO NUVAMENTE O MÁS TARDE!");
            window.location.reload();
        }
    }).catch(err => {

        alert("¡NO SE HA PODIDO ENVIAR LOS DATOS, POR FAVOR INTENTELO NUVAMENTE O MÁS TARDE!");
        window.location.reload();

    })

}
const Services = {
    create,
};
export default Services;

/*GET DATA API WITH AXIOS*/
export function useData() {
    const [dataJson, setDataJson] = useState<Array<any>>([]);
    const configuration = {
        method: 'get',
        url: config.URL+"?form=contact",
        headers: {
            'Authorization': 'Bearer ' + config.ACCESS_TOKEN,
            //Cookie: 'tenant=ETR'
            xsrfCookie: 'tenant=ETRIPS',
        },
        withCredentials: true
    }
    const getAll = async () => {
        /*const cookies = new Cookies();
        if (cookies.get('tenant') === undefined || cookies.get('db') === undefined) {
            cookies.set('tenant', 'ETR', {domain: 'https://forms.s.dev.kru360.com', path: '/'});
            cookies.set('tenant', 'ETR', {path: '/'});
        }*/

        axios.request(configuration).then((response) => {
            //console.log(response.data);
            setDataJson(response.data);
            return response.data;

        }).catch((error) => {
            console.log(error);
        })
    }
    return [dataJson, getAll] as const;
}
