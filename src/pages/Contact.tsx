import { useState } from "react";
import Layout from "@/components/Layout";
import { MapPin, Phone, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gold-gradient mb-4">Get in Touch</h1>
            <div className="divider-gold max-w-xs mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Info */}
            <div className="space-y-8 animate-fade-in">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1 shrink-0" size={20} />
                <div>
                  <h3 className="font-heading text-foreground text-lg mb-1">Address</h3>
                  <p className="text-muted-foreground">Raja Bazaar</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-primary mt-1 shrink-0" size={20} />
                <div>
                  <h3 className="font-heading text-foreground text-lg mb-1">Phone</h3>
                  <p className="text-muted-foreground">(051) 111-1111</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-primary mt-1 shrink-0" size={20} />
                <div>
                  <h3 className="font-heading text-foreground text-lg mb-1">Opening Hours</h3>
                  <p className="text-muted-foreground">10:00 AM – 7:00 PM</p>
                  <p className="text-muted-foreground text-sm">Monday – Saturday</p>
                </div>
              </div>

              {/* Map */}
              <div className="border border-border overflow-hidden mt-4">
                <iframe
                  title="Store Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.3!2d73.05!3d33.60!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM2JzAwLjAiTiA3M8KwMDMnMDAuMCJF!5e0!3m2!1sen!2s!4v1"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div>
                <label className="block text-sm text-muted-foreground mb-2 tracking-wider uppercase">Name</label>
                <input
                  type="text"
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2 tracking-wider uppercase">Email</label>
                <input
                  type="email"
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2 tracking-wider uppercase">Message</label>
                <textarea
                  maxLength={1000}
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Your Message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold-gradient text-primary-foreground px-8 py-3 text-sm tracking-widest uppercase hover:shadow-gold transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
