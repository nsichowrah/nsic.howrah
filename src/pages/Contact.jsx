import { useState } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Container from "../components/layout/Container";
import PrimaryButton from "../components/ui/PrimaryButton";
import SectionTitle from "../components/ui/SectionTitle";
import { siteInfo } from "../data/nsicContent";
import { postContactMessage } from "../services/api";

const defaultForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(defaultForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      await postContactMessage(formData);
      setStatus({ type: "success", message: "Your message has been sent successfully." });
      setFormData(defaultForm);
    } catch (error) {
      const apiMessage = error?.response?.data?.message;
      setStatus({
        type: "error",
        message: apiMessage || "Unable to submit right now. Please try again shortly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-pad">
      <Container>
        <SectionTitle
          eyebrow="Contact"
          title="Connect with NSIC TSC Howrah"
          description="For training, projects, and support services, send us your enquiry."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <h3 className="text-xl font-semibold text-navy">Send Enquiry</h3>
            <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-navy"
                  placeholder="Enter your name"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-navy"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-navy"
                    placeholder="+91 98XXXXXX00"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-navy"
                  placeholder="Type your query..."
                />
              </div>

              {status.message ? (
                <p
                  className={`rounded-xl px-3 py-2 text-sm ${
                    status.type === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {status.message}
                </p>
              ) : null}

              <PrimaryButton type="submit" disabled={isSubmitting} className="w-full disabled:opacity-70">
                {isSubmitting ? "Submitting..." : "Submit Enquiry"}
              </PrimaryButton>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-soft">
              <h3 className="text-xl font-semibold text-navy">Contact Information</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <FiMapPin className="mt-0.5 text-saffron" />
                  {siteInfo.address}
                </li>
                <li className="flex items-start gap-3">
                  <FiPhone className="mt-0.5 text-saffron" />
                  {siteInfo.phone}
                </li>
                <li className="flex items-start gap-3">
                  <FiMail className="mt-0.5 text-saffron" />
                  {siteInfo.email}
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white shadow-soft">
              <iframe
                title="NSIC Howrah location map"
                src={siteInfo.mapEmbedUrl}
                className="h-[320px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
