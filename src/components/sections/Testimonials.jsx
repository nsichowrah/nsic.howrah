import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";

const testimonials = [
  {
    quote:
      "The mentorship and internship support here gave me the confidence to secure an excellent role right after graduation.",
    name: "Aarav Kulkarni",
    role: "B.Tech Alumni, Software Engineer",
  },
  {
    quote:
      "Faculty guidance, practical learning modules, and peer culture transformed my perspective on leadership.",
    name: "Neha Sharma",
    role: "MBA Alumni, Business Analyst",
  },
  {
    quote:
      "Research-oriented curriculum and access to labs helped me publish my first paper during the final semester.",
    name: "Rohan Iyer",
    role: "M.Sc. Data Science Student",
  },
];

function Testimonials() {
  return (
    <section className="section-pad bg-slate-100">
      <Container>
        <SectionTitle
          eyebrow="Testimonials"
          title="Voices from Our Student Community"
          description="Real experiences from learners who shaped their professional journey with us."
          align="center"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-2xl bg-white p-6 shadow-soft">
              <p className="text-sm leading-relaxed text-slate-600">"{item.quote}"</p>
              <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="font-semibold text-navy">{item.name}</p>
                <p className="text-xs text-slate-500">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
