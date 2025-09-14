import {useRouteError} from "react-router-dom"


const Error =  () => {
    const err = useRouteError();
    
    return (
        <div>
            <h1>OOPS Something Went Wrong...</h1>
            <h2>{err.status} - {err.statusText}</h2>
            <h3>{err.data}</h3>
        </div>
        
    )
} 

export default Error;