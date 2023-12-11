import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Notfound = () => {
    return ( 
       <div className="not-found">
        <h2>not found :) </h2>
        <p>sorry the page cannot be found </p>
        <p><Link to="/">Back to homepage</Link></p>
        
       </div> 
     );
}
 
export default Notfound;