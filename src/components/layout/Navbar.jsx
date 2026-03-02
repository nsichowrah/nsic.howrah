import classNames from "classnames";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import PrimaryButton from "../ui/PrimaryButton";
import Container from "./Container";
import { siteInfo } from "../../data/nsicContent";

const navigationLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Training", path: "/training" },
  { label: "Projects", path: "/projects" },
  { label: "Downloads", path: "/downloads" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={siteInfo.logoMark} alt="NSIC logo" className="h-10 w-10 rounded-md object-contain" />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold leading-tight text-navy">{siteInfo.shortTitle}</p>
            <p className="text-xs text-slate-500">National Small Industries Corporation Ltd.</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex">
          {navigationLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                classNames(
                  "rounded-lg px-3 py-2 text-sm font-medium transition",
                  isActive ? "bg-navy text-white" : "text-slate-600 hover:bg-slate-100 hover:text-navy"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <PrimaryButton as={NavLink} to="/contact" className="px-4 py-2 text-sm">
            Enquiry
          </PrimaryButton>
        </div>

        <button
          type="button"
          className="rounded-lg border border-slate-200 p-2 text-navy md:hidden"
          onClick={() => setIsOpen((previous) => !previous)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </Container>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <Container className="space-y-1 py-4">
            {navigationLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  classNames(
                    "block rounded-lg px-3 py-2 text-sm font-medium transition",
                    isActive ? "bg-navy text-white" : "text-slate-600 hover:bg-slate-100 hover:text-navy"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <PrimaryButton
              as={NavLink}
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 w-full"
            >
              Submit Enquiry
            </PrimaryButton>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
