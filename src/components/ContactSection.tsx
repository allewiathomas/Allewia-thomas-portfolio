import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import SocialLinks from "./SocialLinks";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const mailtoSubject = encodeURIComponent(form.subject || "Portfolio Contact");
    const mailtoBody = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.open(
      `mailto:allewiathomas1420@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`,
      "_self"
    );

    toast({ title: "Opening email client!", description: "Your default email app will open with the message." });
    setForm({ name: "", email: "", subject: "", message: "" });
    setErrors({});
  };

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">Get In Touch</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">Let's Work Together</h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="name" className="font-body text-foreground mb-1.5 block">Name *</Label>
                <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" className={errors.name ? "border-destructive" : ""} />
                {errors.name && <p className="text-destructive text-xs mt-1 font-body">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="font-body text-foreground mb-1.5 block">Email *</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="your@email.com" className={errors.email ? "border-destructive" : ""} />
                {errors.email && <p className="text-destructive text-xs mt-1 font-body">{errors.email}</p>}
              </div>
            </div>
            <div>
              <Label htmlFor="subject" className="font-body text-foreground mb-1.5 block">Subject</Label>
              <Input id="subject" value={form.subject} onChange={(e) => update("subject", e.target.value)} placeholder="What's this about?" />
            </div>
            <div>
              <Label htmlFor="message" className="font-body text-foreground mb-1.5 block">Message *</Label>
              <Textarea id="message" value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Your message..." rows={5} className={errors.message ? "border-destructive" : ""} />
              {errors.message && <p className="text-destructive text-xs mt-1 font-body">{errors.message}</p>}
            </div>
            <Button type="submit" className="gradient-accent text-white font-body font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 flex flex-col justify-center gap-8"
          >
            <div>
              <h3 className="font-heading text-xl text-foreground mb-3">Contact Info</h3>
              <div className="space-y-3">
                <a href="mailto:allewiathomas1420@gmail.com" className="flex items-center gap-3 font-body text-muted-foreground hover:text-accent transition-colors text-sm">
                  <Mail className="w-4 h-4 text-accent" />
                  allewiathomas1420@gmail.com
                </a>
                <div className="flex items-center gap-3 font-body text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 text-accent" />
                  Open to remote opportunities
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-heading text-xl text-foreground mb-3">Follow Me</h3>
              <SocialLinks />
            </div>
            <div className="p-5 rounded-xl bg-background shadow-card">
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
