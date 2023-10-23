import { useState } from "react";

function Create(){
    {/*useEffect is a React Hook that lets you synchronize a component with an external system.*/}
    const [title,setTitle] = useState('');
    const[cover, setCover] =useState('');
    const[author,setAuthor] =useState ('');
 {/*The useState() is a Hook that allows you to have state variables in functional components .*/}
    const handleSubmit = (e)=>{
        e.preventDefault();

        console.log("Title" + title+
        "Cover: "+cover+
        "Author: "+author);
    };

    return(
        //visual peice
<div>
    {/*>Displays My Heder in another component! in Header section*/}
 <h2>This is my Create Component</h2>
 <form onSubmit ={handleSubmit}>
    {/* form added for book title, book cover and book title*/}
<div className="form-group">
<label>Add Book Title: </label>
<input type="text"
className="form-control"
value={title}
onChange={(e) => { setTitle(e.target.value) }}
/>
</div>
 {/*form data is usually handled by the components*/}
<div className="form-group">
<label>Add Book Cover: </label>
<input type="text"
className="form-control"
value={cover}
onChange={(e) => { setCover(e.target.value) }}
/>
</div>
<div className="form-group">
<label>Add Book Title: </label>
<input type="text"
className="form-control"
value={author}
onChange={(e) => { setAuthor(e.target.value) }}
/>
</div>
<div>
    <input
         {/*submit button to enter in code*/}
    type= "submit"
    value=" Create Book"></input>
</div>



</form>
</div>
    )

}

export default Create;
