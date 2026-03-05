import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { PageTransition } from "../components/PageTransition";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { personalInfo } from "../data";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "MOCK";

    if (accessKey === "MOCK" || !accessKey) {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } else {
      // Chế độ gửi thật qua API của Web3Forms
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            ...formData,
          }),
        });
        const result = await response.json();
        if (result.success) {
          setIsSuccess(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
          setErrors({});
        } else {
          console.error("Submission failed", result);
          alert("Failed to send message. Please try again later.");
        }
      } catch (error) {
        console.error("Error submitting form", error);
        alert("An error occurred. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }

    // Reset success message after 3s
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-2 text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Get in Touch</h1>
          <p className="text-muted-foreground text-lg">
            Have a question or want to work together? Leave a message below or connect with me on social media.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm space-y-6">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-foreground hover:text-primary transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Phone/Zalo</p>
                  <p className="text-foreground">{personalInfo.phone}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Location</p>
                  <p className="text-foreground">{personalInfo.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden">
              {isSuccess && (
                <div className="absolute inset-0 bg-card/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-6 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-2.5 bg-background border rounded-xl focus:outline-none focus:ring-2 transition-shadow ${
                        errors.name ? "border-red-500 focus:ring-red-500/20" : "border-border focus:ring-primary/50"
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                        <AlertCircle size={12} /> {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-2.5 bg-background border rounded-xl focus:outline-none focus:ring-2 transition-shadow ${
                        errors.email ? "border-red-500 focus:ring-red-500/20" : "border-border focus:ring-primary/50"
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                        <AlertCircle size={12} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-2.5 bg-background border rounded-xl focus:outline-none focus:ring-2 transition-shadow ${
                      errors.subject ? "border-red-500 focus:ring-red-500/20" : "border-border focus:ring-primary/50"
                    }`}
                    placeholder="Job Opportunity"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                      <AlertCircle size={12} /> {errors.subject}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-2.5 bg-background border rounded-xl focus:outline-none focus:ring-2 transition-shadow resize-none ${
                      errors.message ? "border-red-500 focus:ring-red-500/20" : "border-border focus:ring-primary/50"
                    }`}
                    placeholder="Hello, I would like to discuss..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                      <AlertCircle size={12} /> {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
