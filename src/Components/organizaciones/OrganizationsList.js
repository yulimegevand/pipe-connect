import OrganizationsItem from './OrganizationsItem';
import axios from 'axios';
import { useState, useEffect} from "react";


export default function OrganizationsList (props) {
    const [organizations, setOrganizations] = useState([]); //array vacio
    const [data, setData] = useState(null);
    const [url, setUrl] = useState("https://vates3.pipedrive.com/api/v1/organizations?api_token=4fbaa143fa595f5118f153a277b8d47f62277699");
    const [message, setMessage] = useState(null);
    useEffect( () => {

        (async () => {

            const Response = await axios.get(`${url}`)
                .catch(e => {
                  setOrganizations([]);
                });


            if (Response && Response.status === 200) {
                const {data} = Response.data;
                setData(data);
                setOrganizations([
                  ...data
                ])
                setMessage("Conexion Exitosa");
                console.log("conexion: ",message);
                console.log("datos que trae la url: ", organizations)


            } else {
                setData(null);
                setOrganizations([]);
                setMessage("Fallo la conexion")
                console.log("conexion: ", message)
            }
        })();


    }, [url]);


      return <div>
       <table border={1}>
         <thead>
           <tr>
             <th>Id:</th>
             <th>Nombre:</th>
           </tr>
         </thead>
         {organizations.map(p => < OrganizationsItem key={p.id} organizations={p}/>)}
       </table>

    </div>



}