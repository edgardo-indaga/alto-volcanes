import Image from 'next/image';
import Link from 'next/link';

export default function HeaderHome() {
    const portada = '/fondo_portada.png';
    const logoNegro = '/logo-negro.svg';
    const arrowDown = '/arrow-down.svg';

    return (
        <section className="h-[90vh] md:h-[100vh]">
            <Image
                src={portada}
                alt={'Imagen Portada'}
                quality={100}
                fill
                className="h-[90vh] bg-top bg-no-repeat object-cover md:h-[100vh]"
            />
            <div className="container mx-auto">
                <div className="flex h-[90vh] flex-col items-center justify-center md:h-[100vh]">
                    <Image
                        src={logoNegro}
                        alt="Logo"
                        width={421}
                        height={117.5}
                        className="z-10 mb-[50px] w-[350px] md:mb-[100px] md:w-[421px]"
                    />
                    <h1 className="z-10 font-figtree text-[16px] font-normal leading-[24px] tracking-[0.2em] text-grisTitulo">
                        DESCUBRE
                    </h1>
                    <Link href="#proyecto" className="z-10">
                        <Image
                            src={arrowDown}
                            alt="Arrow Down"
                            width={30}
                            height={30}
                            className="z-10 mt-[20px]"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}
