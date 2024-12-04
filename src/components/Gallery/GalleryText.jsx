'use client';

import React from 'react';

// Componente de Lightbox (POP-UP) de las imagenes
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import 'yet-another-react-lightbox/plugins/captions.css';
// import optional lightbox plugins
import 'yet-another-react-lightbox/plugins/thumbnails.css';

export default function GalleryText({ slides }) {
    const [index, setIndex] = React.useState(-1);

    return (
        <>
            {Array.isArray(slides) && slides.length > 0 ? (
                slides.length > 1 ? (
                    slides.map((slide, idx) => (
                        <p
                            key={idx}
                            onClick={() => setIndex(idx)}
                            style={{
                                cursor: 'pointer',
                                color: 'blue',
                                textDecoration: 'underline',
                            }}
                        >
                            Ver imagen completa {idx + 1}
                        </p>
                    ))
                ) : (
                    <p
                        onClick={() => setIndex(0)}
                        style={{ cursor: 'pointer' }}
                        className="font-figtree text-[16px] font-medium leading-[35px] text-verdeTitulo underline"
                    >
                        Ver imagen completa
                    </p>
                )
            ) : (
                <p>No hay imágenes disponibles.</p>
            )}
            <Lightbox slides={slides} open={index >= 0} index={index} close={() => setIndex(-1)} />
        </>
    );
}
