const AboutIntro = () => {
    return (
        <section className="py-16 px-6 lg:px-10  ">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
                <img
                    src="/images/about.jpg"
                    alt="Team collaboration"
                    className="rounded-xl shadow-lg w-full lg:w-1/2"
                />
                <div className="lg:w-1/2">
                    <h2 className="text-6xl text-sky-900 font-light mb-4">Who We Are</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Teko Systems Limited is headquartered in Nairobi, Kenya, with operations across
                        East, West, and Southern Africa. We specialize in designing and deploying intelligent,
                        user-centric technology solutions that solve real-world challenges in business,
                        education, faith-based institutions, and community development.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutIntro;
