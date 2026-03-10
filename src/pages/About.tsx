import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import craftImg from "@/assets/about-craftsmanship.jpg";

const About = () => (
  <Layout>
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gold-gradient mb-4">Our Story</h1>
          <div className="divider-gold max-w-xs mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden shadow-gold">
            <img src={craftImg} alt="Master craftsman creating Patiala jewelry" className="w-full h-full object-cover" />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              Founded with a passion for perfection, Khurram Patiala Gold Jewellers specializes in creating authentic Patiala jewelry. Each piece is meticulously handcrafted using high-quality materials, ensuring you receive not just jewelry, but a legacy of elegance.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed mb-8">
              We preserve traditional craftsmanship while adding a touch of modern luxury. Our artisans carry forward centuries-old techniques, ensuring every piece reflects the rich heritage of Patiala jewelry.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gold-gradient text-primary-foreground px-8 py-3 text-sm tracking-widest uppercase hover:shadow-gold transition-all"
            >
              Visit Us Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
