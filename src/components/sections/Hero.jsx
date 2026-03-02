import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Container from "../layout/Container";
import PrimaryButton from "../ui/PrimaryButton";

function Hero() {
  // ReactBits-inspired hero pattern with ambient blob motion and elevated stats panel.
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-100 pt-20">
      <motion.div
        className="absolute -left-16 top-12 h-52 w-52 rounded-full bg-saffron/30 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.45, 0.65, 0.45] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-20 bottom-8 h-64 w-64 rounded-full bg-navy/20 blur-3xl"
        animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10 grid items-center gap-10 pb-20 md:pb-24 lg:grid-cols-2">
        <div>
          <motion.p
            className="mb-4 inline-flex rounded-full border border-saffron/20 bg-saffron/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-saffron"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            NAAC Accredited Institution
          </motion.p>

          <motion.h1
            className="text-4xl font-bold leading-tight text-navy sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            Indian Institute of Professional Studies
          </motion.h1>

          <motion.p
            className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            Empowering Minds. Building Futures.
          </motion.p>

          <motion.p
            className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
          >
            Delivering outcome-driven learning with strong industry collaboration, world-class
            faculty, and student-first support systems.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4 }}
          >
            <PrimaryButton as={NavLink} to="/admissions" className="gap-2">
              Apply Now
              <FiArrowRight />
            </PrimaryButton>
            <PrimaryButton as={NavLink} to="/courses" variant="outline">
              Explore Courses
            </PrimaryButton>
          </motion.div>
        </div>

        <motion.div
          className="relative rounded-3xl border border-white/70 bg-white/90 p-6 shadow-soft backdrop-blur"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Placement Assistance", value: "95%" },
              { label: "Programs Offered", value: "40+" },
              { label: "Industry Partnerships", value: "120+" },
              { label: "Global Alumni", value: "15K+" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-slate-50 p-4">
                <p className="text-2xl font-bold text-navy">{item.value}</p>
                <p className="mt-1 text-sm text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl bg-navy p-4 text-white">
            <p className="text-sm font-medium">Admissions 2026 now open</p>
            <p className="mt-1 text-xs text-slate-200">
              Scholarships available for meritorious and need-based applicants.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;
