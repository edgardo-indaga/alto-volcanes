'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function SliderGallery({ slides }) {
    const [index, setIndex] = useState(-1);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <Slider {...settings}>
                {slides.map((slide, idx) => (
                    <div key={idx} className="h-[400px]" onClick={() => setIndex(idx)}>
                        <Image
                            src={slide.src}
                            alt={'Slider'}
                            width={486}
                            height={390}
                            className="h-auto w-full cursor-pointer rounded-[30px]"
                        />
                    </div>
                ))}
            </Slider>
            <Lightbox slides={slides} open={index >= 0} index={index} close={() => setIndex(-1)} />
        </>
    );
}
