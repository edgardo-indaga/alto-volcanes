import {FormContact} from '@/components/Form/FormContact';

const portadaContact = '/bg-cabeza-contacto.webp';
const footerContact = '/bg-footer-contacto.webp';

export default function Contacto() {
    return (
        <>
            <section
                className="mt-[-200px] h-[90vh] px-[15px] sm:px-0 md:h-[650px]"
                style={{
                    backgroundImage: `url(${portadaContact})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                }}
            >
                <div className="container mx-auto">
                    <div className="flex flex-col items-center justify-center pt-[550px] md:pt-[550px]">
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
                <FormContact/>
            </section>
        </>
    );
}
