import React from 'react';
import classes from './Button.module.scss';

interface ButtonInterface {
    
    btnType?:string;
    children: React.ReactNode;
    clicked?:((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
      | undefined;
    disabled?: boolean;

}

const Button= (props:ButtonInterface)=>{

    
    return(
        <button 
            
            onClick={props.clicked}
            disabled={props.disabled}>
                {props.children}
        </button>
    )
    
}



export default Button;