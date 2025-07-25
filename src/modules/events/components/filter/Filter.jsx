import { useState } from 'react';
import style from './filter.module.css'
import { FilterButton } from '../filterButton/FilterButton';
import { 
  Search, 
  Filter as Filter2, 
  Music, 
  Trophy, 
  Palette, 
  Theater, 
  Camera, 
  Gamepad2} 
from "lucide-react"

const categorias = [
  { icono: <Filter2 size={17} />, texto: 'All Events' },
  { icono: <Music size={17} />, texto: 'Music' },
  { icono: <Trophy size={17} />, texto: 'Sports' },
  { icono: <Palette size={17} />, texto: 'Arts' },
  { icono: <Theater size={17} />, texto: 'Theater' },
  { icono: <Camera size={17} />, texto: 'Food' },
  { icono: <Gamepad2 size={17} />, texto: 'Gaming' },
];

export const Filter = () => {

  const [activoIndex, setActivoIndex] = useState(0);

  const manejarClick = () => {
    console.log("¡Hiciste clic!");
  };
  
  return (
    <div>
      <div className={style.container1}>
        <div className={style.element}>
          <input type="text" placeholder='Search events by name, city, or venue...'/>
          <button className={style.button} onClick={ manejarClick }>
            <Search color="rgb(212, 212, 212)"/>
          </button>
        </div>
      </div>
      <div className={style.container2}>
        {categorias.map((categoria, index) => (
          <FilterButton
            key={index}
            cat={categoria}
            activo={activoIndex === index}
            onClick={() => setActivoIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
