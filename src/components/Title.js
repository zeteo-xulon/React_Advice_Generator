import { useContext, useState, useEffect } from "react"
import { DataContext } from "../App"

export default function Title(){
  const { data } = useContext(DataContext);
  const [title, setTitle] = useState("");

  useEffect(()=>{ setTitle(data.slip ? data.slip.id : "") },[data])

  return(
    <header className="header">
      <h1 className="advice__title">ADVICE #{title}</h1>
    </header>
  )
}