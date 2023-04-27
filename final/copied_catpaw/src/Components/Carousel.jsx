import React, { useState } from "react";
import "../Styles/Carousel.css";

function Carousel({ images }) {
    // Initialize the current index as 0
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to handle clicking on the previous arrow
    const handlePrevClick = () => {
        // If the current index is already 0, loop back to the end of the array
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
    };

    // Function to handle clicking on the next arrow
    const handleNextClick = () => {
        // If the current index is already at the end of the array, loop back to the beginning
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="carousel">
            {/* Previous arrow */}
                <div className="arrow left" onClick={handlePrevClick} tabindex="0">
                    &lt;
                </div>

            {/* Images and titles */}
            {images.map((image, index) => (
                <div
                    className={`image ${index === currentIndex ? "active" : ""}`}
                    key={index}
                    style={{ backgroundImage: `url(${image.src})` }}
                    alt={image.alt_text}
                >
                    <div className="title">{image.title}</div>
                </div>
            ))}

            {/* Next arrow */}
            <div className="arrow right" onClick={handleNextClick} tabindex="0">
                &gt;
            </div>
        </div>
    );
}

export default Carousel;
