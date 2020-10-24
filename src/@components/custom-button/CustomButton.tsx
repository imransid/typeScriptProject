import React,{InputHTMLAttributes} from 'react';
import './custom-button.style.scss'

interface ButtonProps extends InputHTMLAttributes<HTMLInputElement> {

    btype?:string;
    buttontitle?:string;
    
}

const CustomButton :React.FC<ButtonProps> =({btype,buttontitle,...otherprops}) => {
    return (
    <button className={ `custom-button ${btype==='outline' ? 'outline':''} ${btype==="socialButton" ? "socialButton" : ''} ${btype==='secondary' ? 'secondary':""}`}>{buttontitle}</button>

    )
}

export default CustomButton
