"use client";

import { useEffect, useState } from "react";

const copy = {
  en: {
    nav: ["About", "Journey", "Skills", "Work", "Contact"],
    eyebrow: "SOFTWARE DEVELOPER · AI & AUTOMATION",
    heroTitle: "Building useful digital experiences.",
    heroText: "I turn ideas into practical web applications, intelligent tools, and automated workflows.",
    cta: "Explore my work",
    contact: "Let's talk",
    availability: "Open to meaningful opportunities",
    aboutLabel: "A LITTLE ABOUT ME",
    aboutTitle: "Technology with a practical mindset.",
    aboutText: "I'm a developer based in Tunisia, working across web development, Python, AI-powered applications, and automation. I enjoy taking a problem from its first sketch to a working prototype — keeping the experience clear, useful, and grounded in real needs.",
    aboutNote: "My approach is simple: understand the problem, build with purpose, and keep improving.",
    journeyLabel: "THE JOURNEY",
    journeyTitle: "A path shaped by making things.",
    journeyText: "A mix of creative foundations, digital work, and hands-on software projects.",
    journey: [
      ["Multimedia & Web Development", "Studies focused on digital creation, web foundations, and visual communication."],
      ["Agency Experience", "Worked on web and graphic design tasks in an agency environment."],
      ["Baraa Voyages", "Professional experience in a travel business, learning how digital work connects with everyday operations."],
      ["Independent Projects", "Freelance creative services and event work, alongside building software prototypes and AI-powered tools."]
    ],
    skillsLabel: "WHAT I WORK WITH",
    skillsTitle: "A practical toolkit.",
    skillsText: "Tools and technologies I use to explore ideas and build working solutions.",
    skillGroups: [["Development", "Python", "JavaScript", "HTML & CSS", "Web development"], ["AI & Automation", "LLM integrations", "Research workflows", "API integrations", "Process automation"], ["Tools & Platforms", "Git & GitHub", "Next.js", "Streamlit", "REST APIs"]],
    servicesLabel: "HOW I CAN HELP",
    servicesTitle: "From a small fix to a working prototype.",
    services: [
      ["Web development", "Responsive websites and interfaces with a focus on clarity, usability, and maintainable code."],
      ["Python development", "Custom scripts, practical utilities, bug fixes, and workflow automation."],
      ["AI integrations", "Connecting AI models and external APIs to solve specific, well-defined problems."]
    ],
    workLabel: "SELECTED WORK",
    workTitle: "Projects built to solve real problems.",
    workText: "A selection of prototypes and experiments. Each project is a work in progress, built around a concrete use case.",
    projects: [
      ["StylePilot AI", "AI-powered pre-meeting research agent", "Collects relevant information about a person or organization and turns it into a structured briefing with source context.", "AI · Research · Tavily · Groq", "https://github.com/feresdouik/stylepilot-ai-research-agent", "https://stylepilot-ai.onrender.com"],
      ["PayPilot", "AI-assisted payment operations", "A prototype exploring how small businesses can simplify payment operations through PayPal integration and AI-assisted workflows.", "Python · PayPal API · AI", "https://github.com/feresdouik/paypilot", "https://paypilot-xfcb.onrender.com"],
      ["OrderGuard AI", "Cash-on-delivery order risk scoring", "A Streamlit prototype that applies transparent rule-based signals to help review potentially risky COD orders.", "Python · Streamlit · Risk scoring", "https://github.com/feresdouik/orderguard-ai", ""],
      ["BizPilot AI", "Business-focused AI prototype", "An experimental AI application developed for the AMD League, exploring practical AI support for business workflows.", "AI · Prototype · AMD League", "https://github.com/feresdouik/bizpilot-ai-amd", "https://bizpilot-ai-amd.onrender.com"]
    ],
    contactLabel: "GET IN TOUCH",
    contactTitle: "Have a project in mind?",
    contactText: "If you need help with a website, a Python task, or an AI-powered prototype, I'd be glad to hear what you're working on.",
    email: "Contact on GitHub",
    footer: "Designed and built with care.",
    backTop: "Back to top"
  },
  fr: {
    nav: ["À propos", "Parcours", "Compétences", "Projets", "Contact"],
    eyebrow: "DÉVELOPPEMENT LOGICIEL · IA & AUTOMATISATION",
    heroTitle: "Créer des expériences numériques utiles.",
    heroText: "Je transforme des idées en applications web pratiques, outils intelligents et processus automatisés.",
    cta: "Découvrir mes projets",
    contact: "Me contacter",
    availability: "Ouvert aux opportunités pertinentes",
    aboutLabel: "QUELQUES MOTS",
    aboutTitle: "La technologie avec une approche concrète.",
    aboutText: "Développeur basé en Tunisie, je travaille autour du développement web, de Python, des applications intégrant l'IA et de l'automatisation. J'aime transformer un problème en prototype fonctionnel, avec une expérience claire, utile et ancrée dans des besoins réels.",
    aboutNote: "Mon approche : comprendre le besoin, construire avec intention et améliorer progressivement.",
    journeyLabel: "MON PARCOURS",
    journeyTitle: "Un parcours guidé par la création.",
    journeyText: "Des bases créatives au travail numérique, jusqu'aux projets logiciels concrets.",
    journey: [
      ["Multimédia & développement web", "Études axées sur la création numérique, les bases du web et la communication visuelle."],
      ["Expérience en agence", "Participation à des missions web et graphiques dans un environnement d'agence."],
      ["Baraa Voyages", "Expérience professionnelle dans le secteur du voyage et découverte des besoins opérationnels quotidiens."],
      ["Projets indépendants", "Services créatifs en freelance et organisation d'événements, en parallèle de prototypes logiciels et d'outils IA."]
    ],
    skillsLabel: "MES OUTILS",
    skillsTitle: "Une boîte à outils concrète.",
    skillsText: "Des technologies que j'utilise pour explorer des idées et construire des solutions fonctionnelles.",
    skillGroups: [["Développement", "Python", "JavaScript", "HTML & CSS", "Développement web"], ["IA & automatisation", "Intégration de LLM", "Recherche automatisée", "Intégration d'API", "Automatisation"], ["Outils & plateformes", "Git & GitHub", "Next.js", "Streamlit", "API REST"]],
    servicesLabel: "MES SERVICES",
    servicesTitle: "De la correction au prototype fonctionnel.",
    services: [
      ["Développement web", "Sites et interfaces adaptatifs, conçus pour être clairs, pratiques et faciles à maintenir."],
      ["Développement Python", "Scripts personnalisés, outils pratiques, correction de bugs et automatisation."],
      ["Intégration IA", "Connexion de modèles IA et d'API externes pour répondre à des besoins précis."]
    ],
    workLabel: "PROJETS SÉLECTIONNÉS",
    workTitle: "Des projets construits autour de vrais besoins.",
    workText: "Une sélection de prototypes et d'expérimentations, chacun développé autour d'un cas d'utilisation concret.",
    projects: [
      ["StylePilot AI", "Agent de recherche avant réunion", "Rassemble des informations pertinentes sur une personne ou une organisation et les transforme en briefing structuré avec contexte des sources.", "IA · Recherche · Tavily · Groq", "https://github.com/feresdouik/stylepilot-ai-research-agent", "https://stylepilot-ai.onrender.com"],
      ["PayPilot", "Gestion des paiements assistée par IA", "Un prototype qui explore la simplification des opérations de paiement des petites entreprises via PayPal et des processus assistés par IA.", "Python · API PayPal · IA", "https://github.com/feresdouik/paypilot", "https://paypilot-xfcb.onrender.com"],
      ["OrderGuard AI", "Évaluation du risque des commandes COD", "Un prototype Streamlit utilisant des règles transparentes pour aider à examiner les commandes à risque potentiel.", "Python · Streamlit · Scoring", "https://github.com/feresdouik/orderguard-ai", ""],
      ["BizPilot AI", "Prototype IA orienté entreprise", "Une application expérimentale développée pour l'AMD League, autour de cas d'usage pratiques de l'IA en entreprise.", "IA · Prototype · AMD League", "https://github.com/feresdouik/bizpilot-ai-amd", "https://bizpilot-ai-amd.onrender.com"]
    ],
    contactLabel: "PRENONS CONTACT",
    contactTitle: "Un projet en tête ?",
    contactText: "Besoin d'un site web, d'un développement Python ou d'un prototype intégrant l'IA ? Parlons de votre idée.",
    email: "Me contacter sur GitHub",
    footer: "Conçu et développé avec soin.",
    backTop: "Retour en haut"
  }
};

