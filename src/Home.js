import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const {data : blogs, ispending, errmsg} = useFetch('http://localhost:8000/blogs');
    
    return (
        <div className="home">
            {errmsg && <div>{ errmsg }</div>}
            {ispending && <div> Loading ... </div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;