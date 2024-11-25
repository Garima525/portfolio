'use client';
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Approach = () => {
    const items = [
        {
            number: "1",
            title: "Analysis & Strategy",
            description: "I begin by thoroughly analyzing the problem and developing a comprehensive strategy to address it.",
            illustration: "think.avif",
        },
        {
            number: "2",
            title: "Development & Maintenance",
            description: "I oversee the implementation of the strategy, ensuring the project stays on track and within budget.",
            illustration: "develop.avif",
        },
        {
            number: "3",
            title: "Finalization",
            description: "Finally, I ensure all deliverables meet the highest standards and prepare the project for a successful launch.",
            illustration: "final.jpg",
        },
        {
            number: "4",
            title: "Monitoring & Support",
            description: "Continuous monitoring and providing support to ensure the project runs smoothly post-launch.",
            illustration: "support.avif", // Replace with the actual path to your image
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 2, delayChildren: 0.5 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <section className="w-full py-20  bg-gray-50 px-10">
            <h1 className="text-4xl font-bold text-center mb-16">
                My <span className="text-orange-900">approach</span>
            </h1>
            <AnimatePresence>
                <motion.ul
                    className="relative flex flex-col items-center w-full space-y-8 md:space-y-0 md:flex-row md:justify-between md:space-x-8"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {items.map((item, index) => (
                        <motion.li
                            key={item.number}
                            className="relative flex flex-col items-center justify-between w-full md:w-1/4 p-6 bg-white text-center rounded-lg shadow-md transition-transform hover:scale-100 hover:shadow-lg"
                            variants={itemVariants}
                            custom={index}
                        >
                            <motion.div
                                className="flex flex-col items-center"
                                initial={'hidden'}
                                animate="visible"
                            >
                                <img src={item.illustration} alt={`${item.title} illustration`} className="w-36 h-36 mb-4" />
                                <span className="absolute top-0 -left-5 -translate-y-1/2 bg-black text-white rounded-full w-20 h-20 flex items-center justify-center text-4xl font-bold">
                                    {item.number}
                                </span>
                                <div className="mt-10">
                                    <span className="block text-lg font-extrabold text-orange-700 uppercase tracking-wide">
                                        {item.title}
                                    </span>
                                    <span className="block mt-4 text-gray-600 text-lg font-light">
                                        {item.description}
                                    </span>
                                </div>
                            </motion.div>
                        </motion.li>
                    ))}
                </motion.ul>
            </AnimatePresence>
        </section>
    );
};

export default Approach;
