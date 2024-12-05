'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const zoomHover = '/zoom-in.svg';

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
                    <div
                        key={idx}
                        className="group relative md:h-[386px]"
                        onClick={() => setIndex(idx)}
                    >
                        <Image
                            src={slide.src}
                            alt={'Slider'}
                            width={550}
                            height={386}
                            className="h-auto w-full cursor-pointer rounded-[30px]"
                        />
                        <div className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-[30px] bg-gray-800 bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <Image src={zoomHover} alt="Zoom" width={48} height={48} />
                        </div>
                    </div>
                ))}
            </Slider>
            <Lightbox slides={slides} open={index >= 0} index={index} close={() => setIndex(-1)} />
        </>
    );
}
