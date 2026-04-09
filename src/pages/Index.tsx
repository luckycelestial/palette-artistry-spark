import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Gem,
  Scissors,
  Clock,
  Star,
  Phone,
  MapPin,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  Send,
} from "lucide-react";
import heroBridal from "@/assets/hero-bridal.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import servicesBridal from "@/assets/services-bridal.jpg";
import servicesKurti from "@/assets/services-kurti.jpg";

/* ─── Animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/* ─── Header ─── */
function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Gallery", href: "#gallery" },
    { label: "Services", href: "#services" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <a href="#" className="flex items-center gap-3 font-serif text-xl sm:text-2xl font-bold text-primary tracking-wide">
          <img src="/logo.jpg" alt="The Palette Logo" className="h-10 w-auto object-contain" />
          The Palette
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 text-sm font-semibold bg-secondary text-secondary-foreground rounded-sm hover:brightness-110 transition-all border border-secondary hover:shadow-[0_0_16px_hsl(37_46%_58%/0.4)]"
          >
            Book Consultation
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-background border-b border-border px-6 pb-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-foreground/80 hover:text-primary font-medium">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-2 block text-center px-5 py-2.5 text-sm font-semibold bg-secondary text-secondary-foreground rounded-sm">
            Book Consultation
          </a>
        </motion.div>
      )}
    </header>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={heroBridal} alt="Intricate bridal embroidery detail" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/70" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
          Bespoke Bridal Wear &amp; Masterful Stitching
        </h1>
        <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-light max-w-2xl mx-auto">
          Coimbatore's 5-Star Destination for Custom Blouses, Embroidery, and Quality Craftsmanship.
        </p>
        <a
          href="#gallery"
          className="inline-block mt-8 px-8 py-3.5 bg-secondary text-secondary-foreground font-semibold text-sm tracking-wide rounded-sm hover:brightness-110 transition-all hover:shadow-[0_0_20px_hsl(37_46%_58%/0.5)]"
        >
          Explore Our Work
        </a>
      </motion.div>
    </section>
  );
}

/* ─── About / Trust ─── */
function About() {
  const features = [
    { icon: Gem, title: "Expert Embroidery", desc: "Zardosi, Aari, and hand-embroidered masterpieces crafted by skilled artisans." },
    { icon: Scissors, title: "Perfect Fit Stitching", desc: "Precision tailoring that ensures every garment fits like it was made just for you." },
    { icon: Clock, title: "On-Time Delivery", desc: "We respect your timeline — every order delivered punctually, without compromise." },
  ];
  return (
    <Section id="about" className="py-20 lg:py-28 bg-muted/40">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} className="fill-secondary text-secondary" />
          ))}
          <span className="ml-2 text-sm font-semibold text-foreground">5.0 (103 Reviews)</span>
        </motion.div>
        <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl font-bold text-primary">
          Crafted with Passion &amp; Precision
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Women-owned and LGBTQ+ friendly — we celebrate every individual with couture that tells your unique story.
        </motion.p>
        <div className="mt-14 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((f) => (
            <motion.div key={f.title} variants={fadeUp} className="p-8 rounded-sm bg-background border border-border hover:shadow-lg transition-shadow">
              <f.icon size={36} className="mx-auto text-secondary mb-4" />
              <h3 className="font-serif text-xl font-semibold text-primary">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── Services ─── */
