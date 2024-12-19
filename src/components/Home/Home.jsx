import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function Home() {
    const [text] = useTypewriter({
        words: ['Progress', 'Trust', 'Sustainability', 'Innovation'],
        loop: true,
        delaySpeed: 2000, // Delay between words
    });

    return (
        <div className="mx-0 w-full max-h-full bg-blue-300">
            {/* Hero Section */}
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-40 sm:space-y-8 space-y-4 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-6xl font-bold sm:text-5xl text-center">
                            Hemadri Minerals
                        </h2>
                        <h3 className="text-2xl font-bold sm:text-2xl text-center">
                            We Believe in{' '}
                            <span className="text-2xl font-bold text-black sm:text-2xl">
                                {text}
                                <Cursor cursorStyle="|" />
                            </span>
                        </h3>
                    </div>
                </div>
                {/* Replace SVG with Image */}
                <div className="absolute inset-0 w-full h-full">
                    <img
                        className="w-full h-auto object-cover"
                        src="./images/bg1.jpg"
                        alt="Hero background"
                    />
                </div>
            </aside>

            {/* Center Image Section */}
            <div className="flex justify-center items-center space-x-4 sm:mt-20">
    <img
        className="sm:w-96 w-48 rounded-md aspect-square object-cover"
        src="./images/about.jpg"
        alt="About Us Image"
    />
    <img
        className="sm:w-96 w-48 rounded-md aspect-square object-cover"
        src="./images/bg.jpg"
        alt="Background Image"
    />
</div>


            {/* Footer Section */}
            <h1 className="text-center text-4xl sm:text-5xl py-10 font-medium font-serif ">
                Delivering Excellence in Mineral Resources
            </h1>
        </div>
    );
}