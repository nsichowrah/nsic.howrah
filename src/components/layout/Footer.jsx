import { NavLink } from "react-router-dom";
import Container from "./Container";
import { importantLinks, siteInfo } from "../../data/nsicContent";

const quickLinks = [
  { label: "About Us", path: "/about" },
  { label: "Training Programs", path: "/training" },
  { label: "Projects", path: "/projects" },
  { label: "Downloads", path: "/downloads" },
  { label: "Contact", path: "/contact" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-navy text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <img src={siteInfo.logoMark} alt="NSIC logo" className="h-10 w-10 rounded-md bg-white p-1" />
            <div>
              <p className="font-heading text-base font-semibold">{siteInfo.shortTitle}</p>
              <p className="text-xs text-slate-300">{siteInfo.subTitle}</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-slate-300">
            Government of India enterprise supporting MSMEs through technical training, quality enhancement,
            and entrepreneurship development.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-lg font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <NavLink to={link.path} className="transition hover:text-saffron">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-lg font-semibold text-white">Important Links</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            {importantLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-saffron"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-lg font-semibold text-white">Location</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>{siteInfo.address}</li>
            <li>{siteInfo.phone}</li>
            <li>{siteInfo.email}</li>
          </ul>
          <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
            <iframe
              title="NSIC TSC Howrah location map"
              src={siteInfo.mapEmbedUrl}
              className="h-44 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400">
        <Container>
          <p>&copy; {year} National Small Industries Corporation Ltd. - Technical Services Centre, Howrah.</p>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
