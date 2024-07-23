//import { useState } from 'react';
import { useEffect } from 'react';
import './Input.css';
function ColorInput(props: { color: string | readonly string[] | undefined; }){

    //Двухсторонняя привязка?
    //const [textColor, setTextColor] = useState("");
    useEffect(()=>{
        if(props.color){
            alert("Тектовое поле не может быть пустым")
        }
    }, [props.color])
    return(
        <div className='color__form'>
            <p>Выберите цвет</p>
            <input value={props.color} type="text" className="form-control"></input>
            <input id='color' type='color' className="form-control"></input>
        </div>
    )
}

export default ColorInput;