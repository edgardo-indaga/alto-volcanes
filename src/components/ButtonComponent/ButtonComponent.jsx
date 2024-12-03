import Link from 'next/link';

export default function ButtonComponent({ texto, link }) {
    return (
        <>
            <Link
                href={link}
                className="flex rounded-[30px] bg-verdeTitulo font-figtree text-[19px] leading-[35px] text-blanco hover:bg-[#44985a] hover:opacity-50 md:px-[30px] md:py-[8px]"
            >
                {texto}
            </Link>
        </>
    );
}
