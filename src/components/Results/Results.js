import {useEffect, useState} from 'react'

export default function Results() {
    const [data, setData] = useState({});
    // useEffect(() => {
    //     fetch(`https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=john&page=1&include_adult=false`)
    //         .then(data => {
    //             return data.json();
    //         })
    //         .then(setData)
    // }, [])
    return (
        <div style={{margin:30, background:WebGL2RenderingContext}}>
            Data goes here
            {/* {data.results.map(actor => {
                return <ShowActor {...actor} />
            })} */}
        </div>
    )
}
