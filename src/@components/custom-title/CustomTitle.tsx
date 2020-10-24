import React from 'react';
import './custom-title.style.scss'

interface TitleProps{
    children:string;
}

const CustomTitle :React.FC<TitleProps>= ({children}) => {
    return (
        <div className="custom-title">
            <h2>{children}</h2>
        </div>
    )
}

export default CustomTitle
