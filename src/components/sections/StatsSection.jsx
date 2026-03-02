import { useEffect, useState } from "react";
import Container from "../layout/Container";

const stats = [
  { label: "Students Enrolled", value: 12000, suffix: "+" },
  { label: "Placement Partners", value: 450, suffix: "+" },
  { label: "Average Placement Rate", value: 95, suffix: "%" },
  { label: "Campus Recruiters", value: 180, suffix: "+" },
];

function useAnimatedCounter(target) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1600;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = window.setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        window.clearInterval(timer);
      } else {
        setCount(Math.round(current));
      }
    }, duration / steps);

    return () => window.clearInterval(timer);
  }, [target]);

  return count;
}

function StatItem({ label, value, suffix }) {
  const counter = useAnimatedCounter(value);

  return (
    <div className="rounded-2xl bg-white p-6 text-center shadow-soft">
      <p className="text-3xl font-bold text-navy md:text-4xl">
        {counter}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-slate-500">{label}</p>
    </div>
  );
}

function StatsSection() {
  return (
    <section className="section-pad">
      <Container>
        <div className="mb-10 text-center">
          <p className="mb-3 inline-flex rounded-full bg-saffron/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-saffron">
            Institutional Impact
          </p>
          <h2 className="text-3xl font-bold text-navy md:text-4xl">Trusted by Students and Industry</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <StatItem key={item.label} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default StatsSection;
