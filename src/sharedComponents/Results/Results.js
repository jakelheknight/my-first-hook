import { useEffect, useState } from "react"

export default function Results({firstName, lastName}) {
    const [data, setData] = useState();
    const [err, setErr] = useState();
    // exercise debounce.
    const asyncSetData = async (dataPromise) => {
        try {
            const res = await dataPromise;
            const resJson = await res.json();
            setData(resJson)
        } catch (e) {
            setErr('call failed')
        }
    }

    const query = [firstName, lastName].join( ' ' );

    useEffect(() => {
        const dataPromise = fetch(`https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
        asyncSetData(dataPromise)
    }, [firstName, lastName])
    return (
        <div style={{margin:30, background:"green"}}>
            {JSON.stringify(data)}
        </div>
    )
}
