import { useState, FormEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const REQUEST_ACCESS_API_URL = "/api/request-access";

const RequestAccessPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    company: "",
    companyLocation: "",
    email: "",
    phone: "",
    role: "",
    mfgType: "",
    skuCount: "",
    challenge: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch(REQUEST_ACCESS_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await res.json()) as { success?: boolean; error?: string };

      if (!res.ok || !data.success) {
        setError(typeof data.error === "string" ? data.error : "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch (err: unknown) {
      console.error("Submit error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="pt-24 pb-12 min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 rounded-full bg-trooba-teal/20 flex items-center justify-center mx-auto mb-6">
              <span className="text-trooba-teal text-2xl">✓</span>
            </div>
            <h1 className="font-display font-bold text-3xl text-white mb-4">Request received.</h1>
            <p className="text-trooba-offwhite/60">We'll be in touch within 2 business days.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-12">
        <div className="max-w-2xl mx-auto px-6">
          <ScrollReveal>
            <span className="section-label block">Request Access</span>
            <h1 className="font-display font-bold text-4xl lg:text-5xl text-white mb-4 leading-tight">
              We're selective. Intentionally.
            </h1>
            <p className="text-trooba-offwhite/60 text-lg mb-12 leading-relaxed">
              We run a structured pilot programme with manufacturers who have complex operations and a genuine appetite to understand their system. If that's you ? this is the right conversation.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mb-12">
              <h2 className="font-display font-bold text-xl text-white mb-6">What happens next</h2>
              <div className="space-y-4">
                {[
                  "We review your submission within 2 business days",
                  "If there's a fit: 60-minute call about your operation",
                  "We walk through a Trooba Flow analysis using your factory context",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="font-mono text-sm text-trooba-teal mt-0.5">{i + 1}.</span>
                    <p className="text-trooba-offwhite/70">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-mono text-[10px] tracking-[0.18em] uppercase text-trooba-mid mb-2">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border border-trooba-offwhite/[0.12] rounded-md px-4 py-3 text-trooba-offwhite placeholder:text-trooba-mid/50 focus:outline-none focus:border-trooba-teal transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] tracking-[0.18em] uppercase text-trooba-mid mb-2">Company</label>
                <input
                  required
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full bg-transparent border border-trooba-offwhite/[0.12] rounded-md px-4 py-3 text-trooba-offwhite placeholder:text-trooba-mid/50 focus:outline-none focus:border-trooba-teal transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] tracking-[0.18em] uppercase text-trooba-mid mb-2">Company location</label>
                <input
                  required
                  autoComplete="address-level2"
                  placeholder="City, region, or country"
                  value={form.companyLocation}
                  onChange={(e) => setForm({ ...form, companyLocation: e.target.value })}
                  className="w-full bg-transparent border border-trooba-offwhite/[0.12] rounded-md px-4 py-3 text-trooba-offwhite placeholder:text-trooba-mid/50 focus:outline-none focus:border-trooba-teal transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] tracking-[0.18em] uppercase text-trooba-mid mb-2">Contact email</label>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border border-trooba-offwhite/[0.12] rounded-md px-4 py-3 text-trooba-offwhite placeholder:text-trooba-mid/50 focus:outline-none focus:border-trooba-teal transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] tracking-[0.18em] uppercase text-trooba-mid mb-2">Contact phone</label>
                <input
                  type="tel"
                  required
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-transparent border border-trooba-offwhite/[0.12] rounded-md px-4 py-3 text-trooba-offwhite placeholder:text-trooba-mid/50 focus:outline-none focus:border-trooba-teal transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] tracking-[0.18em] uppercase text-trooba-mid mb-2">Role</label>
                <input
                  required
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full bg-transparent border border-trooba-offwhite/[0.12] rounded-md px-4 py-3 text-trooba-offwhite placeholder:text-trooba-mid/50 focus:outline-none focus:border-trooba-teal transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] tracking-[0.18em] uppercase text-trooba-mid mb-2">Manufacturing Type</label>
                <select
                  required
                  value={form.mfgType}
                  onChange={(e) => setForm({ ...form, mfgType: e.target.value })}
                  className="w-full bg-transparent border border-trooba-offwhite/[0.12] rounded-md px-4 py-3 text-trooba-offwhite focus:outline-none focus:border-trooba-teal transition-colors"
                >
                  <option value="" className="bg-trooba-navy">Select...</option>
                  <option value="discrete" className="bg-trooba-navy">Discrete</option>
                  <option value="process" className="bg-trooba-navy">Process</option>
                  <option value="mixed" className="bg-trooba-navy">Mixed</option>
                  <option value="other" className="bg-trooba-navy">Other</option>
                </select>
              </div>
              <div>
                <label className="block font-mono text-[10px] tracking-[0.18em] uppercase text-trooba-mid mb-2">Active SKUs</label>
                <select
                  required
                  value={form.skuCount}
                  onChange={(e) => setForm({ ...form, skuCount: e.target.value })}
                  className="w-full bg-transparent border border-trooba-offwhite/[0.12] rounded-md px-4 py-3 text-trooba-offwhite focus:outline-none focus:border-trooba-teal transition-colors"
                >
                  <option value="" className="bg-trooba-navy">Select...</option>
                  <option value="<50" className="bg-trooba-navy">&lt;50</option>
                  <option value="50-200" className="bg-trooba-navy">50-200</option>
                  <option value="200-500" className="bg-trooba-navy">200-500</option>
                  <option value="500+" className="bg-trooba-navy">500+</option>
                </select>
              </div>
              <div>
                <label className="block font-mono text-[10px] tracking-[0.18em] uppercase text-trooba-mid mb-2">Your biggest production challenge</label>
                <textarea
                  required
                  rows={3}
                  value={form.challenge}
                  onChange={(e) => setForm({ ...form, challenge: e.target.value })}
                  className="w-full bg-transparent border border-trooba-offwhite/[0.12] rounded-md px-4 py-3 text-trooba-offwhite placeholder:text-trooba-mid/50 focus:outline-none focus:border-trooba-teal transition-colors resize-none"
                />
              </div>
              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="w-full px-8 py-4 rounded-md bg-trooba-teal text-trooba-navy font-display font-semibold text-lg hover:bg-trooba-teal-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ boxShadow: "0 0 24px rgba(0,196,180,0.18)" }}
              >
                {submitting ? "Submitting..." : "Request Access "}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RequestAccessPage;
