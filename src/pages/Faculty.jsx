import { useState } from "react";
import Container from "../components/layout/Container";
import Modal from "../components/ui/Modal";
import SectionTitle from "../components/ui/SectionTitle";

const facultyMembers = [
  {
    id: 1,
    name: "Dr. Meera Kulshrestha",
    role: "Professor, Computer Science",
    specialization: "Artificial Intelligence, NLP",
    profile:
      "Ph.D. in AI with 15+ years of teaching and research experience. Published extensively in applied machine learning and language technologies.",
  },
  {
    id: 2,
    name: "Prof. Rajeev Menon",
    role: "Associate Professor, Management",
    specialization: "Business Analytics, Strategy",
    profile:
      "Industry-academia professional focused on analytical decision systems and leadership development for emerging managers.",
  },
  {
    id: 3,
    name: "Dr. Nidhi Verma",
    role: "Professor, Biotechnology",
    specialization: "Molecular Biology, Bioinformatics",
    profile:
      "Leads interdisciplinary biosciences research and mentors student innovation projects in healthcare and sustainability domains.",
  },
  {
    id: 4,
    name: "Prof. Arvind Nair",
    role: "Assistant Professor, Electronics",
    specialization: "Embedded Systems, IoT",
    profile:
      "Passionate educator specializing in practical hardware design and IoT system implementation with industry collaboration.",
  },
];

function Faculty() {
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  return (
    <section className="section-pad">
      <Container>
        <SectionTitle
          eyebrow="Faculty"
          title="Meet Our Academic Leaders"
          description="Experienced educators and researchers committed to student success and innovation."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {facultyMembers.map((member) => (
            <article key={member.id} className="rounded-2xl bg-white p-5 shadow-soft">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-xl font-semibold text-white">
                {member.name
                  .split(" ")
                  .slice(0, 2)
                  .map((part) => part[0])
                  .join("")}
              </div>
              <h3 className="text-base font-semibold text-navy">{member.name}</h3>
              <p className="mt-1 text-xs text-slate-500">{member.role}</p>
              <p className="mt-3 text-sm text-slate-600">{member.specialization}</p>
              <button
                type="button"
                onClick={() => setSelectedFaculty(member)}
                className="mt-4 text-sm font-semibold text-navy transition hover:text-saffron"
              >
                View Profile
              </button>
            </article>
          ))}
        </div>
      </Container>

      <Modal
        isOpen={Boolean(selectedFaculty)}
        onClose={() => setSelectedFaculty(null)}
        title={selectedFaculty?.name}
      >
        {selectedFaculty ? (
          <div>
            <p className="text-sm font-medium text-saffron">{selectedFaculty.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{selectedFaculty.profile}</p>
            <p className="mt-4 rounded-xl bg-slate-100 p-3 text-sm text-slate-600">
              Specialization: <span className="font-semibold text-navy">{selectedFaculty.specialization}</span>
            </p>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}

export default Faculty;
