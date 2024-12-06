'use client';

import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

export default function ImageCarousel({ images }) {
    return (
        <Carousel className="mx-auto w-[300px] md:h-[521px] md:w-[1100px]">
            <CarouselContent>
                {images.map((src, index) => (
                    <CarouselItem key={index}>
                        <div className="flex items-center justify-center md:h-[521px]">
                            <Image
                                src={src}
                                alt={`Slide ${index + 1}`}
                                width={1000}
                                height={521}
                                className="w-[350px] object-cover md:h-[521px] md:w-[1000px]"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="block md:block" />
            <CarouselNext className="block md:block" />
        </Carousel>
    );
}
