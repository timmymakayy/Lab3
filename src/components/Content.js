{/*called in app.js*/}
function Content(){

    return(
        //visual piece 
<div>
{/*displays hello world*/}
<h1> hello world</h1>
     <h2>It is {new Date().toLocaleTimeString()}.</h2>
</div>


    );


}
export default Content;