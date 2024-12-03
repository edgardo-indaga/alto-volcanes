'use client';

import React, { useState } from 'react';

const StepperWithTooltips = () => {
    const steps = [
        { id: 1, tooltip: 'Preparación previa', icon: '/svg/preparacion_previa.svg' },
        { id: 2, tooltip: 'Ingreso al SEIA ', icon: '/svg/seia.svg' },
        {
            id: 3,
            tooltip: 'Proceso participación\nCiudadana (PAC)',
            icon: '/svg/pac.svg',
        },
        { id: 4, tooltip: 'ICSARA', icon: '/svg/icsara.svg' },
        { id: 5, tooltip: 'Agenda', icon: '/svg/agenda.svg' },
        {
            id: 6,
            tooltip: 'Obtención de \nRCA favorable',
            icon: '/svg/rca.svg',
        },
    ];

    const [hoveredStep, setHoveredStep] = useState(null);

    return (
        <div className="flex items-center space-x-8">
            {steps.map((step, index) => (
                <div key={step.id} className="relative flex flex-col items-center">
                    {/* Line between steps */}
                    {index > 0 && (
                        <div
                            className="absolute -left-[3.6rem] top-[18%] h-[2px] w-[90px] -translate-y-[25%] bg-[#e7e7ea]"
                            aria-hidden="true"
                        />
                    )}

                    {/* Circle with hover and tooltip */}
                    <div
                        className={`mx-[30px] flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full border-2 ${
                            hoveredStep === step.id
                                ? 'border-verdeTitulo bg-verdeTitulo'
                                : 'border-[#e7e7ea] bg-[#e7e7ea]'
                        }`}
                        onMouseEnter={() => setHoveredStep(step.id)}
                        onMouseLeave={() => setHoveredStep(null)}
                    >
                        {/* Tooltip */}
                        {hoveredStep === step.id && (
                            <div className="absolute -top-[80px] left-1/2 flex flex-col items-center">
                                <div className="relative z-10 flex h-[70px] w-[150px] -translate-x-1/2 transform items-center justify-center rounded bg-verdeTitulo p-2 text-center text-[12px] leading-[15px] text-blanco">
                                    {step.tooltip}
                                </div>
                                {/* Tooltip arrow */}
                                <div className="absolute -bottom-[15px] left-[0px] h-0 w-0 -translate-x-1/2 transform border-[8px] border-transparent border-t-verdeTitulo"></div>
                            </div>
                        )}
                    </div>

                    {/* Icon below the circle */}
                    <img
                        src={step.icon}
                        alt={`Icono ${step.id}`}
                        className="mt-2 h-[45px] w-[45px] object-contain"
                    />
                </div>
            ))}
        </div>
    );
};

export default StepperWithTooltips;
