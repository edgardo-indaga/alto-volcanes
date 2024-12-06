import Image from 'next/image';
import Link from 'next/link';

export default function HeaderHome() {
    const portada = '/fondo_portada.png';
    const portadaMobile = '/mobile/fondo-responsive.webp';
    const logoNegro = '/logo-negro.svg';
    const arrowDown = '/arrow-down.svg';

    return (
        <section className="h-[90vh] md:h-[100vh]">
            <Image
                src={portada}
                alt={'Imagen Portada'}
                quality={100}
                fill
                className="hidden h-[90vh] bg-top bg-no-repeat object-cover sm:block md:h-[100vh]"
            />
            <Image
                src={portadaMobile}
                alt="Portada Mobile"
                quality={100}
                fill
                className="block h-[90vh] bg-top bg-no-repeat object-cover sm:hidden"
            />
            <div className="container mx-auto">
                <div className="flex h-[100vh] flex-col items-center justify-center md:h-[100vh]">
                    <Image
                        src={logoNegro}
                        alt="Logo"
                        width={421}
                        height={117.5}
                        className="z-10 mb-[140px] w-[350px] md:mb-[100px] md:w-[421px]"
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
