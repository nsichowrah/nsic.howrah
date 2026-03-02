import { useMemo, useState } from "react";
import { FiClock, FiLayers } from "react-icons/fi";
import Container from "../components/layout/Container";
import Modal from "../components/ui/Modal";
import PrimaryButton from "../components/ui/PrimaryButton";
import SectionTitle from "../components/ui/SectionTitle";
import { trainingPrograms } from "../data/nsicContent";

function Courses() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filterOptions = useMemo(() => {
    const categories = new Set(trainingPrograms.map((course) => course.category));
    return ["All", ...categories];
  }, []);

  const filteredCourses = useMemo(() => {
    if (activeFilter === "All") {
      return trainingPrograms;
    }

    return trainingPrograms.filter((course) => course.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="section-pad">
      <Container>
        <SectionTitle
          eyebrow="Training"
          title="NSIC Skill Development Programs"
          description="Technical and entrepreneurship-oriented programs designed for employability and MSME growth."
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {filterOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setActiveFilter(option)}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                activeFilter === option
                  ? "bg-navy text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredCourses.map((course) => (
            <article key={course.id} className="rounded-2xl bg-white p-6 shadow-soft">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-md bg-saffron/15 px-2.5 py-1 text-xs font-semibold text-saffron">
                  {course.category}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                  <FiClock size={13} />
                  {course.duration}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-navy">{course.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{course.description}</p>
              <button
                type="button"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy transition hover:text-saffron"
                onClick={() => setSelectedCourse(course)}
              >
                <FiLayers size={15} />
                Course Details
              </button>
            </article>
          ))}
        </div>
      </Container>

      <Modal
        isOpen={Boolean(selectedCourse)}
        onClose={() => setSelectedCourse(null)}
        title={selectedCourse?.title}
      >
        {selectedCourse ? (
          <div>
            <p className="mb-2 text-sm font-semibold text-saffron">{selectedCourse.category}</p>
            <p className="text-sm leading-relaxed text-slate-600">{selectedCourse.description}</p>
            <div className="mt-5 rounded-xl bg-slate-100 p-4">
              <p className="text-sm text-slate-600">
                Duration: <span className="font-semibold text-navy">{selectedCourse.duration}</span>
              </p>
            </div>
            <PrimaryButton className="mt-5" onClick={() => setSelectedCourse(null)}>
              Close
            </PrimaryButton>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}

export default Courses;
