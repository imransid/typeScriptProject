// import { type } from 'os';
import React, { useRef, ChangeEvent, InputHTMLAttributes} from 'react';
import './form-input.style.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    onChange(e: any):any ;
    value?:string;
    
}

const FormInput : React.FC<InputProps> = ({onChange, value,...otherprops}) => {
    const inputRef=useRef<HTMLInputElement>(null)

    return (
        
        <div className="form-input">
            <input ref={inputRef} {...otherprops} onChange={()=>(event: ChangeEvent<HTMLInputElement>): void=>{}}/>
        </div>
    )
}

export default FormInput
