import { useEffect, useMemo, useState } from "react";
import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";
import { carouselSlides, fallbackProjects } from "../data/nsicContent";
import { getProjects } from "../services/api";

function Projects() {
  const [projects, setProjects] = useState(fallbackProjects);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isApiLoaded, setIsApiLoaded] = useState(false);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await getProjects();
        if (Array.isArray(response.data) && response.data.length) {
          setProjects(response.data);
        }
      } catch (error) {
        // fallback data remains
      } finally {
        setIsApiLoaded(true);
      }
    };

    loadProjects();
  }, []);

  const categories = useMemo(() => {
    const values = new Set(projects.map((project) => project.category));
    return ["All", ...values];
  }, [projects]);

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="section-pad">
      <Container>
        <SectionTitle
          eyebrow="Projects"
          title="Projects Organized and Implemented at NSIC"
          description="Field activities, training initiatives, and support programs executed by NSIC TSC Howrah."
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-navy text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <article key={project._id || `${project.title}-${index}`} className="overflow-hidden rounded-2xl bg-white shadow-soft">
              <img
                src={project.imageUrl || carouselSlides[index % carouselSlides.length].image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <div className="mb-2 flex items-center justify-between text-xs">
                  <span className="rounded-md bg-saffron/15 px-2 py-1 font-semibold text-saffron">
                    {project.category}
                  </span>
                  <span className="text-slate-500">{project.year || "Current"}</span>
                </div>
                <h3 className="text-lg font-semibold text-navy">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{project.summary}</p>
                <p className="mt-4 text-xs text-slate-500">
                  {project.location || "NSIC Technical Services Centre, Howrah"} | {project.status || "Active"}
                </p>
              </div>
            </article>
          ))}
        </div>

        {isApiLoaded && !filteredProjects.length ? (
          <p className="mt-10 rounded-xl bg-white p-4 text-sm text-slate-600 shadow-soft">
            No projects found for the selected filter.
          </p>
        ) : null}
      </Container>
    </section>
  );
}

export default Projects;
