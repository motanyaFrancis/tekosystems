"use client";

import {
    FaChurch,
    FaUsers,
    FaBriefcase,
    FaBook,
    FaMapMarkedAlt,
} from "react-icons/fa";

const impacts = [
    {
        title: "Churches Onboarded",
        description:
            "Since 2020, we’ve successfully onboarded over 500 churches to the Church App, empowering congregations with digital tools for worship, communication, and community growth.",
        icon: <FaChurch className="w-5 h-5 text-blue-500" />,
    },
    {
        title: "Active Users",
        description:
            "Across Africa, more than 10,000 users actively engage with our platforms, building strong digital communities that foster faith, learning, and collaboration.",
        icon: <FaUsers className="w-5 h-5 text-blue-500" />,
    },
    {
        title: "SME Tools",
        description:
            "We empower small and medium-sized enterprises with digitized HR and legal workflows, enabling smoother operations, compliance, and efficient workforce management.",
        icon: <FaBriefcase className="w-5 h-5 text-blue-500" />,
    },
    {
        title: "E-Learning",
        description:
            "Our education platforms reach thousands of students, providing accessible e-learning tools that improve knowledge sharing, academic performance, and digital literacy.",
        icon: <FaBook className="w-5 h-5 text-blue-500" />,
    },
    {
        title: "Civic Tech",
        description:
            "Through community mapping projects in Nairobi and beyond, we drive civic innovation by equipping citizens with tools to understand, organize, and shape their environments.",
        icon: <FaMapMarkedAlt className="w-5 h-5 text-blue-500" />,
    },
];

export default function ImpactSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                {/* Title */}
                <h2 className="text-3xl md:text-5xl font-light text-center text-slate-800 mb-12">
                    Our Impact
                </h2>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                    {impacts.map((item, idx) => (
                        <div
                            key={idx}
                            className="border-b border-slate-200 pb-6"
                        >
                            {/* Title Row with Icon */}
                            <div className="flex items-center gap-2 mb-2">
                                <span className="p-2 bg-blue-50 rounded-md">
                                    {item.icon}
                                </span>
                                <h3 className="text-slate-800 font-semibold">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
