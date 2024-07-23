import { useState } from 'react';
import './Button.css'
function ToggleButton(props) {
    const text = "Без сортировки"
    const [count, setCount] = useState(0); 
    const ToggleMode = () =>{
        setCount((count)=> count +=1);
        if(count <= 2){
            setCount((count)=> count +=1)
            switch(count){
                case 0: break;
                case 1: break;
                case 2: break;
            }

        }
        else{
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            setCount((count)=> count = 0);
        }
    }
     return(
        <>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
            <button onClick={ToggleMode} type="button" className="btn btn-light">{text}</button>
            </div>
        </>
     )
}

export default ToggleButton;