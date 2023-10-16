import { useEffect, useState } from "react";
import Books from "./Books";
import axios from "axios";
function Read(){

 {*useEffect is a React Hook that lets you synchronize a component with an external system.*/}
    const [data, setData] = useState([]);
 {*Add axios to bookapp, axios is a Promise based HTTP client. Using:
npm install axios */}
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
