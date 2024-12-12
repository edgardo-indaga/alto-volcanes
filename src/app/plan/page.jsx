'use client';

import Image from 'next/image';
import {useRef} from 'react';

import ParrafoComponent from '@/components/ParrafoComponent/ParrafoComponent';
import SingleImageLightbox from '@/components/Gallery/SingleImageLightbox';
import AlterSingleImageLightbox from '@/components/Gallery/AlterSingleImagenLightbox';
import ArrowSliderGallery from '@/components/Gallery/ArrowSliderGaller';

const portadaPlan = '/portada-verde-azul.webp';
const plan01 = '/img-plan-01.webp';
const plan02 = '/img-plan-02.webp';
const anilloVerde = '/anillo-verde.svg';
const drenajeUrbano = '/drenaje-urbano-sostenible.svg';
const bannerPlan = '/banner-plan.webp';
const anilloMapa = '/anillo-mapa.webp';
const anilloMapaCompleto = '/anillo-mapa-completo.webp';
const veintiCuatro = '/24_ha_anillo-verde.svg';
const drenajeMapa = '/drenaje-mapa.webp';
const drenajeMapaCompleto = '/drenaje-mapa-completo.webp';

const slider = ['/anillo-verde-slider-1.webp', '/anillo-verde-slider-2.webp'];
const sliderOtro = ['/drenaje-slider-1.webp', '/drenaje-slider-2.webp'];

