import { useEffect, useState } from "react";
const useFetch = (url) => {
    const [data, setdata] = useState(null);
    const [ispending, setispending] = useState(true);
    const [errmsg , seterrmsg] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if(!res.ok){
                        setdata(null);
                        throw Error("could not fetch the data from the server");
                    }
                    return res.json();
                })
                .then(data => {
                    setdata(data);
                    setispending(false);
                    seterrmsg(null);
                })
                .catch(err=>{
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted')
                      }
                    else{
                        setispending(false);
                        seterrmsg(err.message); 
                    }
                })
        }, 1000);

        return () => abortCont.abort();
    }, [url])

    return ( {data, ispending, errmsg} );
}
 
export default useFetch;