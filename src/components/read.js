import { useEffect, useState } from "react";
import Books from "./Books";
import axios from "axios";
function Read(){

 
    const [data, setData] = useState([]);

    useEffect(()=>{
 axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920')
        .then(
            (response) =>{
            setData(response.data.books);
            }
        )
            
        .catch(
        (error) =>{
          console.log(error);
            }
        );
    }, []);

    return(
        //visual peice
<div>

    {/*>Displays My Heder in another component! in Header section*/}
 <h2>hello from read component</h2>
<Books myBooks  = {data}> </Books>
</div>


    );


}

export default Read;