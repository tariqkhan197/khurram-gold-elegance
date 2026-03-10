import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-jewelry.jpg";
import kundanImg from "@/assets/kundan-necklace.jpg";
import banglesImg from "@/assets/patiala-bangles.jpg";
import earringsImg from "@/assets/gold-earrings.jpg";
import ringImg from "@/assets/designer-ring.jpg";

const featured = [
  { img: kundanImg, title: "Gold Kundan Necklace", desc: "Intricate designs celebrating traditional art" },
  { img: banglesImg, title: "Elegant Patiala Bangles", desc: "Luxurious bangles for every occasion" },
  { img: earringsImg, title: "Gold Earrings", desc: "Handcrafted pieces for timeless beauty" },
  { img: ringImg, title: "Designer Rings", desc: "A perfect gift that lasts a lifetime" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Exquisite Patiala gold jewelry" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative z-10 text-center px-4 max-w-3xl animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6 text-gold-gradient">
          Exquisite Patiala Jewelry, Handcrafted for You
        </h1>
        <p className="text-foreground/80 text-lg md:text-xl mb-8 font-light">
          Discover timeless elegance with our unique and luxurious designs.
        </p>
        <Link
          to="/collection"
          className="inline-block bg-gold-gradient text-primary-foreground px-8 py-3 font-body text-sm tracking-widest uppercase hover:shadow-gold transition-all"
        >
          Explore Our Collection
        </Link>
      </div>
    </section>

    {/* About Preview */}
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="divider-gold mb-8" />
        <p className="text-foreground/80 text-lg leading-relaxed mb-8">
          At Khurram Patiala Gold Jewellers, every piece tells a story. Our handcrafted Patiala jewelry combines tradition with luxury, perfect for gifting or cherishing forever.
        </p>
        <Link
          to="/about"
          className="inline-block border border-primary text-primary px-8 py-3 text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all"
        >
          Learn More About Us
        </Link>
        <div className="divider-gold mt-8" />
      </div>
    </section>

    {/* Featured Collection */}
    <section className="py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-gold-gradient">
          Featured Collection
        </h2>
        <p className="text-center text-muted-foreground mb-12">Handpicked pieces from our finest selection</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((item) => (
            <div key={item.title} className="group bg-card border border-border overflow-hidden hover:shadow-gold transition-all duration-500">
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/collection"
            className="inline-block bg-gold-gradient text-primary-foreground px-8 py-3 text-sm tracking-widest uppercase hover:shadow-gold transition-all"
          >
            View Full Collection
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
