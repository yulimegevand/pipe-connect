import PersonasItem from './PersonsItem'; 
import axios from 'axios';
import { useState, useEffect} from "react";


export default function PersonasList (props) {
    const [persons, setPersons] = useState([]); //array vacio
    const [data, setData] = useState(null);
    const [url, setUrl] = useState("https://vates3.pipedrive.com/api/v1/persons?api_token=4fbaa143fa595f5118f153a277b8d47f62277699");
    const [message, setMessage] = useState(null);
    useEffect( () => {

        (async () => {

            const Response = await axios.get(`${url}`)
                .catch(e => {
                  setPersons([]);
                });


            if (Response && Response.status === 200) {
                const {data} = Response.data;
                setData(data);
                setPersons([
                  ...data
                ])
                setMessage("Conexion Exitosa");
                console.log("conexion: ",message);
                console.log("datos que trae la url: ", persons)


            } else {
                setData(null);
                setPersons([]);
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
         {persons.map(p => < PersonasItem key={p.id} persons={p}/>)}
       </table>

    </div>



}