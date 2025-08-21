const WhyUsSection = () => {
    return (
        <section className="py-16 px-6 lg:px-20 bg-gray-200 ">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-light text-center mb-10 text-neutral-700">What’s different when you work with us?</h2>
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto text-lg text-gray-600">
                    <div>
                        <p>
                            We bring over 10 years of experience in digital transformation, backed by a team of
                            strategists, designers, developers, and project managers. Our solutions create measurable impact
                            for businesses, schools, and communities.
                        </p>
                    </div>
                    <div>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Quality services delivered with precision</li>
                            <li>Large, skilled team for faster delivery</li>
                            <li>Cost-effective digital solutions</li>
                            <li>Trusted partner across Africa</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;
