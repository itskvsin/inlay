"use client";

import { useState } from "react";

interface FormState {
  name: string;
  phone: string;
  projectType: string;
  location: string;
  budget: string;
}

const projectTypes = [
  "Living Room",
  "Bedroom",
  "Kitchen",
  "Full Home",
  "Office / Commercial",
  "Other",
];

const budgetRanges = [
  "Under ₹25,000",
  "₹25,000 – ₹60,000",
  "₹60,000 – ₹1,20,000",
  "Above ₹1,20,000",
];

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    projectType: "",
    location: "",
    budget: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi Inlay! My name is ${form.name}. I'm looking for ${form.projectType} design in ${form.location}. Budget: ${form.budget}. My number is ${form.phone}.`
    );
    window.open(`https://wa.me/917016422677?text=${msg}`, "_blank");
    setSubmitted(true);
  }

  const inputClass =
    "w-full bg-transparent border-0 border-b border-[rgba(255,255,255,0.1)] pb-2 text-[#F0EAD8] font-body text-[14px] font-light placeholder:text-[rgba(240,234,216,0.25)] focus:outline-none focus:border-b-gold transition-[border-color] duration-300";
  const labelClass =
    "block font-body text-[10px] font-medium uppercase tracking-[0.14em] text-[rgba(240,234,216,0.4)] mb-2";

  return (
    <div
      className="bg-dark border-t-2 border-gold p-[clamp(1.5rem,4vw,2.5rem)]"
      style={{ borderTopColor: "var(--color-gold)" }}
    >
      {submitted ? (
        <div className="flex flex-col items-center text-center py-8 gap-4">
          <span className="font-display text-[48px] font-light text-gold">
            ✓
          </span>
          <h3 className="font-display text-[clamp(22px,3vw,28px)] font-light text-[#F0EAD8]">
            Enquiry sent!
          </h3>
          <p className="font-body text-[13px] font-light text-[rgba(240,234,216,0.6)] max-w-[280px]">
            We&apos;ll be in touch within 1 hour. Check your WhatsApp.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))" }}>
            {/* Name */}
            <div className="field-wrapper">
              <label htmlFor="cf-name" className={labelClass}>
                Your Name
              </label>
              <input
                id="cf-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Riya Shah"
                className={inputClass}
                value={form.name}
                onChange={handleChange}
              />
            </div>

            {/* Phone */}
            <div className="field-wrapper">
              <label htmlFor="cf-phone" className={labelClass}>
                Phone
              </label>
              <input
                id="cf-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="+91 98765 43210"
                className={inputClass}
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            {/* Project type */}
            <div className="field-wrapper">
              <label htmlFor="cf-project" className={labelClass}>
                Project Type
              </label>
              <select
                id="cf-project"
                name="projectType"
                required
                className={`${inputClass} cursor-pointer`}
                value={form.projectType}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select…
                </option>
                {projectTypes.map((t) => (
                  <option key={t} value={t} className="bg-dark text-[#F0EAD8]">
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div className="field-wrapper">
              <label htmlFor="cf-location" className={labelClass}>
                Location in Ahmedabad
              </label>
              <input
                id="cf-location"
                name="location"
                type="text"
                placeholder="Satellite, Bopal…"
                className={inputClass}
                value={form.location}
                onChange={handleChange}
              />
            </div>

            {/* Budget — full width */}
            <div className="field-wrapper" style={{ gridColumn: "1 / -1" }}>
              <label htmlFor="cf-budget" className={labelClass}>
                Budget Range
              </label>
              <select
                id="cf-budget"
                name="budget"
                className={`${inputClass} cursor-pointer`}
                value={form.budget}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select…
                </option>
                {budgetRanges.map((b) => (
                  <option key={b} value={b} className="bg-dark text-[#F0EAD8]">
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full font-body text-[13px] font-medium uppercase tracking-[0.10em] bg-gold text-dark py-4 hover:bg-gold-dim transition-colors duration-200"
            >
              Send Enquiry via WhatsApp →
            </button>
            <p className="font-body text-[11px] text-[rgba(240,234,216,0.3)] text-center mt-3">
              We reply within 1 hour · 1-month workmanship warranty on all projects
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
