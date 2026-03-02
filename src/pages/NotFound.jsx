import { NavLink } from "react-router-dom";
import Container from "../components/layout/Container";
import PrimaryButton from "../components/ui/PrimaryButton";

function NotFound() {
  return (
    <section className="section-pad">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-saffron">404</p>
        <h1 className="mt-2 text-4xl font-bold text-navy">Page Not Found</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 md:text-base">
          The page you are trying to access does not exist or has been moved.
        </p>
        <PrimaryButton as={NavLink} to="/" className="mt-6">
          Back to NSIC Home
        </PrimaryButton>
      </Container>
    </section>
  );
}

export default NotFound;
