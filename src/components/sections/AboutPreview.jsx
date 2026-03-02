import { FiCheckCircle } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Container from "../layout/Container";
import PrimaryButton from "../ui/PrimaryButton";
import SectionTitle from "../ui/SectionTitle";

const highlights = [
  "Academic excellence with practical exposure",
  "Mentorship-led learning and innovation labs",
  "Ethical leadership and community impact focus",
];

function AboutPreview() {
  return (
    <section className="section-pad">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionTitle
            eyebrow="About Institution"
            title="A Legacy of Quality Education and Modern Professional Training"
            description="Our institution blends foundational academic values with future-ready skills, preparing students to lead confidently in a competitive world."
          />
          <ul className="mt-6 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl bg-white p-3 shadow-soft">
                <FiCheckCircle className="mt-0.5 text-saffron" size={18} />
                <span className="text-sm text-slate-600">{item}</span>
              </li>
            ))}
          </ul>
          <PrimaryButton as={NavLink} to="/about" variant="outline" className="mt-6">
            Know More About Us
          </PrimaryButton>
        </div>
        <div className="grid-bg rounded-3xl border border-slate-200 bg-institutional-grid bg-[length:28px_28px] p-8">
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <h3 className="text-xl font-semibold text-navy">Why Students Choose Us</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Students receive academic rigor, practical projects, internships, and career guidance in one
              integrated ecosystem designed for measurable professional growth.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-lg font-bold text-navy">25+ Years</p>
                <p className="text-xs text-slate-500">Institutional experience</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-lg font-bold text-navy">300+ Faculty</p>
                <p className="text-xs text-slate-500">Mentors and domain experts</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutPreview;
