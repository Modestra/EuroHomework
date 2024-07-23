import './Input.css';
function ColorInput(){
    return(
        <div className='color__form'>
            <p>Выберите цвет</p>
            <input id='color' type='color' className="form-control"></input>
        </div>
    )
}

export default ColorInput;