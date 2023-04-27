import { useState } from 'react';
import './AccordionSection.css';
function AccordionSection({title, text_content}) {
    const[isOpen, setIsOpen] = useState(false);
    const openClass = "accordion-section__title--open";
    return (
        <div className="accordion-section">
            <button
                className={`accordion-section__title ${openClass}`}
                onClick={ () => setIsOpen(!isOpen)}
                aria-expanded={isOpen ? "true" : "false"}
            >
            <span>{title}</span>
            </button>
            {isOpen && text_content}
        </div>
    );
}

export default AccordionSection;