export default function PlanVerdeAzul() {
    const anilloVerdeRef = useRef(null);
    const drenajeRef = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <section
                className="mt-[-200px] h-[100vh] px-[15px] sm:px-0 md:h-[800px]"
                style={{
                    backgroundImage: `url(${portadaPlan})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                }}
            >
                <div className="container mx-auto">
                    <div className="flex flex-col items-center justify-center pt-[400px] md:pt-[500px]">
                        <h1 className="text-center font-sora text-[47px] leading-[47px] tracking-[0.1em] text-verdeTitulo">
                            PLAN VERDEAZUL
                        </h1>
                        <div className="z-10 mt-[40px] md:mt-[60px] md:w-[600px]">
                            <ParrafoComponent
                                align="text-center"
                                text="Alto Volcanes pretende ser un referente de buenas prácticas, que <b>reduce su impacto y protege los valores ambientales del lugar.</b> Esto, mediante un Plan Verdeazul, sustentado en los principios del Diseño Urbano Sensible al Agua. Esto implica un cambio de paradigma en la forma tradicional de hacer ciudad."
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-[15px] pb-[40px] sm:px-0 md:pb-[70px] md:pt-[10px]">
                <div className="container z-10 mx-auto">
                    <div className="sm:grid sm:grid-cols-2">
                        <div className="col-span-1 my-[20px] flex justify-center sm:my-0">
                            <SingleImageLightbox imageUrl={plan01}/>
                        </div>
                        <div className="col-span-1 my-[20px] flex justify-center sm:my-0">
                            <SingleImageLightbox imageUrl={plan02}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-[15px] sm:px-0 md:py-[70px]">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="mb-[20px] text-center font-figtree text-[25px] font-medium uppercase leading-[35px] tracking-[0.1em] text-grisTitulo sm:leading-[45px]">
                            ¿EN QUÉ CONSISTE EL PLAN VERDE AZUL?
                        </h3>
                        <h4 className="text-center font-figtree text-[25px] font-normal leading-[25px] text-grisTitulo">
                            El Plan Verdeazul está basado en <b>dos estrategias</b> principales:
                        </h4>
                    </div>

                    <div className="mt-[40px] flex justify-center md:mt-[80px]">
                        <div className="sm:grid sm:w-[800px] sm:grid-cols-2">
                            <div className="my-[30px] flex flex-col items-center justify-center sm:my-0">
                                <Image
                                    src={anilloVerde}
                                    alt="Anillo Verde"
                                    width={90}
                                    height={79}
                                    className="mb-[20px] sm:mb-[30px]"
                                />

                                <button
                                    onClick={() => scrollToSection(anilloVerdeRef)}
                                    className="flex w-[340px] justify-center rounded-[30px] bg-verdeTitulo py-[10px] font-figtree text-[19px] leading-[35px] text-blanco hover:bg-[#44985a] hover:opacity-50 md:w-[370px] md:px-[30px] md:py-[8px]"
                                >
                                    Habilitación Anillo Verde
                                </button>
                            </div>
                            <div className="my-[30px] flex flex-col items-center justify-center sm:my-0">
                                <Image
                                    src={drenajeUrbano}
                                    alt="Drenaje Urbano sostenible"
                                    width={76}
                                    height={76}
                                    className="mb-[20px] sm:mb-[30px]"
                                />

                                <button
                                    onClick={() => scrollToSection(drenajeRef)}
                                    className="flex w-[340px] justify-center rounded-[30px] bg-verdeTitulo py-[10px] font-figtree text-[19px] leading-[35px] text-blanco hover:bg-[#44985a] hover:opacity-50 md:w-[370px] md:px-[30px] md:py-[8px]"
                                >
                                    Obras de Drenaje Urbano Sostenible
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="h-[250px] py-[50px] sm:py-0 md:mb-[100px] md:mt-[100px] md:h-[400px] xl:h-[800px]">
                <div className="hidden h-[400px] sm:block">
                    <Image src={bannerPlan} alt={'Banner Planer'} height={2125} width={4725}
                           className="w-[100vw] h-auto"/>
                </div>
                <div className="block px-[15px] sm:hidden">
                    <SingleImageLightbox imageUrl={bannerPlan}/>
                </div>
            </section>

            <section className="px-[15px] py-[50px] sm:px-0 md:py-[70px]" ref={anilloVerdeRef}>
                <div className="container mx-auto">
                    <div className="sm:grid sm:grid-cols-2">
                        <div
                            className="mb-[30px] flex flex-col justify-between sm:col-span-1 sm:mb-0 md:h-[532px] md:pr-[55px]">
                            <h1 className="mb-[30px] text-center font-sora text-[40px] font-medium leading-[48px] tracking-[0.1em] text-grisTitulo sm:text-left sm:leading-[55px] md:mb-[40px] md:text-[47px]">
                                ANILLO <br/> VERDE
                            </h1>

                            <ParrafoComponent
                                text="El proyecto contempla un Anillo Verde de más de 26 ha, que integra humedales, estero y bosque nativo, orientado a la <b>protección, renaturalización y conectividad de ecosistemas,</b> así como al disfrute y uso público."/>
                            <ParrafoComponent
                                text="Este espacio incluye un circuito interpretativo, miradores y ciclovías, ofreciendo zonas con alto potencial para la recreación y aprendizaje al aire libre."/>

                            <div
                                className="flex h-[60px] items-center justify-center rounded-[30px] bg-[#EDF4EA] md:h-[100px] md:w-[496px]">
                                <Image
                                    src={veintiCuatro}
                                    alt={'24 Hectareas'}
                                    width={63}
                                    height={64}
                                    className="h-[40px] md:mb-[12px] md:h-[61px] md:w-[60px]"
                                />
                                <h3 className="font-figtree text-[20px] font-bold leading-[40px] tracking-[0.04em] text-[#2b9440] opacity-60 sm:text-[25px] md:ml-[20px]">
                                    26,60 HA ANILLO VERDE{' '}
                                </h3>
                            </div>
                        </div>
                        <div className="flex items-start justify-center sm:col-span-1">
                            <AlterSingleImageLightbox
                                alterUrl={anilloMapa}
                                imageUrl={anilloMapaCompleto}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-[70px] md:py-[70px]">
                <div className="container mx-auto">
                    <div className="flex justify-center">
                        <ArrowSliderGallery images={slider}/>
                    </div>
                </div>
            </section>

            <section className="bg-[#EFEFEF] px-[15px] py-[50px] md:py-[70px]" ref={drenajeRef}>
                <div className="container mx-auto">
                    <div className="sm:grid sm:grid-cols-2">
                        <div className="flex flex-col justify-center md:h-[532px] md:pr-[55px]">
                            <h1 className="mb-[20px] text-center font-sora text-[40px] font-medium leading-[45px] tracking-[0.1em] text-grisTitulo sm:text-left sm:leading-[55px] md:text-[47px]">
                                DRENAJE <br/>
                                URBANO <br/>
                                SOSTENIBLE
                            </h1>
                            <h5 className="mb-[30px] text-center font-figtree text-[25px] font-medium italic leading-[35px] text-[#2b9440] opacity-60 sm:text-left md:mb-[40px]">
                                GESTIÓN LOCAL DE LAS AGUAS LLUVIAS
                            </h5>
                            <ParrafoComponent
                                text="El proyecto integra soluciones de drenaje urbano sostenible, que busca mantener el <b>ciclo local del agua</b>. Esto se traduce en que los conjuntos de viviendas entregarán buena parte de sus aguas lluvias al sistema natural de esteros y humedales, previniendo inundaciones en zonas habitadas y conservando los ecosistemas."/>
                        </div>
                        <div className="my-[30px] flex justify-center sm:col-span-1 sm:my-0">
                            <AlterSingleImageLightbox
                                alterUrl={drenajeMapa}
                                imageUrl={drenajeMapaCompleto}
                            />
                        </div>
                    </div>
                    <div className="mt-[50px] flex justify-center md:mt-[70px]">
                        <ArrowSliderGallery images={sliderOtro}/>
                    </div>
                </div>
            </section>
        </>
    );
}
