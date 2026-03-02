import { FiArrowRight, FiDownload } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Container from "../components/layout/Container";
import PrimaryButton from "../components/ui/PrimaryButton";
import SectionTitle from "../components/ui/SectionTitle";

const processSteps = [
  {
    title: "Submit Application",
    description: "Complete the online admission form with personal and academic details.",
  },
  {
    title: "Document Verification",
    description: "Upload required documents for profile and eligibility validation.",
  },
  {
    title: "Counseling & Interaction",
    description: "Attend counseling session to finalize course preferences and options.",
  },
  {
    title: "Offer & Enrollment",
    description: "Confirm admission by fee payment and complete onboarding formalities.",
  },
];

function Admissions() {
  const prospectusUrl = import.meta.env.VITE_PROSPECTUS_URL || "/prospectus.pdf";

  return (
    <section className="section-pad">
      <Container>
        <SectionTitle
          eyebrow="Admissions"
          title="Join Our Academic Community"
          description="A simple, transparent, and student-centric admission process for all eligible applicants."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <article key={step.title} className="rounded-2xl bg-white p-6 shadow-soft">
              <p className="mb-2 text-sm font-semibold text-saffron">Step {index + 1}</p>
              <h3 className="text-lg font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-navy p-6 text-white shadow-soft md:flex md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-white">Admissions 2026</h3>
            <p className="mt-2 text-sm text-slate-200">
              Download the prospectus and apply online to secure your seat.
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 md:mt-0">
            <a
              href={prospectusUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-navy"
            >
              <FiDownload />
              Download Prospectus
            </a>
            <PrimaryButton as={NavLink} to="/contact" className="gap-2">
              Apply Now
              <FiArrowRight />
            </PrimaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Admissions;
