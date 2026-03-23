/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  GraduationCap, 
  Download, 
  BarChart3, 
  Users, 
  Verified, 
  ArrowRight, 
  Award, 
  Network, 
  TrendingUp, 
  MapPin,
  Menu,
  X,
  ChevronRight,
  FileText
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className={`text-xl font-bold font-headline tracking-tight leading-none ${isScrolled ? 'text-primary' : 'text-white md:text-primary'}`}>
              IIM Lucknow
            </span>
            <span className={`text-[10px] uppercase tracking-widest font-medium ${isScrolled ? 'text-secondary' : 'text-white/70 md:text-secondary'}`}>
              CFO Programme
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Programme', 'Curriculum', 'Faculty', 'Fees'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:text-secondary ${isScrolled ? 'text-primary/70' : 'text-white/80'}`}
            >
              {item}
            </a>
          ))}
          <button className="bg-secondary text-white px-6 py-2.5 rounded-sm text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-secondary/90 transition-all">
            Apply Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} className={isScrolled ? 'text-primary' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 flex flex-col gap-6 md:hidden"
          >
            {['Programme', 'Curriculum', 'Faculty', 'Fees'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm uppercase tracking-widest font-bold text-primary border-b border-surface-container pb-2"
              >
                {item}
              </a>
            ))}
            <button className="bg-secondary text-white py-4 rounded-sm text-xs uppercase tracking-[0.2em] font-bold">
              Apply Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 executive-gradient overflow-hidden">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Architectural background" 
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="inline-block py-1.5 px-4 bg-secondary/20 border-l-2 border-secondary text-secondary-fixed font-medium text-[10px] tracking-[0.2em] uppercase">
            Executive Education for Finance Leaders
          </div>
          <h1 className="text-white font-headline text-5xl md:text-8xl font-bold leading-[0.9] -tracking-tight">
            The Modern CFO <br/>
            <span className="italic font-light text-secondary-fixed">Strategic Leadership</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed font-light">
            Designed for CAs, CS, and Finance VPs. Transition from a financial controller to a strategic architect of business value with IIM Lucknow's flagship programme.
          </p>
          
          <div className="flex flex-wrap gap-10 pt-4">
            <div className="flex items-center gap-4">
              <Calendar className="text-secondary" size={32} strokeWidth={1.5} />
              <div>
                <p className="text-white text-sm font-bold">11 Months</p>
                <p className="text-white/50 text-[10px] uppercase tracking-widest">Duration</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <GraduationCap className="text-secondary" size={32} strokeWidth={1.5} />
              <div>
                <p className="text-white text-sm font-bold">IIML Alumni Status</p>
                <p className="text-white/50 text-[10px] uppercase tracking-widest">Recognition</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Brochure Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="bg-white p-10 rounded-sm shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16"></div>
            <h3 className="font-headline text-2xl text-primary font-bold mb-8">Download Brochure</h3>
            <form className="space-y-5">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-surface-container-low border-none rounded-sm p-4 focus:ring-1 focus:ring-secondary/50 text-sm placeholder:text-on-surface-variant/40" 
                  placeholder="e.g. Michael Thorne" 
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-2">Work Email</label>
                <input 
                  type="email" 
                  className="w-full bg-surface-container-low border-none rounded-sm p-4 focus:ring-1 focus:ring-secondary/50 text-sm placeholder:text-on-surface-variant/40" 
                  placeholder="name@company.com" 
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-2">Current Designation</label>
                <select className="w-full bg-surface-container-low border-none rounded-sm p-4 focus:ring-1 focus:ring-secondary/50 text-sm text-on-surface-variant/70 appearance-none">
                  <option>CFO</option>
                  <option>VP Finance</option>
                  <option>Chartered Accountant</option>
                  <option>Company Secretary</option>
                  <option>Other</option>
                </select>
              </div>
              <button className="w-full bg-secondary text-white py-5 rounded-sm font-bold uppercase tracking-[0.2em] text-[10px] hover:shadow-lg transition-all mt-4 flex justify-center items-center gap-2">
                Access Curriculum <Download size={14} />
              </button>
            </form>
            <p className="text-[10px] text-center mt-8 text-on-surface-variant/60 italic font-medium">
              Secure enrollment for the next cohort is now open.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProgrammeOverview = () => {
  return (
    <section className="py-24 bg-surface px-6" id="programme">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-secondary font-medium text-xs tracking-[0.3em] uppercase mb-3">Programme Overview</p>
          <h2 className="font-headline text-4xl md:text-5xl text-primary font-bold">The Strategic Finance Blueprint</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Feature */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 bg-surface-container-low p-12 relative flex flex-col justify-end overflow-hidden group min-h-[500px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
              alt="Boardroom" 
              className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10 max-w-xl">
              <h3 className="font-headline text-3xl text-primary font-bold mb-6">Mastering Global Financial Leadership</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg font-light mb-8">
                The programme moves beyond traditional accounting to focus on value creation, digital transformation, and cross-functional leadership, equipping you to be the CEO's primary strategic partner.
              </p>
              <ul className="space-y-5">
                <li className="flex items-center gap-4">
                  <Verified className="text-secondary" size={20} />
                  <span className="text-sm font-bold text-primary italic tracking-tight">Financial Engineering for the Next Decade</span>
                </li>
                <li className="flex items-center gap-4">
                  <Verified className="text-secondary" size={20} />
                  <span className="text-sm font-bold text-primary italic tracking-tight">ESG and Sustainable Finance Integration</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Sub Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-white p-10 flex flex-col justify-between"
          >
            <BarChart3 className="text-secondary-fixed" size={40} strokeWidth={1} />
            <div>
              <h4 className="font-headline text-2xl mb-3">Advanced Analytics</h4>
              <p className="text-white/60 text-sm leading-relaxed font-light">
                Leverage data-driven insights to predict market shifts and optimize capital allocation.
              </p>
            </div>
          </motion.div>

          {/* Sub Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-surface-container-high p-10 flex flex-col justify-between border-l-4 border-secondary"
          >
            <Users className="text-primary" size={40} strokeWidth={1} />
            <div>
              <h4 className="font-headline text-2xl text-primary mb-3">Executive Networking</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed font-light">
                Connect with a peer group of elite finance professionals and IIML’s extensive alumni network.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const LearningFramework = () => {
  const steps = [
    {
      id: "01",
      title: "Immersion in Theory & Practice",
      desc: "Blended learning models featuring live sessions and intensive campus immersions at IIM Lucknow."
    },
    {
      id: "02",
      title: "Capstone Project",
      desc: "Apply sophisticated financial models to a real-world enterprise challenge under expert mentorship."
    },
    {
      id: "03",
      title: "Boardroom Dynamics",
      desc: "Simulations designed to refine executive presence and stakeholder management skills."
    }
  ];

  return (
    <section className="py-24 bg-surface-container-low px-6" id="curriculum">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="inline-block py-1 px-4 bg-white border border-outline-variant/30 text-primary font-medium text-[10px] tracking-[0.3em] uppercase">
            Learning Framework
          </div>
          <h2 className="font-headline text-5xl md:text-6xl text-primary font-bold leading-tight">
            A Pedagogy Built for <br/>
            <span className="italic text-secondary">Decision-Makers.</span>
          </h2>
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.id} className="bg-surface-container-high p-8 border-l-4 border-secondary shadow-sm transition-transform hover:translate-x-2 duration-300">
                <h4 className="font-bold text-primary mb-3 text-lg">{step.id}. {step.title}</h4>
                <p className="text-sm text-on-surface-variant italic font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
              alt="Executive meeting" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-primary p-10 text-white max-w-xs shadow-2xl">
            <p className="font-headline text-xl italic leading-relaxed mb-6">
              "The transition from CFO to Strategic Leader requires a shift in mindset, not just skill set."
            </p>
            <div className="mt-4 border-t border-white/20 pt-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary-fixed mb-1">Programme Director</p>
              <p className="text-xs text-white/60 font-medium">IIM Lucknow</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Faculty = () => {
  const members = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Lead Programme Faculty",
      desc: "Expert in Corporate Valuation and M&A Dynamics.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Prof. Anita Desai",
      role: "Strategic Management",
      desc: "Specialist in Digital Transformation for Finance.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
    },
    {
      name: "Vikram Sethi",
      role: "Industry Mentor",
      desc: "Former CFO of a Fortune 500 Multinational.",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-surface px-6" id="faculty">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-secondary font-medium text-xs tracking-[0.3em] uppercase mb-3">Faculty & Mentors</p>
          <h2 className="font-headline text-4xl md:text-5xl text-primary font-bold">Experts in the Equation</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {members.map((member, idx) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="aspect-[3/4] bg-surface-container overflow-hidden mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 shadow-lg">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="font-headline text-2xl text-primary font-bold mb-1">{member.name}</h4>
              <p className="text-[10px] text-secondary font-bold uppercase tracking-[0.2em] mb-4">{member.role}</p>
              <p className="text-sm text-on-surface-variant italic font-medium leading-relaxed">{member.desc}</p>
            </motion.div>
          ))}

          {/* CTA Slot */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-primary p-12 flex flex-col justify-center text-white"
          >
            <h4 className="font-headline text-3xl font-bold mb-6 leading-tight">Learn from the Vanguard.</h4>
            <p className="text-white/60 text-sm mb-10 leading-relaxed font-light">
              Our faculty brings a synthesis of academic rigor and industry intuition.
            </p>
            <a href="#" className="text-secondary-fixed text-sm font-bold flex items-center gap-3 group">
              View Full Faculty <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhyIIML = () => {
  const features = [
    {
      icon: <Award className="text-secondary" size={32} />,
      title: "Ivy League Pedagogy",
      desc: "Case-study based learning used by world-renowned institutions to simulate high-stakes environments."
    },
    {
      icon: <Network className="text-secondary" size={32} />,
      title: "Dual Alumni Status",
      desc: "Join the prestigious circles of both IIM Lucknow and our executive education partners."
    },
    {
      icon: <TrendingUp className="text-secondary" size={32} />,
      title: "Career Acceleration",
      desc: "Personalized executive coaching and resume reviews for those aiming for the C-suite."
    },
    {
      icon: <MapPin className="text-secondary" size={32} />,
      title: "Campus Immersion",
      desc: "Networking events at our Noida and Lucknow campuses with policy makers and industry titans."
    }
  ];

  return (
    <section className="py-24 bg-surface-container-highest px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-headline text-5xl text-primary font-bold mb-8 leading-tight">Why IIM Lucknow?</h2>
          <p className="text-on-surface-variant leading-relaxed text-lg font-light mb-12">
            Consistently ranked among the top business schools in Asia, IIM Lucknow is the preferred destination for India's business elite seeking transformative education.
          </p>
          <div className="flex items-center gap-8">
            <div className="text-primary">
              <p className="text-5xl font-headline font-bold mb-1">#4</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/60">NIRF Ranking</p>
            </div>
            <div className="w-px h-12 bg-outline-variant/30"></div>
            <div className="text-primary">
              <p className="text-5xl font-headline font-bold mb-1">25k+</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/60">Global Alumni</p>
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f, idx) => (
            <motion.div 
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 flex gap-8 shadow-sm border-t-2 border-secondary hover:shadow-xl transition-shadow duration-300"
            >
              <div className="shrink-0">{f.icon}</div>
              <div>
                <h5 className="font-bold text-primary mb-3 text-lg">{f.title}</h5>
                <p className="text-sm text-on-surface-variant italic font-medium leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-32 executive-gradient text-white text-center px-6 relative overflow-hidden" id="fees">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop" 
          alt="Network background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <h2 className="font-headline text-5xl md:text-7xl font-bold mb-10 leading-tight">
          Architect Your Path to the C-Suite.
        </h2>
        <p className="text-white/60 text-xl mb-16 italic font-light max-w-2xl mx-auto">
          Join the next cohort of India's most influential finance leaders. Limited seats available for qualified candidates.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button className="bg-secondary text-white px-12 py-6 rounded-sm font-bold uppercase tracking-[0.3em] text-xs hover:scale-105 transition-all shadow-2xl">
            Apply Now
          </button>
          <button className="border border-secondary text-secondary-fixed px-12 py-6 rounded-sm font-bold uppercase tracking-[0.3em] text-xs hover:bg-secondary/10 transition-all flex items-center justify-center gap-3">
            Download Fee Structure <FileText size={18} />
          </button>
        </div>
        <p className="mt-16 text-white/40 text-[10px] font-medium uppercase tracking-[0.4em]">
          Enrollment Deadline: December 15, 2024
        </p>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary w-full border-t border-white/5">
      <div className="max-w-7xl mx-auto px-12 py-16 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left">
          <span className="text-2xl font-bold text-white font-headline tracking-tight">IIM Lucknow CFO Programme</span>
          <p className="text-white/40 text-[10px] mt-3 uppercase tracking-[0.2em] italic font-medium">
            Transforming Finance into Strategy
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-10">
          {['Terms of Service', 'Privacy Policy', 'Contact Us'].map((item) => (
            <a key={item} href="#" className="text-white/40 hover:text-white text-xs tracking-widest uppercase transition-colors">
              {item}
            </a>
          ))}
          <a href="#" className="text-white font-bold text-xs tracking-widest uppercase border-b border-secondary pb-1">
            Brochure
          </a>
        </div>
        
        <p className="text-white/30 text-[10px] tracking-widest uppercase font-medium">
          © 2024 IIM Lucknow Executive Education. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-secondary/20 selection:text-secondary">
      <Navbar />
      <main>
        <Hero />
        <ProgrammeOverview />
        <LearningFramework />
        <Faculty />
        <WhyIIML />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
