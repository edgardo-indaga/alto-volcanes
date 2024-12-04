export default function ParrafoComponent({ text, align }) {
    return (
        <>
            <p
                className={`${align} mb-[20px] font-figtree text-[16px] font-normal leading-[24px] text-grisParrafo`}
                dangerouslySetInnerHTML={{ __html: text }}
            />
        </>
    );
}
