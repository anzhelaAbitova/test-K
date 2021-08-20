import React from 'react';

const Button = (props) => {
    return ( <button className='btn' onClick={props.func}>{props.inner}</button> );
}
 
export default Button;