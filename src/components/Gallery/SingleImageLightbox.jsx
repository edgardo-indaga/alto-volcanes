'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const zoomHover = '/zoom-in.svg';

export default function SingleImageLightbox({ imageUrl }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div onClick={() => setIsOpen(true)} className="group relative cursor-pointer">
                <Image
                    src={imageUrl}
                    alt="Single Image"
                    width={486}
                    height={390}
                    className="rounded-[30px] md:h-auto md:w-[438px]"
                />
                <div className="absolute inset-0 flex items-center justify-center rounded-[30px] bg-gray-800 bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Image src={zoomHover} alt="Zoom" width={48} height={48} />
                </div>
            </div>
            <Lightbox slides={[{ src: imageUrl }]} open={isOpen} close={() => setIsOpen(false)} />
        </>
    );
}
