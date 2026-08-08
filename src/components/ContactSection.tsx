import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { toast } from "sonner";
import { z } from "zod";
import { parsePhoneNumberWithError, isValidPhoneNumber } from "libphonenumber-js";
import CountryCodePicker, { detectDefaultCountry, type Country } from "./CountryCodePicker";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .max(255, "Email too long")
    .email("Invalid email format")
    .refine(
      (email) => {
        // Check for disposable/temporary email domains
        const disposableDomains = [
          "tempmail.com", "throwaway.email", "guerrillamail.com", "mailinator.com",
          "yopmail.com", "10minutemail.com", "trashmail.com", "fakeinbox.com",
          "sharklasers.com", "guerrillamailblock.com", "grr.la", "dispostable.com",
          "maildrop.cc", "temp-mail.org", "tempail.com", "mohmal.com",
        ];
        const domain = email.split("@")[1]?.toLowerCase();
        return !disposableDomains.includes(domain);
      },
      { message: "Disposable email addresses are not allowed" }
    )
    .refine(
      (email) => {
        // Check for valid TLD and domain structure
        const domain = email.split("@")[1]?.toLowerCase();
        if (!domain) return false;
        const parts = domain.split(".");
        const tld = parts[parts.length - 1];
        return parts.length >= 2 && tld.length >= 2 && /^[a-z]+$/.test(tld);
      },
      { message: "Email domain appears invalid" }
    ),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message too long"),
  fullPhone: z
    .string()
    .optional(),
});

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [country, setCountry] = useState<Country>(detectDefaultCountry);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const fullPhone = `${country.dial}${form.phone}`;
    const result = contactSchema.safeParse({ ...form, fullPhone });
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      const firstError = result.error.errors[0]?.message;
      if (firstError) toast.error(firstError);
      return;
    }

    // Validate full phone number
    try {
      if (!isValidPhoneNumber(fullPhone)) {
        setErrors((prev) => ({ ...prev, phone: "Invalid phone number for selected country" }));
        toast.error("Invalid phone number for selected country");
        return;
      }
    } catch {
      setErrors((prev) => ({ ...prev, phone: "Invalid phone number" }));
      toast.error("Invalid phone number");
      return;
    }

    let formattedPhone = fullPhone;
    try {
      const parsed = parsePhoneNumberWithError(fullPhone);
      formattedPhone = parsed.formatInternational();
    } catch {}

    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "7640ad5e-0058-436a-9a16-1d2a92fae414",
          subject: "New Portfolio Contact Submission",
          name: result.data.name,
          email: result.data.email,
          phone: formattedPhone,
          message: result.data.message,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setForm({ name: "", email: "", phone: "", message: "" });
        setErrors({});
      } else {
        toast.error(data.message || "Something went wrong!");
      }
    } catch {
      toast.error("Something went wrong! Please try again later.");
    } finally {
      setSending(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg bg-background/50 border ${
      errors[field] ? "border-destructive ring-2 ring-destructive/20" : "border-border"
    } text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all`;

  return (
    <section id="contact" className="py-24 px-6">
      <RevealOnScroll>
        <h2 className="text-gradient text-3xl md:text-4xl font-bold font-display text-center mb-12">
          Get In Touch
        </h2>
      </RevealOnScroll>
      <div className="container grid md:grid-cols-5 gap-8 max-w-4xl">
        <RevealOnScroll className="md:col-span-2">
          <div className="glass-card p-8 h-full">
            <h3 className="text-foreground text-xl font-display font-semibold mb-4">
              Contact Information
            </h3>
            <p className="text-muted-foreground text-sm mb-8">
              Feel free to reach out for internship opportunities or collaborations.
            </p>
            <div className="flex items-center gap-3 text-foreground mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm">bvssssrinivas05@gmail.com</span>
            </div>
            <div className="flex gap-3 mt-8">
              <a
                href="https://www.linkedin.com/in/bvssssrinivas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1 glow-primary"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/bvsss-srinivas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1 glow-primary"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15} className="md:col-span-3">
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                maxLength={100}
                value={form.name}
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                  if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                }}
                className={inputClass("name")}
                required
              />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                maxLength={255}
                value={form.email}
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                  if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                }}
                className={inputClass("email")}
                required
              />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <div className="flex">
                <CountryCodePicker
                  value={country}
                  onChange={setCountry}
                  hasError={!!errors.phone}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  maxLength={15}
                  value={form.phone}
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^0-9]/g, "");
                    setForm({ ...form, phone: val });
                    if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
                  }}
                  className={`${inputClass("phone")} rounded-l-none border-l-0`}
                  required
                />
              </div>
              {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                maxLength={1000}
                value={form.message}
                onChange={(e) => {
                  setForm({ ...form, message: e.target.value });
                  if (errors.message) setErrors((prev) => ({ ...prev, message: "" }));
                }}
                className={`${inputClass("message")} resize-none`}
                required
              />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full py-3 rounded-lg font-medium bg-gradient-primary text-primary-foreground glow-primary transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Send size={16} />
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default ContactSection;
