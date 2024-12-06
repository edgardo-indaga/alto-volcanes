'use client';

import { useState } from 'react';

export const FormContact = () => {
    const [isSubmitted, setSubmitted] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/contact/contact', {
                // Replace with your actual API route for SMTP
                method: 'POST',
                body: JSON.stringify({
                    name,
                    email,
                    subject,
                    message,
                }),
                headers: {
                    'content-type': 'application/json',
                },
            });

            console.log(res);

            if (res.status === 200) {
                setSubmitted(true);
            } else {
                console.error('Error sending email:', await res.text());
                // Show an error message to the users
            }
        } catch (err) {
            console.error('Error submitting form:', err);
            // Show an error message to the users
        }
    };

    return isSubmitted ? (
        <div className="container mx-auto md:h-[450px]">
            <div className="flex flex-col items-center justify-center">
                <h1 className="mt-[150px] text-center font-figtree text-[50px] font-semibold text-grisTitulo">
                    ¡Gracias por tu mensaje!
                </h1>
            </div>
        </div>
    ) : (
        <div className="container mx-auto px-[15px] sm:px-0 md:mt-[70px]">
            <div className="flex justify-center">
                <form onSubmit={onSubmit} className="md:w-[800px]">
                    <div className="py-[20px] sm:grid sm:grid-cols-2">
                        <div className="sm:col-span-1 md:pr-[10px]">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Nombre/Apellido *"
                                autoComplete="name"
                                required
                                className="h-[45px] w-full rounded-[16px] border-[1px] border-[#151515] px-[15px] font-figtree text-[16px] font-normal italic leading-[24px] text-[#707070] md:h-[58px]"
                            />
                        </div>
                        <div className="col-span-1 pt-[20px] sm:pt-0 md:pl-[10px]">
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Email *"
                                autoComplete="email"
                                required
                                className="h-[45px] w-full rounded-[16px] border-[1px] border-[#151515] px-[15px] font-figtree text-[16px] font-normal italic leading-[24px] text-[#707070] md:h-[58px]"
                            />
                        </div>
                    </div>
                    <div className="sm:py-[20px]">
                        <input
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            type="text"
                            placeholder="Asunto *"
                            required
                            className="h-[45px] w-full rounded-[16px] border-[1px] border-[#151515] px-[15px] font-figtree text-[16px] font-normal italic leading-[24px] text-[#707070] md:h-[58px]"
                        />
                    </div>
                    <div className="py-[20px]">
                        <textarea
                            cols="30"
                            rows="10"
                            placeholder="Mensaje *"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="rounded-[16px] border-[1px] border-[#151515] p-[15px] font-figtree text-[16px] font-normal italic leading-[24px] text-[#707070] md:w-full"
                        ></textarea>
                    </div>
                    <div className="flex justify-center pb-[70px] sm:py-[20px]">
                        <button
                            type="submit"
                            className="rounded-[30px] bg-verdeTitulo px-[40px] py-[8px] text-[19px] font-medium leading-[35px] text-blanco"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
