import { useEffect, useState } from "react";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";
import { fallbackDownloads } from "../data/nsicContent";
import { getDownloads } from "../services/api";

function Downloads() {
  const [downloads, setDownloads] = useState(fallbackDownloads);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const loadDownloads = async () => {
      try {
        const response = await getDownloads();
        if (Array.isArray(response.data) && response.data.length) {
          setDownloads(response.data);
        }
      } catch (error) {
        setErrorMessage("Showing default links because backend data is currently unavailable.");
      }
    };

    loadDownloads();
  }, []);

  return (
    <section className="section-pad">
      <Container>
        <SectionTitle
          eyebrow="Downloads"
          title="Download Centre"
          description="Documents are managed from MongoDB via backend API and can point to Google Drive files."
        />

        {errorMessage ? (
          <p className="mt-6 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-700">{errorMessage}</p>
        ) : null}

        <div className="mt-8 space-y-4">
          {downloads.map((item, index) => (
            <article
              key={item._id || `${item.title}-${index}`}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft md:flex md:items-center md:justify-between md:gap-6"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-saffron">{item.category}</p>
                <h3 className="mt-1 text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description || "Open this link to access the file."}</p>
              </div>
              <a
                href={item.fileUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex shrink-0 items-center gap-2 rounded-xl bg-navy px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-strong md:mt-0"
              >
                <FiDownload />
                Open Link
                <FiExternalLink />
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Downloads;
