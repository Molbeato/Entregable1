import "./Button.css"

const button = ({   handlerClick   }) => {
  return (
    <button className="button_refresh" onClick={handlerClick}>
        <i className='bx bx-refresh'></i>
    </button>
  )
}

export default button;