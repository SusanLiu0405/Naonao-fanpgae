import './Button.css';
import { useState } from 'react';
// When click, show its children
function Button({ 
    children, 
    className, 
    disabled=false,
    onClick, 
    type,
    visual="button",
  }) { 
    let buttonClass = "button";
    if (visual === "link") { 
      buttonClass = "button-link";
    }


    const [buttonText, setButtonText] = useState('Click me!');
    function handleClick() {
      if (buttonText === 'Click me!') {
      setButtonText('Thanks for clicking!');
    }
  }


    return (
      <button 
        className={`${buttonClass} ${className}`}
        disabled={disabled} type={type}
        onClick={handleClick}
      >
        {buttonText}
      </button>
    );
}
  
export default Button;  