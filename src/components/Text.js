import { useState, useContext, useEffect } from "react"
import { DataContext } from "../App";

export default function Text(){
    const {data} = useContext(DataContext)
    const [text, setText] = useState("");

    useEffect(()=>{ setText(data.slip ? data.slip.advice : "") },[data])

    return(
        <p className="advice__text">{text}</p>   
    )
}