import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {

    const [title , settitle] = useState("");
    const [body , setbody] = useState("");
    const [author , setauthor] = useState("yatin");
    const [submit , setsubmit] = useState(false);

    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title , body , author};

        setsubmit(true);

        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setsubmit(false);
            history.push("/");
        })
    }
    return (
        <div className="form-container">
            <div className="create">
            <h2> a new blog </h2>
            <form  onSubmit = {handleSubmit}>
                <label htmlFor=""> Blog Title </label>
                <input 
                type = "text"
                required
                value={title}
                onChange={(e)=>settitle(e.target.value)}
                 />
                <label htmlFor=""> Blog text : </label>
                <textarea
                    required
                    value = {body}
                    onChange={(e)=>setbody(e.target.value)}
                >
                </textarea>
                <label > Blog author : </label>
                <select
                    value={author}
                    onChange={(e)=>setauthor(e.target.value)}
                >
                    <option value="yatin">yatin</option>
                </select>
                { !submit && <button> add blog </button>}
                { submit && <button disabled> submitting the blog .... </button>}
            </form>
        </div>
        </div> 
        
     );
}
 
export default Create;