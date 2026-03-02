import { FiArrowUpRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";

const featuredCourses = [
  {
    title: "B.Tech in Computer Science",
    description: "Hands-on training in AI, cloud computing, full-stack development, and cybersecurity.",
  },
  {
    title: "MBA in Business Analytics",
    description: "Data-first management education for strategic and analytical decision-making.",
  },
  {
    title: "M.Sc. in Applied Data Science",
    description: "Industry-focused projects in machine learning, data engineering, and visualization.",
  },
];

function CoursesPreview() {
  return (
    <section className="section-pad bg-slate-100">
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionTitle
            eyebrow="Courses"
            title="Programs Designed for Industry-Relevant Outcomes"
            description="Our curriculum integrates theory, applied learning, and mentorship to prepare students for competitive careers."
          />
          <NavLink
            to="/courses"
            className="inline-flex items-center gap-2 rounded-xl border border-navy/20 px-4 py-2 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
          >
            View All Programs
            <FiArrowUpRight />
          </NavLink>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course) => (
            <article key={course.title} className="rounded-2xl bg-white p-6 shadow-soft transition hover:-translate-y-1">
              <p className="mb-2 inline-flex rounded-md bg-saffron/15 px-2.5 py-1 text-xs font-semibold text-saffron">
                Featured Program
              </p>
              <h3 className="text-xl font-semibold text-navy">{course.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{course.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default CoursesPreview;
