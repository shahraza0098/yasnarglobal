"use client";

import React, { useState } from "react";
import { COMPANY_DATA } from "@/data/company";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [preparedForEmail, setPreparedForEmail] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.phone.trim() && !/^[+0-9\s-]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid telephone number";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call check
    try {
      // In accordance with guidelines: transparently inform that direct web dispatch is in setup,
      // and provide immediate pre-filled mailto dispatch to the official company email.
      await new Promise((resolve) => setTimeout(resolve, 600));
      setPreparedForEmail(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenMailClient = () => {
    const mailtoSubject = encodeURIComponent(`[${formData.subject}] from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${COMPANY_DATA.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-md">
      <h3 className="text-2xl font-bold text-[#0b1528] tracking-tight mb-2">
        Send Us a Message
      </h3>
      <p className="text-sm text-slate-500 mb-6">
        Fill in the details below to prepare and send your communication to{" "}
        <span className="font-semibold text-slate-700">{COMPANY_DATA.email}</span>.
      </p>

      {preparedForEmail ? (
        <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4 animate-in fade-in duration-200">
          <div className="flex items-start gap-3">
            <div className="size-8 rounded-full bg-[#165dfc]/10 text-[#165dfc] flex items-center justify-center shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0b1528]">
                Validation Complete
              </h4>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>.
                Your communication has been formatted. You can now dispatch it directly to our inbox via your email client, or contact us at <a href={`mailto:${COMPANY_DATA.email}`} className="text-[#165dfc] font-medium underline">{COMPANY_DATA.email}</a>.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleOpenMailClient}
              className="px-5 py-2.5 bg-[#165dfc] hover:bg-[#0f4bd8] text-white text-sm font-semibold rounded-md transition-colors inline-flex items-center gap-2 shadow-xs"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Open in Mail Client
            </button>
            <button
              type="button"
              onClick={() => {
                setPreparedForEmail(false);
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  subject: "General Inquiry",
                  message: "",
                });
              }}
              className="px-4 py-2.5 bg-white border border-slate-300 text-slate-700 text-sm font-medium rounded-md hover:bg-slate-50 transition-colors"
            >
              Reset Form
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Full Name <span className="text-[#165dfc]">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              className={`w-full px-4 py-2.5 rounded-lg border text-sm text-[#0b1528] placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.name
                  ? "border-red-400 focus:ring-red-300 bg-red-50/20"
                  : "border-slate-300 focus:border-[#165dfc] focus:ring-[#165dfc]/20"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600 font-medium">{errors.name}</p>
            )}
          </div>

          {/* Email & Phone Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Email Address <span className="text-[#165dfc]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@domain.com"
                className={`w-full px-4 py-2.5 rounded-lg border text-sm text-[#0b1528] placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.email
                    ? "border-red-400 focus:ring-red-300 bg-red-50/20"
                    : "border-slate-300 focus:border-[#165dfc] focus:ring-[#165dfc]/20"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600 font-medium">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={`w-full px-4 py-2.5 rounded-lg border text-sm text-[#0b1528] placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.phone
                    ? "border-red-400 focus:ring-red-300 bg-red-50/20"
                    : "border-slate-300 focus:border-[#165dfc] focus:ring-[#165dfc]/20"
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-600 font-medium">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Inquiry Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-[#0b1528] bg-white focus:outline-none focus:border-[#165dfc] focus:ring-2 focus:ring-[#165dfc]/20 transition-all"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Gyan Master Application">Gyan Master Application</option>
              <option value="Digital Products">Digital Products</option>
              <option value="Other">Other Communication</option>
            </select>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Message <span className="text-[#165dfc]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we assist you?"
              className={`w-full px-4 py-2.5 rounded-lg border text-sm text-[#0b1528] placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.message
                  ? "border-red-400 focus:ring-red-300 bg-red-50/20"
                  : "border-slate-300 focus:border-[#165dfc] focus:ring-[#165dfc]/20"
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-600 font-medium">{errors.message}</p>
            )}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-7 py-3 text-sm font-semibold text-white bg-[#165dfc] hover:bg-[#0f4bd8] active:bg-[#0b3eb8] disabled:opacity-60 rounded-md transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Processing...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
