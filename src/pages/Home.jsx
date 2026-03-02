import { useEffect, useState } from "react";
import { FiArrowRight, FiDownload, FiMapPin } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Container from "../components/layout/Container";
import ImageCarousel from "../components/sections/ImageCarousel";
import PrimaryButton from "../components/ui/PrimaryButton";
import SectionTitle from "../components/ui/SectionTitle";
import { carouselSlides, fallbackDownloads, fallbackProjects, siteInfo } from "../data/nsicContent";
import { getDownloads, getProjects } from "../services/api";

function Home() {
  const [projects, setProjects] = useState(fallbackProjects);
  const [downloads, setDownloads] = useState(fallbackDownloads);

  useEffect(() => {
    const load = async () => {
      try {
        const projectResponse = await getProjects({ limit: 3 });
        if (Array.isArray(projectResponse.data) && projectResponse.data.length) {
          setProjects(projectResponse.data);
        }
      } catch (error) {
        // fallback content remains available on API failure
      }

      try {
        const downloadResponse = await getDownloads();
        if (Array.isArray(downloadResponse.data) && downloadResponse.data.length) {
          setDownloads(downloadResponse.data.slice(0, 3));
        }
      } catch (error) {
        // fallback content remains available on API failure
      }
    };

    load();
  }, []);

  return (
    <div className="pb-8">
      <section className="relative overflow-hidden bg-gradient-to-r from-navy via-navy-strong to-teal-700 pt-20 text-white">
        <Container className="relative z-10 grid items-center gap-8 py-12 md:grid-cols-[1.3fr_0.7fr] md:py-16">
          <div>
            <p className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-100">
              Government of India Enterprise
            </p>
            <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">{siteInfo.title}</h1>
            <p className="mt-4 max-w-3xl text-sm text-slate-200 md:text-base">
              A dedicated centre for technical training, quality support, and entrepreneurship development
              to strengthen micro, small, and medium enterprises.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <PrimaryButton as={NavLink} to="/training" className="gap-2 bg-white text-navy hover:bg-slate-100">
                Explore Training
                <FiArrowRight />
              </PrimaryButton>
              <PrimaryButton
                as={NavLink}
                to="/projects"
                variant="outline"
                className="border-white/40 bg-white/10 text-white hover:bg-white hover:text-navy"
              >
                View Projects
              </PrimaryButton>
            </div>
            <p className="mt-5 inline-flex items-center gap-2 text-sm text-slate-200">
              <FiMapPin />
              {siteInfo.address}
            </p>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
            <img src={siteInfo.logoMain} alt="NSIC" className="mx-auto max-h-52 w-full rounded-xl object-contain" />
          </div>
        </Container>
      </section>

      <section className="section-pad pb-8">
        <Container>
          <ImageCarousel slides={carouselSlides} />
        </Container>
      </section>

      <section className="section-pad pt-8">
        <Container>
          <SectionTitle
            eyebrow="Core Services"
            title="What We Deliver at NSIC TSC Howrah"
            description="Integrated support through practical training, enterprise guidance, and technical facilities."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Skill Development",
                text: "Industry-relevant courses for students, job seekers, and existing workforce.",
              },
              {
                title: "MSME Support",
                text: "Guidance for small industries in process improvement, quality, and compliance orientation.",
              },
              {
                title: "Entrepreneurship Promotion",
                text: "Awareness and mentoring programs to help new entrepreneurs start and scale operations.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-slate-100">
        <Container>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <SectionTitle
              eyebrow="Projects"
              title="Recent Projects and Activities"
              description="Programs organized and executed at NSIC TSC Howrah."
            />
            <NavLink
              to="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-navy/20 px-4 py-2 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
            >
              All Projects
              <FiArrowRight />
            </NavLink>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <article key={project._id} className="overflow-hidden rounded-2xl bg-white shadow-soft">
                <img
                  src={project.imageUrl || carouselSlides[0].image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="h-44 w-full object-cover"
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
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <SectionTitle
              eyebrow="Downloads"
              title="Useful Documents"
              description="Forms, circulars, and training documents available through shared links."
            />
            <NavLink
              to="/downloads"
              className="inline-flex items-center gap-2 rounded-xl border border-navy/20 px-4 py-2 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
            >
              Full Downloads
              <FiArrowRight />
            </NavLink>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {downloads.slice(0, 3).map((item) => (
              <article key={item._id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-wider text-saffron">{item.category}</p>
                <h3 className="mt-2 text-base font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description || "Open the link to access file."}</p>
                <a
                  href={item.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy transition hover:text-saffron"
                >
                  <FiDownload />
                  Open File
                </a>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Home;
