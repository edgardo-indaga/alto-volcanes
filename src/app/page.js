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
    const urbanizacionSostenible = '/urbanizacion-sostenible.webp';
    const timeLineMobile = '/mobile/timeline-alto-volcanes.webp';

    return (
        <>
            <HeaderHome />

            <section id="proyecto" className="px-[15px] py-[50px] sm:px-0 md:py-[70px]">
                <div className="container mx-auto">
                    <div className="flex flex-col">
                        <div className="flex flex-col items-center">
                            <h1 className="font-sora text-[47px] leading-[47px] tracking-[0.1em] text-verdeTitulo">
                                EL PROYECTO
                            </h1>
                            <div className="mt-[40px] md:mt-[50px] md:w-[600px]">
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

            <section className="mb-[50px] px-[15px] sm:px-0 md:mb-[70px]">
                <div className="container mx-auto">
                    <div className="flex-fol flex items-center justify-center">
                        <div
                            className="flex h-[500px] flex-col items-center justify-center rounded-[30px] px-[15px] drop-shadow-xl sm:h-[527px] sm:w-[995px] sm:px-0"
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

            <section className="px-[15px] py-[50px] sm:px-0 md:py-[70px]">
                <div className="container mx-auto">
                    <div className="flex flex-col sm:grid sm:grid-cols-2">
                        <div className="flex flex-col justify-center sm:col-span-1 md:h-[400px] md:pr-[100px]">
                            <div className="mb-[30px] flex md:mb-[30px]">
                                <Image
                                    src={pinMapa}
                                    alt={'Pin Mapa'}
                                    width={19.78}
                                    height={25.72}
                                    className="mr-[15px] sm:mr-[20px]"
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
                        <div className="mt-[30px] h-[300px] sm:col-span-1 sm:mt-0 md:h-[400px]">
                            <SliderGallery slides={carousel} />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="px-[15px] py-[70px] sm:px-0 md:pb-[160px] md:pt-[70px]"
                style={{
                    backgroundImage: `url(${floresFondo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                }}
            >
                <div className="container mx-auto">
                    <div className="flex flex-col items-center justify-center md:h-[600px]">
                        <div className="flex flex-col sm:w-[600px]">
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
                        <div className="hidden sm:flex md:h-[350px]">
                            <StepperWithTooltips />
                        </div>
                        <div>
                            <Image
                                src={timeLineMobile}
                                alt="Time Line"
                                width={400}
                                height={866}
                                className="block h-[650px] w-[300px] sm:hidden"
                            />
                        </div>
                        <div>
                            <a
                                href="https://seia.sea.gob.cl/expediente/expedientesEvaluacion.php?modo=ficha&id_expediente=2161208595"
                                className="flex rounded-[30px] bg-verdeTitulo px-[20px] py-[10px] font-figtree text-[14px] leading-[30px] text-blanco hover:bg-[#44985a] hover:opacity-50 sm:text-[19px] sm:leading-[35px] md:px-[30px] md:py-[8px]"
                                target={'_blank'}
                            >
                                <ArrowDownToLine className="mr-[10px] mt-[8px]" size={20} />
                                Descarga expediente completo del EIA
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-background px-[15px] py-[70px] sm:h-[720px] sm:px-0 md:py-[70px] md:pb-[160px] md:pt-[70px]">
                <div className="container mx-auto">
                    <div className="flex flex-col sm:grid sm:grid-cols-2">
                        <div className="order-2 flex justify-center sm:order-1 sm:col-span-1 sm:justify-normal">
                            <Image
                                src={urbanizacionSostenible}
                                alt={'Urbanización Sostenible'}
                                width={432}
                                height={646}
                                className="mt-[30px] h-auto w-[300px] sm:h-[646px] sm:w-[432px] md:mt-[-140px]"
                            />
                        </div>
                        <div className="order-1 mb-[30px] flex flex-col justify-center sm:order-2 sm:col-span-1 sm:mb-0 sm:items-end md:h-[580px]">
                            <h1 className="text-center font-sora text-[40px] uppercase leading-[47px] tracking-[0.1em] text-blanco sm:text-[47px] sm:leading-[47px] md:text-end">
                                Urbanización sostenible
                            </h1>
                            <p className="my-[30px] mb-[50px] font-figtree text-[16px] font-normal leading-[24px] text-blanco sm:mb-[20px] md:my-[60px] md:text-end">
                                Alto Volcanes pretende ser un referente de buenas prácticas, que
                                reduce su impacto y protege los valores ambientales del lugar. Esto,
                                mediante un Plan Verdeazul orientado conservar
                                <b>el régimen hidrológico del sistema</b>, proveer hábitat y
                                conectividad ecológica y ofrecer espacios naturales de uso público
                                de alto estándar paisajístico.
                            </p>
                            <Link
                                className="rounded-[30px] border-[2px] border-blanco py-[10px] text-center font-figtree text-[19px] leading-[35px] text-blanco hover:bg-blanco hover:text-grisTitulo hover:opacity-50 md:px-[30px] md:py-[8px]"
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
