import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import kundanImg from "@/assets/kundan-necklace.jpg";
import banglesImg from "@/assets/patiala-bangles.jpg";
import earringsImg from "@/assets/gold-earrings.jpg";
import ringImg from "@/assets/designer-ring.jpg";
import tikkaImg from "@/assets/maang-tikka.jpg";
import bridalImg from "@/assets/bridal-set.jpg";

const products = [
  { img: kundanImg, title: "Kundan Necklace", desc: "Intricate designs that celebrate traditional art. Each stone is hand-set by master artisans." },
  { img: banglesImg, title: "Patiala Bangles", desc: "Luxurious bangles perfect for every occasion. Crafted with finest gold and precious stones." },
  { img: earringsImg, title: "Gold Earrings", desc: "Elegant handcrafted pieces for timeless beauty. Traditional jhumka design with modern appeal." },
  { img: ringImg, title: "Designer Rings", desc: "A perfect gift that lasts a lifetime. Unique designs featuring rare gemstones." },
  { img: tikkaImg, title: "Maang Tikka", desc: "Traditional headpiece that adds royal elegance. Perfect for bridal and festive occasions." },
  { img: bridalImg, title: "Bridal Set", desc: "Complete bridal collection for your special day. Handcrafted with love and tradition." },
];

const Collection = () => (
  <Layout>
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gold-gradient mb-4">
            Our Exquisite Collection
          </h1>
          <p className="text-muted-foreground text-lg">Handcrafted Patiala Jewelry That Reflects Your Style</p>
          <div className="divider-gold max-w-xs mx-auto mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div
              key={p.title}
              className="group bg-card border border-border overflow-hidden hover:shadow-gold transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="inline-block bg-gold-gradient text-primary-foreground px-8 py-3 text-sm tracking-widest uppercase hover:shadow-gold transition-all"
          >
            Contact Us for Custom Orders
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Collection;
