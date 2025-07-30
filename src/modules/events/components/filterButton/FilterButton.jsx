import style from './filterButton.module.css'

export const FilterButton = ({ cat, activo, onClick }) => {
  return (
    <button
      className={activo ? style['btn-activo'] : style['btn-inactivo']}
      onClick={onClick}
    >
      {cat.icono}
      {cat.texto}
    </button>
  )
}
