import Image from 'next/image';
import Link from 'next/link';

import ParrafoComponent from '@/components/ParrafoComponent/ParrafoComponent';
import SingleImageLightbox from '@/components/Gallery/SingleImageLightbox';
import ButtonComponent from '@/components/ButtonComponent/ButtonComponent';

const portadaPlan = '/portada-verde-azul.webp';
const plan01 = '/img-plan-01.webp';
const plan02 = '/img-plan-02.webp';
const anilloVerde = '/anillo-verde.svg';
const drenajeUrbano = '/drenaje-urbano-sostenible.svg';
const bannerPlan = '/banner-plan.webp';

export default function PlanVerdeAzul() {
    return (
        <>
            <section
                className="mt-[-200px] md:h-[800px]"
                style={{
                    backgroundImage: `url(${portadaPlan})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                }}
            >
                <div className="container mx-auto">
                    <div className="flex flex-col items-center justify-center md:pt-[500px]">
                        <h1 className="font-sora text-[47px] leading-[47px] tracking-[0.1em] text-verdeTitulo">
                            PLAN VERDEAZUL
                        </h1>
                        <div className="z-10 md:mt-[60px] md:w-[600px]">
                            <ParrafoComponent
                                align="text-center"
                                text="Alto Volcanes pretende ser un referente de buenas prácticas, que <b>reduce su impacto y protege los valores ambientales del lugar.</b> Esto, mediante un Plan Verdeazul, sustentado en los principios del Diseño Urbano Sensible al Agua. Esto implica un cambio de paradigma en la forma tradicional de hacer ciudad."
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="md:pb-[70px] md:pt-[10px]">
                <div className="container z-10 mx-auto">
                    <div className="grid grid-cols-2">
                        <div className="col-span-1 flex justify-center">
                            <SingleImageLightbox imageUrl={plan01} />
                        </div>
                        <div className="col-span-1 flex justify-center">
                            <SingleImageLightbox imageUrl={plan02} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="md:py-[70px]">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="mb-[20px] text-center font-figtree text-[25px] font-medium uppercase leading-[45px] tracking-[0.1em] text-grisTitulo">
                            ¿EN QUÉ CONSISTE EL PLAN VERDE AZUL?
                        </h3>
                        <h4 className="text-center font-figtree text-[25px] font-normal leading-[25px] text-grisTitulo">
                            El Plan Verdeazul está basado en dos estrategias principales:
                        </h4>
                    </div>

                    <div className="flex justify-center md:mt-[80px]">
                        <div className="grid w-[800px] grid-cols-2">
                            <div className="flex flex-col items-center justify-center">
                                <Image
                                    src={anilloVerde}
                                    alt="Anillo Verde"
                                    width={90}
                                    height={79}
                                    className="md:mb-[30px]"
                                />
                                <Link
                                    href={'/'}
                                    className="flex justify-center rounded-[30px] bg-verdeTitulo font-figtree text-[19px] leading-[35px] text-blanco hover:bg-[#44985a] hover:opacity-50 md:w-[370px] md:px-[30px] md:py-[8px]"
                                >
                                    Habilitación Anillo Verde
                                </Link>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <Image
                                    src={drenajeUrbano}
                                    alt="Drenaje Urbano sostenible"
                                    width={76}
                                    height={76}
                                    className="md:mb-[30px]"
                                />
                                <Link
                                    href={'/'}
                                    className="flex justify-center rounded-[30px] bg-verdeTitulo font-figtree text-[19px] leading-[35px] text-blanco hover:bg-[#44985a] hover:opacity-50 md:w-[370px] md:px-[30px] md:py-[8px]"
                                >
                                    Obras de Drenaje Urbano Sostenible
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="md:my-[100px] md:h-[780px]">
                <div
                    className="md:h-[780px]"
                    style={{
                        backgroundImage: `url(${bannerPlan})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'top',
                    }}
                ></div>
            </section>
        </>
    );
}
