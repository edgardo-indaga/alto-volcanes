import Image from 'next/image';

export default function FooterComponent() {
    const logoBlanco = '/logo-blanco.svg';

    return (
        <footer className="bg-grisParrafo">
            <div className="container mx-auto flex h-[80px] items-center justify-center md:h-[140px]">
                <Image
                    src={logoBlanco}
                    alt={'Logo Blanco'}
                    width={200}
                    height={56}
                    className="h-auto w-[150px] sm:w-auto"
                />
            </div>
        </footer>
    );
}
