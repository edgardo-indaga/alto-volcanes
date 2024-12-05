import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownToLine } from 'lucide-react';

import HeaderHome from '@/components/HeaderHome/HeaderHome';
import GalleryText from '@/components/Gallery/GalleryText';
import SliderGallery from '@/components/Gallery/SliderGallery';
import ParrafoComponent from '@/components/ParrafoComponent/ParrafoComponent';
import StepperWithTooltips from '@/components/StepperWithTooltips/StepperWithTooltips';

const slides = [
    {
        src: '/foto_proyecto.webp',
    },
];

const carousel = [{ src: '/slider-01.webp' }, { src: '/slider-02.webp' }];

export default function Home() {
    const photoProyecto = '/foto_proyecto.webp';
    const pinMapa = '/ubicacion.svg';
    const floresFondo = '/fondo-flores.webp';
    const fondoBosque = '/fondo-urbanizacion.webp';
    const urbanizacionSostenible = '/urbanizacion-sostenible.webp';

    return (
        <>
            <HeaderHome />

            <section id="proyecto" className="md:py-[70px]">
                <div className="container mx-auto">
                    <div className="flex flex-col">
                        <div className="flex flex-col items-center">
                            <h1 className="font-sora text-[47px] leading-[47px] tracking-[0.1em] text-verdeTitulo">
                                EL PROYECTO
                            </h1>
                            <div className="md:mt-[50px] md:w-[600px]">
                                <ParrafoComponent
                                    align="text-center"
                                    text="Alto Volcanes es un proyecto de urbanización que habilitará
                                    calles y manzanas a partir de las cuales se crearán nuevos
                                    conjuntos habitacionales."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mx-auto md:mb-[70px]">
                    <div className="flex-fol flex items-center justify-center">
                        <div
                            className="flex h-[527px] w-[995px] flex-col items-center justify-center rounded-[30px] drop-shadow-xl"
                            style={{
                                backgroundImage: `url(${photoProyecto})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="flex flex-col items-center justify-center rounded-[30px] bg-blanco p-[30px] opacity-85 md:h-[246px] md:w-[500px]">
                                <ParrafoComponent
                                    align="text-center"
                                    text="El proyecto busca dar respuesta a las <b>necesidades locales de vivienda, equipamiento e infraestructura vial</b>y, al mismo tiempo, asegurar la conservación de la biodiversidad, la provisión de servicios ecosistémicos y el respeto por las identidades locales, para un habitar sostenible y armónico."
                                />
                                <GalleryText slides={slides} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mx-auto md:py-[70px]">
                    <div className="grid grid-cols-2">
                        <div className="span col-1 flex flex-col justify-center md:h-[400px] md:pr-[100px]">
                            <div className="flex md:mb-[40px]">
                                <Image
                                    src={pinMapa}
                                    alt={'Pin Mapa'}
                                    width={19.78}
                                    height={25.72}
                                    className="mr-[20px]"
                                    priority
                                />
                                <h2 className="font-sora text-[25px] font-semibold leading-[35px] tracking-[0.1em] text-verdeTitulo">
                                    UBICACIÓN
                                </h2>
                            </div>
                            <div>
                                <ParrafoComponent
                                    align="text-in"
                                    text="Se ubica en el <b>sector nororiente de Puerto Montt,</b> en un
                                    área definida por el Plano Regulador Comunal como “extensión
                                    urbana”."
                                />
                                <ParrafoComponent
                                    align="text-in"
                                    text="Está próximo al aeródromo y al parque La Paloma, sobre el barrio Valle Volcanes, una zona residencial consolidada de la comuna."
                                />
                            </div>
                        </div>
                        <div className="span col-1 md:h-[400px]">
                            <SliderGallery slides={carousel} />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="md:pb-[160px] md:pt-[70px]"
                style={{
                    backgroundImage: `url(${floresFondo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                }}
            >
                <div className="container mx-auto">
                    <div className="flex flex-col items-center justify-center md:h-[600px]">
                        <div className="flex w-[600px] md:flex-col">
                            <h3 className="mb-[40px] text-center font-figtree text-[25px] font-bold leading-[35px] text-grisTitulo">
                                Alto Volcanes ingresó al SEIA vía Estudio de Impacto Ambiental
                                (EIA).
                            </h3>
                            <ParrafoComponent
                                align="text-center"
                                text="Este Estudio presenta una descripción del proyecto, la
                                caracterización de las componentes ambientales del territorio, una
                                evaluación de sus impactos y una propuesta de medidas de mitigación,
                                con sus respectivos planes de seguimiento."
                            />
                        </div>
                        <div className="flex md:h-[350px]">
                            <StepperWithTooltips />
                        </div>
                        <div>
                            <a
                                href="https://seia.sea.gob.cl/expediente/expedientesEvaluacion.php?modo=ficha&id_expediente=2161208595"
                                className="flex rounded-[30px] bg-verdeTitulo font-figtree text-[19px] leading-[35px] text-blanco hover:bg-[#44985a] hover:opacity-50 md:px-[30px] md:py-[8px]"
                                target={'_blank'}
                            >
                                <ArrowDownToLine className="mr-[10px] mt-[8px]" size={20} />
                                Descarga expediente completo del EIA
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="h-[720px] md:py-[70px]"
                style={{
                    backgroundImage: `url(${fondoBosque})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                }}
            >
                <div className="container mx-auto">
                    <div className="grid grid-cols-2">
                        <div className="col-span-1">
                            <Image
                                src={urbanizacionSostenible}
                                alt={'Urbanización Sostenible'}
                                width={432}
                                height={646}
                                className="md:mt-[-140px]"
                            />
                        </div>
                        <div className="col-span-1 flex flex-col items-end justify-center md:h-[580px]">
                            <h1 className="font-sora text-[47px] uppercase leading-[47px] tracking-[0.1em] text-blanco md:text-end">
                                Urbanización sostenible
                            </h1>
                            <p className="mb-[20px] font-figtree text-[16px] font-normal leading-[24px] text-blanco md:my-[60px] md:text-end">
                                Alto Volcanes pretende ser un referente de buenas prácticas, que
                                reduce su impacto y protege los valores ambientales del lugar. Esto,
                                mediante un Plan Verdeazul orientado conservar
                                <b>el régimen hidrológico del sistema</b>, proveer hábitat y
                                conectividad ecológica y ofrecer espacios naturales de uso público
                                de alto estándar paisajístico.
                            </p>
                            <Link
                                className="rounded-[30px] border-[2px] border-blanco text-center font-figtree text-[19px] leading-[35px] text-blanco hover:bg-blanco hover:text-grisTitulo hover:opacity-50 md:px-[30px] md:py-[8px]"
                                href="/plan"
                            >
                                PLAN MAESTRO VERDEAZUL
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
