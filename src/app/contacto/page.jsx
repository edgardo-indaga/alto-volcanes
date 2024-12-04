import { FormContact } from '@/components/Form/FormContact';
import ParrafoComponent from '@/components/ParrafoComponent/ParrafoComponent';

const portadaContact = '/bg-cabeza-contacto.webp';
const footerContact = '/bg-footer-contacto.webp';

export default function Contacto() {
    return (
        <>
            <section
                className="mt-[-200px] md:h-[800px]"
                style={{
                    backgroundImage: `url(${portadaContact})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                }}
            >
                <div className="container mx-auto">
                    <div className="flex flex-col items-center justify-center md:pt-[500px]">
                        <h1 className="font-sora text-[47px] leading-[47px] tracking-[0.1em] text-verdeTitulo">
                            CONTACTO
                        </h1>
                    </div>
                </div>
            </section>

            <section
                className="md:pb-[70px]"
                style={{
                    backgroundImage: `url(${footerContact})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                }}
            >
                <FormContact />
            </section>
        </>
    );
}
