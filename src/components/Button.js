import { useContext } from 'react';
import dice_icon from '../assets/icon-dice.svg';
import { DataContext } from "../App";

export default function Button(){
  const { refresher } = useContext(DataContext)
  

  return(
    <div className="dice__circle" onClick={()=> refresher() }>
      <img src={dice_icon}
      alt="dice icon" 
      className="advice__button" 
      id="adviceButton" 
      />
    </div>
  )   
}