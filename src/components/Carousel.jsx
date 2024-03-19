import { useState, useEffect, useRef } from 'react';

const Carousel = ({ arr }) => {
    const slideRefs = useRef([]);
    let slideIndex = 1;
    
    useEffect(() => {
        showSlides(slideIndex);
    },[slideIndex, arr]);

    const showSlides = (n) => {
        const slides = slideRefs.current;
        if (!slides.length) return;
        let i;
        if (n > slides.length) {slideIndex = 1};
        if (n < 1) {slideIndex = slides.length};
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[slideIndex-1].style.display = 'block';
    }

    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    }

    return(
        <div className="slideshow-container">
            {arr.map((imageUrl, index) => (
                <div key={index} ref={(el) => (slideRefs.current[index] = el)} className='mySlides fade'>
                    <img src={imageUrl} className='carouselPic' style={{ width: '100%' }} alt='project picture' />
                </div>
            ))}
            <a className='prev' onClick={() => plusSlides(1)}>&#10094;</a>
            <a className='next' onClick={() => plusSlides(-1)}>&#10095;</a>
        </div>
    )
}

export default Carousel;