import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";
import { siteInfo } from "../data/nsicContent";

const timeline = [
  { year: "1955", event: "National Small Industries Corporation Ltd. established to support MSME growth in India." },
  { year: "2004", event: "NSIC TSC Howrah expanded technical services and training support operations." },
  { year: "2016", event: "Skill development outreach strengthened with practical industry-linked modules." },
  { year: "2025", event: "Continued focus on entrepreneurship support, quality facilities, and employability training." },
];

function About() {
  return (
    <section className="section-pad">
      <Container>
        <SectionTitle
          eyebrow="About Us"
          title="NSIC Technical Services Centre, Howrah"
          description="A centre dedicated to training, technology support, and MSME-oriented services under NSIC."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl bg-white p-6 shadow-soft">
            <h3 className="text-xl font-semibold text-navy">Who We Are</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              NSIC TSC Howrah works to strengthen micro, small, and medium enterprises by providing technical
              training, common facility support, and entrepreneurship-oriented programs. The centre focuses on
              practical capability development aligned with industry demand.
            </p>
          </article>

          <article className="rounded-2xl bg-white p-6 shadow-soft">
            <h3 className="text-xl font-semibold text-navy">Vision & Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Our vision is to support sustainable industrial growth and skill advancement. Our mission is to
              provide accessible technical services, market-oriented training, and enterprise facilitation for
              MSME ecosystems.
            </p>
          </article>
        </div>

        <article className="mt-6 rounded-2xl bg-navy p-6 text-white shadow-soft">
          <h3 className="text-xl font-semibold text-white">Centre Focus</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-200">
            "Our objective is to build industrial capability by connecting practical skills, quality awareness,
            and entrepreneurship support at the grassroots level."
          </p>
          <p className="mt-4 text-xs uppercase tracking-wider text-saffron">{siteInfo.shortTitle}</p>
        </article>

        <div className="mt-12">
          <SectionTitle
            eyebrow="Timeline"
            title="Key Milestones"
            description="Progress highlights of NSIC and the Howrah centre."
          />
          <div className="mt-8 space-y-4 border-l-2 border-slate-200 pl-6">
            {timeline.map((item) => (
              <div key={item.year} className="relative rounded-xl bg-white p-4 shadow-soft">
                <span className="absolute -left-[31px] top-5 h-3 w-3 rounded-full bg-saffron" />
                <p className="text-sm font-bold text-navy">{item.year}</p>
                <p className="mt-1 text-sm text-slate-600">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