function Services() {
  return (
    <Section id="services" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl font-bold text-primary text-center mb-16">
          Our Services
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Bridal */}
          <motion.div variants={fadeUp} className="group overflow-hidden rounded-sm">
            <div className="overflow-hidden">
              <img src={servicesBridal} alt="Bridal lehenga with zardosi embroidery" loading="lazy" width={640} height={800} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8 bg-muted/30 border border-t-0 border-border">
              <h3 className="font-serif text-2xl font-semibold text-primary">Bridal Lehengas &amp; Blouses</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Our signature Zardosi and Aari work transforms every bridal piece into a wearable masterpiece. From heavy bridal lehengas to intricately embroidered blouses, every stitch reflects our commitment to <strong className="text-foreground">quality</strong> and <strong className="text-foreground">unique patterns</strong> that are exclusively yours.
              </p>
            </div>
          </motion.div>
          {/* Kurtis */}
          <motion.div variants={fadeUp} className="group overflow-hidden rounded-sm">
            <div className="overflow-hidden">
              <img src={servicesKurti} alt="Boutique kurti collection" loading="lazy" width={640} height={800} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8 bg-muted/30 border border-t-0 border-border">
              <h3 className="font-serif text-2xl font-semibold text-primary">Boutique Kurtis &amp; Custom Tailoring</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Everyday elegance meets couture craftsmanship. Our boutique kurtis feature <strong className="text-foreground">unique patterns</strong> and are tailored to perfection. Every piece undergoes rigorous <strong className="text-foreground">quality</strong> checks to ensure it exceeds your expectations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

/* ─── Gallery ─── */
function Gallery() {
  const images = [
    { src: gallery1, alt: "Red bridal lehenga with gold embroidery", label: "Bridal Lehenga" },
    { src: gallery2, alt: "Cream silk blouse with aari embroidery", label: "Aari Work Blouse" },
    { src: gallery3, alt: "Pink designer kurti", label: "Designer Kurti" },
    { src: gallery4, alt: "Emerald green bridal blouse", label: "Bridal Blouse" },
    { src: gallery5, alt: "Maroon dupatta with gold work", label: "Embroidered Dupatta" },
    { src: gallery6, alt: "Royal blue saree blouse with mirror work", label: "Mirror Work Blouse" },
  ];
  return (
    <Section id="gallery" className="py-20 lg:py-28 bg-muted/40">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl font-bold text-primary text-center mb-16">
          Our Portfolio
        </motion.h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="break-inside-avoid group relative overflow-hidden rounded-sm cursor-pointer"
            >
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-colors duration-300 flex items-end">
                <span className="p-4 text-primary-foreground font-serif text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── Reviews ─── */
function Reviews() {
  const reviews = [
    {
      name: "Lohitha",
      text: "Absolutely stunning bridal blouse! The Zardosi work was flawless. They understood my vision perfectly and delivered on time. Best boutique in Coimbatore!",
    },
    {
      name: "Sujitha",
      text: "I got my wedding lehenga stitched here and it was beyond perfect. The attention to detail and the quality of embroidery is unmatched. Highly recommend!",
    },
    {
      name: "Sangamithra",
      text: "The Palette is my go-to for all custom tailoring. Their kurti designs are unique and the fitting is always spot on. Wonderful experience every time.",
    },
  ];
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <Section id="reviews" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-12">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} className="fill-secondary text-secondary" />
            ))}
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
            5.0 ★ (103 Google Reviews)
          </h2>
        </motion.div>
        <div className="relative">
          <button onClick={() => scroll(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden lg:flex w-10 h-10 items-center justify-center rounded-full bg-background border border-border shadow-md hover:bg-muted transition" aria-label="Previous">
            <ChevronLeft size={20} className="text-foreground" />
          </button>
          <div ref={scrollRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-1">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex-none w-[320px] md:w-[380px] snap-center p-8 bg-background border border-border rounded-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic">"{r.text}"</p>
                <p className="mt-6 font-serif font-semibold text-primary">— {r.name}</p>
              </motion.div>
            ))}
          </div>
          <button onClick={() => scroll(1)} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden lg:flex w-10 h-10 items-center justify-center rounded-full bg-background border border-border shadow-md hover:bg-muted transition" aria-label="Next">
            <ChevronRight size={20} className="text-foreground" />
          </button>
        </div>
      </div>
    </Section>
  );
}

/* ─── Contact ─── */
function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you shortly.");
    setFormData({ name: "", phone: "", service: "", message: "" });
  };

  return (
    <Section id="contact" className="py-20 lg:py-28 bg-muted/40">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl font-bold text-primary text-center mb-16">
          Visit Us
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div variants={fadeUp} className="rounded-sm overflow-hidden border border-border h-[400px] lg:h-auto">
            <iframe
              title="The Palette Designer Boutique Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2!2d77.0!3d11.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBharathi+Nagar+Colony+Peelamedu+Coimbatore!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
          {/* Form + Info */}
          <motion.div variants={fadeUp}>
            <div className="mb-8 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">74, Bharathi Nagar Colony, Peelamedu, Coimbatore, Tamil Nadu</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-secondary flex-shrink-0" />
                <a href="tel:+919150250227" className="text-sm text-muted-foreground hover:text-primary transition-colors">091502 50227</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-secondary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Mon–Sat: 10:00 AM – 8:00 PM</p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 text-sm bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 text-sm bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground"
              />
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                required
                className="w-full px-4 py-3 text-sm bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-ring text-muted-foreground"
              >
                <option value="">Service Needed</option>
                <option value="bridal-lehenga">Bridal Lehenga</option>
                <option value="blouse-stitching">Blouse Stitching</option>
                <option value="embroidery">Custom Embroidery</option>
                <option value="kurti">Boutique Kurti</option>
                <option value="custom-tailoring">Custom Tailoring</option>
                <option value="other">Other</option>
              </select>
              <textarea
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 text-sm bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground resize-none"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-semibold text-sm rounded-sm hover:brightness-125 transition-all"
              >
                <Send size={16} /> Request Call
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 text-center flex flex-col items-center">
        <img src="/logo.jpg" alt="The Palette Logo" className="h-14 w-auto object-contain mb-4 rounded-full border border-primary-foreground/20" />
        <p className="font-serif text-2xl font-bold">The Palette Designer Boutique</p>
        <p className="mt-2 text-sm text-primary-foreground/60">Made in Coimbatore.</p>
        <div className="mt-6 flex items-center justify-center gap-6 text-sm text-primary-foreground/50">
          <a href="#gallery" className="hover:text-primary-foreground/80 transition-colors">Gallery</a>
          <a href="#services" className="hover:text-primary-foreground/80 transition-colors">Services</a>
          <a href="#reviews" className="hover:text-primary-foreground/80 transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-primary-foreground/80 transition-colors">Contact</a>
        </div>
        <div className="mt-6 flex items-center justify-center gap-1 text-primary-foreground/40 text-xs">
          <Heart size={12} /> <span>Women-owned & LGBTQ+ friendly</span>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
