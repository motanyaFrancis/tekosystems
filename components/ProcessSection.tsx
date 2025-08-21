import { FaClipboardList, FaPaintBrush, FaCode, FaHeadset } from "react-icons/fa";

const steps = [
    {
        title: "Project Initiation",
        points: ["Requirement gathering", "Proposal", "Solution design"],
        icon: <FaClipboardList size={28} />,
    },
    {
        title: "Design",
        points: ["Branding", "Wireframes", "Prototypes"],
        icon: <FaPaintBrush size={28} />,
    },
    {
        title: "Development",
        points: ["Frontend & Backend", "Integrations", "Quality assurance"],
        icon: <FaCode size={28} />,
    },
    {
        title: "Support",
        points: ["Analytics", "Security", "Continuous improvement"],
        icon: <FaHeadset size={28} />,
    },
];

const ProcessSection = () => {
    return (
        <section className="py-20 px-6 lg:px-20 bg-gray-50">
            <h2 className="text-5xl font-light text-center mb-6 text-gray-900">
                Our Process
            </h2>
            <p className="mb-16 text-gray-900 text-center">Think about our personal incubator of creativity. We turn your idea turn them into products that bring you revenue generating result.</p>

            <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
                {steps.map((step) => (
                    <div
                        key={step.title}
                        className="relative bg-white shadow-lg pb-8 flex flex-col items-center text-center hover:shadow-2xl transition"
                    >
                        {/* Top Blue Background (title area) */}
                        <div className="bg-sky-800 w-full pt-12 pb-4 ">
                            <h3 className="text-2xl font-light text-white">{step.title}</h3>
                        </div>

                        {/* Floating Red Icon */}
                        <div className="absolute -top-8 flex justify-center w-full">
                            <div className="bg-red-600 border-3 border-gray-100 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg">
                                {step.icon}
                            </div>
                        </div>

                        {/* Content */}
                        <ul className="mt-6 px-4 text-gray-600 space-y-2 text-sm text-left">
                            {step.points.map((p) => (
                                <li key={p}>{p}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProcessSection;
