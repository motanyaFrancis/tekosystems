const stats = [
  { label: "Projects", value: "2800+" },
  { label: "Staff", value: "140+" },
  { label: "Offices", value: "4" },
  { label: "Happy Clients", value: "729+" },
];

const StatsSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-6">
        {stats.map((stat) => (
          <div key={stat.label}>
            <h3 className="text-3xl font-bold">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
