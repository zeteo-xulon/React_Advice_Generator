import { useState, createContext, useEffect } from "react";
import './App.css';
import Title from './components/Title';
import Main from './components/Main';
import Footer from './components/Footer';
const server = "https://api.adviceslip.com/advice";
export const DataContext = createContext();

export default function App() {
  const [data, setData] = useState({});
  const [refresh, setRefresh] = useState(false);

  useEffect(()=> {
    const getData = async () => {
      const response = await fetch(server);
      const received = await response.json();
      setData(received);
    }
    getData()
  },[refresh])

  function refresher(){ 
    return refresh === false ? setRefresh(true) : setRefresh(false); 
  }
  

  return (
    <div className="app" id='app'>
      <DataContext.Provider value={{data, refresher}} >
        <Title />
        <Main />
        <Footer />
      </DataContext.Provider>
    </div>
  )
}