'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function AlterSingleImageLightbox({ imageUrl, alterUrl }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div onClick={() => setIsOpen(true)} className="cursor-pointer">
                <Image
                    src={alterUrl}
                    alt="Single Image"
                    width={486}
                    height={390}
                    className="rounded-[30px] md:h-auto md:w-[438px]"
                />
            </div>
            <Lightbox slides={[{ src: imageUrl }]} open={isOpen} close={() => setIsOpen(false)} />
        </>
    );
}
