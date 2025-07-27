import { useEffect, useState } from 'react';
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
import style from './filter.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { filterByCategory, resetPage, searchEvent } from '../../../../store/slices/event';

const categorias = [
  { icono: <Filter2 size={17} />, texto: 'All Events' },
  { icono: <Music size={17} />, texto: 'Music' },
  { icono: <Trophy size={17} />, texto: 'Sports' },
  { icono: <Palette size={17} />, texto: 'Arts & Theater' },
  { icono: <Gamepad2 size={17} />, texto: 'Casino' },
  { icono: <Camera size={17} />, texto: 'Individual' },
  { icono: <Theater size={17} />, texto: 'Donation' },
];

export const Filter = () => {
  
  const dispatch = useDispatch();
  const { page } = useSelector( state => state.events );
  const [activoIndex, setActivoIndex] = useState(0);
  const [input, setInput] = useState('')

  const search = (name) => {
    dispatch(resetPage());
    dispatch(searchEvent(page,name));;
  };
  const filterCategory = (category) => {
    dispatch(resetPage());
    dispatch(filterByCategory(page,category));
  };
  
  return (
    <div>
      <div className={style.container1}>
        <div className={style.element}>
          <input 
            type="text" 
            placeholder="Search events by name, city, or venue..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className={style.button} onClick={() => search(input) }>
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
            onClick={() => {
                        setActivoIndex(index);
                        filterCategory(categoria.texto);
                      }}
          />
        ))}
      </div>
    </div>
  )
}
