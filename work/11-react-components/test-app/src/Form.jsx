import React, {useState} from 'react';
import Button from './Button';
function Form() {
    const [inputValue, setInputValue] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setIsSubmitted(true);
        console.log('Submitted!');
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Your Name: 
            </label>
            <input type="text" value={inputValue} onChange={handleInputChange}/>
            <Button visual="button" type="submit">Submit</Button>
            {isSubmitted && <p>Submitted</p>}
        </form>
    );
};
export default Form;