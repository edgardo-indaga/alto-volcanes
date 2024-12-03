import Image from 'next/image';

export default function FooterComponent() {
    const logoBlanco = '/logo-blanco.svg';

    return (
        <footer className="bg-grisParrafo">
            <div className="container mx-auto flex items-center justify-center md:h-[140px]">
                <Image src={logoBlanco} alt={'Logo Blanco'} width={198} height={55.27} />
            </div>
        </footer>
    );
}