// components/ReachSection.tsx
"use client";

export default function ReachSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100 d">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 ">
          🌍 Our Reach
        </h2>
        <p className="text-lg text-slate-700 mt-4">
          We proudly serve clients across Africa. Whether you're in{" "}
          <span className="font-semibold">Nairobi</span>,{" "}
          <span className="font-semibold">Kampala</span>, or{" "}
          <span className="font-semibold">Lagos</span> — we&apos;re ready to help you
          scale.
        </p>
      </div>
    </section>
  );
}
