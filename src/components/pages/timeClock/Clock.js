import { useEffect, useState } from "react";
import Text from "../../chakraUi/Text";

function Clock () {

    const [timeNow, setTimeNow] = useState(new Date().toLocaleTimeString());
    useEffect(()=> {
        setInterval(()=>{
            const date = new Date();
        setTimeNow(date.toLocaleTimeString())
        }, 1000)
    } , [])
    return ( <Text fontWeight="500" color="#4a5471" fontSize="3rem">{timeNow}</Text>  );
}

export default Clock;