const navIds = ["about", "journey", "skills", "work", "contact"];

export default function Home() {
  const [lang, setLang] = useState("en");
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[lang];

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Home"><span className="brand-mark">FD</span><span>Feres Douik<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          {t.nav.map((item, i) => <button key={item} onClick={() => scrollTo(navIds[i])}>{item}</button>)}
        </nav>
        <div className="top-actions">
          <button className="text-control" onClick={() => setLang(lang === "en" ? "fr" : "en")}>{lang.toUpperCase()} <span>↔</span> {lang === "en" ? "FR" : "EN"}</button>
          <button className="theme-toggle" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle color theme">{theme === "dark" ? "☼" : "☾"}</button>
        </div>
      </header>

      <section className="hero section-wrap" id="top">
        <div className="hero-copy">
          <div className="status-line"><span className="status-dot" />{t.availability}</div>
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.heroTitle.split(" ").slice(0, -1).join(" ")} <span>{t.heroTitle.split(" ").slice(-1)}</span></h1>
          <p className="hero-description">{t.heroText}</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => scrollTo("work")}>{t.cta} <span>↗</span></button>
            <button className="button button-quiet" onClick={() => scrollTo("contact")}>{t.contact} <span>→</span></button>
          </div>
          <div className="hero-meta"><span>SOUSSE, TUNISIA</span><span className="meta-divider" /><span>WEB · PYTHON · AI</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract decorative geometric artwork">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <div className="art-core"><span>FD</span><i /></div>
          <span className="art-label art-label-top">IDEAS → SYSTEMS</span>
          <span className="art-label art-label-bottom">THINK / BUILD / REFINE</span>
          <span className="art-cross cross-one">+</span><span className="art-cross cross-two">+</span>
        </div>
        <div className="scroll-cue"><span /> SCROLL TO EXPLORE</div>
      </section>

      <section className="content-section section-wrap" id="about">
        <div className="section-index">01 / {t.aboutLabel}</div>
        <div className="about-grid">
          <h2>{t.aboutTitle}</h2>
          <div className="about-copy"><p>{t.aboutText}</p><p className="about-note">{t.aboutNote}</p><div className="about-signature">Feres <span>Douik</span></div></div>
        </div>
      </section>

      <section className="content-section section-wrap" id="journey">
        <div className="section-index">02 / {t.journeyLabel}</div>
        <div className="section-heading"><h2>{t.journeyTitle}</h2><p>{t.journeyText}</p></div>
        <div className="timeline">{t.journey.map((item, i) => <article className="timeline-item" key={item[0]}><div className="timeline-count">0{i + 1}</div><div className="timeline-marker"><span /></div><div className="timeline-content"><h3>{item[0]}</h3><p>{item[1]}</p></div></article>)}</div>
      </section>

      <section className="content-section section-wrap" id="skills">
        <div className="section-index">03 / {t.skillsLabel}</div>
        <div className="section-heading"><h2>{t.skillsTitle}</h2><p>{t.skillsText}</p></div>
        <div className="skill-grid">{t.skillGroups.map((group, i) => <article className="skill-card" key={group[0]}><span className="card-number">0{i + 1}</span><h3>{group[0]}</h3><div className="skill-tags">{group.slice(1).map(skill => <span key={skill}>{skill}</span>)}</div></article>)}</div>
      </section>

      <section className="content-section section-wrap" id="services">
        <div className="section-index">04 / {t.servicesLabel}</div>
        <div className="section-heading"><h2>{t.servicesTitle}</h2></div>
        <div className="service-list">{t.services.map((service, i) => <article className="service-row" key={service[0]}><span className="service-number">0{i + 1}</span><h3>{service[0]}</h3><p>{service[1]}</p><span className="service-arrow">↗</span></article>)}</div>
      </section>

      <section className="content-section section-wrap" id="work">
        <div className="section-index">05 / {t.workLabel}</div>
        <div className="section-heading work-heading"><h2>{t.workTitle}</h2><p>{t.workText}</p></div>
        <div className="project-grid">{t.projects.map((project, i) => <article className="project-card" key={project[0]}><div className={"project-visual visual-" + i}><span className="project-visual-index">0{i + 1}</span><span className="project-monogram">{["SP", "PP", "OG", "BP"][i]}</span><span className="visual-caption">SELECTED PROJECT / 2026</span></div><div className="project-info"><p className="project-category">{project[1]}</p><h3>{project[0]}</h3><p className="project-description">{project[2]}</p><p className="project-stack">{project[3]}</p><div className="project-links"><a href={project[4]} target="_blank" rel="noreferrer">GitHub ↗</a>{project[5] ? <a href={project[5]} target="_blank" rel="noreferrer">Live demo ↗</a> : null}</div></div></article>)}</div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <div className="section-index">06 / {t.contactLabel}</div>
        <div className="contact-inner"><p className="eyebrow">HAVE AN IDEA? LET'S BUILD IT.</p><h2>{t.contactTitle}</h2><p>{t.contactText}</p><a className="button button-primary contact-button" href="https://github.com/feresdouik" target="_blank" rel="noreferrer">{t.email} <span>↗</span></a><div className="social-links"><a href="https://github.com/feresdouik" target="_blank" rel="noreferrer">GitHub ↗</a></div></div>
      </section>

      <footer className="footer section-wrap"><a className="brand" href="#top"><span className="brand-mark">FD</span><span>Feres Douik<span className="brand-dot">.</span></span></a><p>© 2026 Feres Douik. {t.footer}</p><button onClick={() => scrollTo("top")}>{t.backTop} ↑</button></footer>
    </main>
  );
}
