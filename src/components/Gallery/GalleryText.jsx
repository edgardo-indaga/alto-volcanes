'use client';

import React from 'react';
// Componente de Album Visual
import PhotoAlbum from 'react-photo-album';
// Componente de Lightbox (POP-UP) de las imagenes
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
// Componente de Lightbox para poner titulos y descripciones
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/plugins/captions.css';
// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

export default function GalleryText({ slides, rowHeight }) {
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
            <Lightbox
                slides={slides}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Captions]}
            />
        </>
    );
}
