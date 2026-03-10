import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-secondary border-t border-border">
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-heading font-bold text-gold-gradient mb-4">
            Khurram Patiala Gold Jewellers
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Exquisite handcrafted Patiala jewelry, combining tradition with modern luxury since generations.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-foreground mb-4 text-lg">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/collection", label: "Collection" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading text-foreground mb-4 text-lg">Store Hours</h4>
          <p className="text-muted-foreground text-sm">Monday – Saturday</p>
          <p className="text-foreground text-sm mb-2">10:00 AM – 7:00 PM</p>
          <p className="text-muted-foreground text-sm">Raja Bazaar</p>
          <p className="text-muted-foreground text-sm">(051) 111-1111</p>
        </div>
      </div>
      <div className="divider-gold mb-6" />
      <p className="text-center text-muted-foreground text-xs tracking-wider">
        © 2026 Khurram Patiala Gold Jewellers. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
