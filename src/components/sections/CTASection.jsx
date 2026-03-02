import { FiArrowRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Container from "../layout/Container";
import PrimaryButton from "../ui/PrimaryButton";

function CTASection() {
  return (
    <section className="section-pad">
      <Container>
        <div className="rounded-3xl bg-navy px-6 py-12 text-center text-white shadow-soft md:px-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-saffron">
            Begin Your Journey
          </p>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-white md:text-4xl">
            Admissions for Academic Session 2026 Are Open
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-200 md:text-base">
            Take the next step toward a future-ready career with our professional programs and holistic
            campus experience.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <PrimaryButton as={NavLink} to="/admissions" className="gap-2">
              Apply Now
              <FiArrowRight />
            </PrimaryButton>
            <PrimaryButton
              as={NavLink}
              to="/contact"
              variant="outline"
              className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-navy"
            >
              Talk to Admissions Team
            </PrimaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CTASection;
