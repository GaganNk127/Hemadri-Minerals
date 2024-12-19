import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="./images/about.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            About Us
                        </h2>
                        <p className="mt-6 text-gray-800 text-left">
                        At Hemadri Minerals, we specialize in the trade and marketing of premium-quality iron ore and other mineral resources. With years of expertise in the mineral industry, we are committed to delivering sustainable and innovative solutions to meet the needs of our global clientele.

Our mission is to bridge the gap between raw mineral resources and industries that require them, ensuring quality, reliability, and environmental responsibility in every transaction.

Driven by a passion for excellence and a customer-centric approach, Hemadri Minerals stands as a trusted partner for industries ranging from steel manufacturing to construction.

With a focus on sustainability, we prioritize ethical sourcing practices and aim to contribute to a greener future. Whether you're looking for reliable suppliers or expert guidance in the mineral market, Hemadri Minerals is your go-to solution.
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}