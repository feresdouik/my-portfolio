"use client";

import { useEffect, useState } from "react";

const content = {
  en: {
    nav: ["Home", "About", "Services", "Projects", "Insights", "Contact"],
    hire: "Hire Me",
    available: "Available for selected opportunities",
    role: "SOFTWARE DEVELOPER · PYTHON · WEB · AI",
    headline: "Building useful digital experiences",
    intro: "I build practical web applications, Python tools, AI-powered products, and automation workflows that solve real problems.",
    work: "View My Work", talk: "Let's Talk", follow: "Find me on",
    aboutTag: "ABOUT ME", aboutTitle: "Technology with a practical mindset.",
    aboutLead: "I'm Feres Douik, a Software Developer",
    aboutText: "Based in Sousse, Tunisia, I work across web development, Python, AI-powered applications, and automation. I enjoy turning ideas into working products, learning through hands-on projects, and keeping technology useful and accessible.",
    aboutText2: "My background combines multimedia and web development studies, agency experience, and independent projects. I focus on clear communication, practical problem-solving, and steady improvement.",
    skills: [["Web Development", "Intermediate"], ["Python", "Intermediate"], ["JavaScript", "Working knowledge"], ["AI & Automation", "Project experience"]],
    stats: [["4", "PERSONAL PROJECTS"], ["3", "MAIN FOCUS AREAS"], ["TN", "BASED IN TUNISIA"]],
    servicesTag: "WHAT I OFFER", servicesTitle: "Practical development for real needs.",
    servicesIntro: "From a focused improvement to a complete working prototype.",
    services: [
      ["⌘", "Web Development", "Responsive websites and web applications built around real user needs.", ["Next.js", "JavaScript", "Responsive UI"]],
      ["▣", "UI Implementation", "Turning a clear design into a polished, accessible interface.", ["Layout", "Interactions", "CSS"]],
      ["⌁", "Backend & APIs", "Connecting services, handling data, and building useful integrations.", ["REST APIs", "Integrations", "Data"]],
      ["Py", "Python Development", "Custom scripts, utilities, bug fixes, and practical tools.", ["Python", "Debugging", "Scripting"]],
      ["✳", "AI Integrations", "Connecting AI models and external services to useful workflows.", ["LLM APIs", "Research", "Structured output"]],
      ["↗", "Automation", "Reducing repetitive work with clear and maintainable processes.", ["Workflows", "Automation", "Tools"]]
    ],
    projectsTag: "SELECTED WORK", projectsTitle: "Projects built to solve real problems.",
    projectsIntro: "A selection of independent prototypes and working experiments.",
    projects: [
      ["StylePilot AI", "AI RESEARCH AGENT", "A pre-meeting research agent that gathers relevant sources and turns them into a structured briefing.", "AI · Tavily · Groq", "https://github.com/feresdouik/stylepilot-ai-research-agent", "https://stylepilot-ai.onrender.com", "SP"],
      ["PayPilot", "PAYMENT OPERATIONS", "An AI-assisted payment operations prototype built around PayPal integration and small-business workflows.", "Python · PayPal · AI", "https://github.com/feresdouik/paypilot", "https://paypilot-xfcb.onrender.com", "PP"],
      ["OrderGuard AI", "ORDER RISK REVIEW", "A Streamlit tool that uses transparent rule-based signals to help review potentially risky COD orders.", "Python · Streamlit", "https://github.com/feresdouik/orderguard-ai", "", "OG"],
      ["BizPilot AI", "BUSINESS AI PROTOTYPE", "An experimental AI application developed for the AMD League, exploring practical support for business workflows.", "AI · AMD League", "https://github.com/feresdouik/bizpilot-ai-amd", "https://bizpilot-ai-amd.onrender.com", "BP"]
    ],
    approachTag: "WORKING TOGETHER", approachTitle: "Clear communication. Useful outcomes.",
    approachIntro: "A few principles I bring to every project.",
    principles: [["01", "Understand the need", "Start with the problem, the people using the product, and the outcome that matters."], ["02", "Build with purpose", "Choose a practical approach and keep the experience straightforward."], ["03", "Improve through feedback", "Test, refine, and communicate progress clearly along the way."]],
    insightsTag: "FROM THE WORK", insightsTitle: "A closer look at what I build.",
    insightsIntro: "Explore the ideas and technical focus behind selected projects.",
    insights: [["Research before the meeting", "How StylePilot AI turns scattered information into a structured briefing.", "StylePilot AI", "https://github.com/feresdouik/stylepilot-ai-research-agent"], ["Safer COD order review", "A look at the transparent signals used in the OrderGuard AI prototype.", "OrderGuard AI", "https://github.com/feresdouik/orderguard-ai"], ["Simplifying payment workflows", "Exploring PayPal integration for small-business payment operations.", "PayPilot", "https://github.com/feresdouik/paypilot"]],
    contactTag: "GET IN TOUCH", contactTitle: "Have a project in mind?", contactText: "If you need help with a website, a Python task, or an AI-powered prototype, tell me a little about what you're building.", contactCard: "Start a conversation", contactButton: "Contact me on GitHub", location: "Sousse, Tunisia", contactNote: "GitHub is my current public contact channel.",
    footer: "Designed and built with care.", back: "Back to top"
  },
  fr: {
    nav: ["Accueil", "À propos", "Services", "Projets", "Notes", "Contact"],
    hire: "Me contacter", available: "Ouvert à certaines opportunités",
    role: "DÉVELOPPEMENT LOGICIEL · PYTHON · WEB · IA",
    headline: "Créer des expériences numériques utiles",
    intro: "Je développe des applications web pratiques, des outils Python, des produits intégrant l'IA et des processus automatisés.",
    work: "Voir mes projets", talk: "Parlons-en", follow: "Me retrouver",
    aboutTag: "À PROPOS", aboutTitle: "La technologie avec une approche concrète.",
    aboutLead: "Je suis Feres Douik, développeur logiciel",
    aboutText: "Basé à Sousse, en Tunisie, je travaille dans le développement web, Python, les applications intégrant l'IA et l'automatisation. J'aime transformer des idées en produits fonctionnels et garder la technologie utile et accessible.",
    aboutText2: "Mon parcours combine des études en multimédia et développement web, une expérience en agence et des projets indépendants. Je privilégie la communication claire et la résolution concrète des problèmes.",
    skills: [["Développement web", "Intermédiaire"], ["Python", "Intermédiaire"], ["JavaScript", "Pratique"], ["IA & automatisation", "Expérience projet"]],
    stats: [["4", "PROJETS PERSONNELS"], ["3", "DOMAINES PRINCIPAUX"], ["TN", "BASÉ EN TUNISIE"]],
    servicesTag: "MES SERVICES", servicesTitle: "Du développement adapté aux vrais besoins.",
    servicesIntro: "D'une amélioration ciblée à un prototype fonctionnel.",
    services: [
      ["⌘", "Développement web", "Sites et applications web adaptatifs, conçus pour répondre à de vrais besoins.", ["Next.js", "JavaScript", "Interface"]],
      ["▣", "Intégration UI", "Transformer une maquette claire en interface soignée et accessible.", ["Mise en page", "Interactions", "CSS"]],
      ["⌁", "Backend & API", "Connecter des services, traiter des données et créer des intégrations utiles.", ["API REST", "Intégrations", "Données"]],
      ["Py", "Développement Python", "Scripts personnalisés, outils pratiques et correction de bugs.", ["Python", "Débogage", "Scripts"]],
      ["✳", "Intégration IA", "Connecter des modèles IA et des services externes à des processus utiles.", ["API LLM", "Recherche", "Données structurées"]],
      ["↗", "Automatisation", "Réduire les tâches répétitives avec des processus faciles à maintenir.", ["Processus", "Automatisation", "Outils"]]
    ],
    projectsTag: "PROJETS SÉLECTIONNÉS", projectsTitle: "Des projets construits autour de vrais problèmes.",
    projectsIntro: "Une sélection de prototypes indépendants et d'expérimentations fonctionnelles.",
    projects: [
      ["StylePilot AI", "AGENT DE RECHERCHE IA", "Un agent de recherche avant réunion qui rassemble des sources pertinentes dans un briefing structuré.", "IA · Tavily · Groq", "https://github.com/feresdouik/stylepilot-ai-research-agent", "https://stylepilot-ai.onrender.com", "SP"],
      ["PayPilot", "OPÉRATIONS DE PAIEMENT", "Un prototype assisté par IA autour de l'intégration PayPal et des besoins des petites entreprises.", "Python · PayPal · IA", "https://github.com/feresdouik/paypilot", "https://paypilot-xfcb.onrender.com", "PP"],
      ["OrderGuard AI", "ANALYSE DES COMMANDES", "Un outil Streamlit utilisant des règles transparentes pour examiner les commandes COD potentiellement risquées.", "Python · Streamlit", "https://github.com/feresdouik/orderguard-ai", "", "OG"],
      ["BizPilot AI", "PROTOTYPE IA ENTREPRISE", "Une application expérimentale développée pour l'AMD League autour de cas d'usage pratiques de l'IA.", "IA · AMD League", "https://github.com/feresdouik/bizpilot-ai-amd", "https://bizpilot-ai-amd.onrender.com", "BP"]
    ],
    approachTag: "COLLABORATION", approachTitle: "Communication claire. Résultats utiles.",
    approachIntro: "Quelques principes que j'applique à chaque projet.",
    principles: [["01", "Comprendre le besoin", "Partir du problème, des utilisateurs et du résultat attendu."], ["02", "Construire avec intention", "Choisir une approche pratique et garder une expérience simple."], ["03", "Améliorer avec les retours", "Tester, affiner et communiquer clairement l'avancement."]],
    insightsTag: "AU CŒUR DES PROJETS", insightsTitle: "Découvrir ce que je construis.",
    insightsIntro: "Les idées et les choix techniques derrière quelques projets.",
    insights: [["Rechercher avant une réunion", "Comment StylePilot AI transforme des informations dispersées en briefing structuré.", "StylePilot AI", "https://github.com/feresdouik/stylepilot-ai-research-agent"], ["Examiner les commandes COD", "Les signaux transparents utilisés dans le prototype OrderGuard AI.", "OrderGuard AI", "https://github.com/feresdouik/orderguard-ai"], ["Simplifier les paiements", "Explorer l'intégration PayPal pour les opérations des petites entreprises.", "PayPilot", "https://github.com/feresdouik/paypilot"]],
    contactTag: "CONTACT", contactTitle: "Un projet en tête ?", contactText: "Besoin d'un site web, d'une tâche Python ou d'un prototype intégrant l'IA ? Présentez-moi votre idée.", contactCard: "Commençons une discussion", contactButton: "Me contacter sur GitHub", location: "Sousse, Tunisie", contactNote: "GitHub est actuellement mon canal de contact public.",
    footer: "Conçu et développé avec soin.", back: "Retour en haut"
  }
};

export default function Home() {
  const [lang, setLang] = useState("en");
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[lang];
  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    if (saved === "light" || saved === "dark") setTheme(saved);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);
  const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };
  return <main className="site-shell" id="home">
    <header className="topbar">
      <a className="brand" href="#home"><span className="brand-mark">FD</span><span>Feres Douik<span className="brand-dot">.</span></span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button>
      <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>{t.nav.map((item, i) => <button key={item} onClick={() => go(["home","about","services","projects","insights","contact"][i])}>{item}</button>)}</nav>
      <div className="top-actions"><button className="hire-button" onClick={() => go("contact")}>{t.hire} ↗</button><button className="text-control" onClick={() => setLang(lang === "en" ? "fr" : "en")}>{lang.toUpperCase()} / {lang === "en" ? "FR" : "EN"}</button><button className="theme-toggle" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle theme">{theme === "dark" ? "☼" : "☾"}</button></div>
    </header>
    <section className="hero section-wrap">
      <div className="hero-copy"><div className="status-line"><i />{t.available}</div><p className="eyebrow">{t.role}</p><h1>{t.headline.split(" ").slice(0,-1).join(" ")} <span>{t.headline.split(" ").slice(-1)}</span></h1><p className="hero-description">{t.intro}</p><div className="hero-tags"><span>JavaScript</span><span>Python</span><span>Next.js</span><span>AI & APIs</span></div><div className="hero-actions"><button className="button button-primary" onClick={() => go("projects")}>{t.work} ↗</button><button className="button button-quiet" onClick={() => go("contact")}>{t.talk} →</button></div><p className="hero-follow">{t.follow}: <a href="https://github.com/feresdouik" target="_blank" rel="noreferrer">GitHub ↗</a></p></div>
      <div className="hero-visual"><div className="hero-glow" /><div className="hero-ring ring-one" /><div className="hero-ring ring-two" /><div className="hero-avatar"><span>FD</span><small>SOFTWARE<br/>DEVELOPER</small></div><div className="code-window"><div className="window-dots"><i/><i/><i/></div><code><span>const</span> developer = {"{"}<br/>&nbsp; focus: <b>"Software"</b>,<br/>&nbsp; tools: [<b>"Python"</b>, <b>"Web"</b>],<br/>&nbsp; based: <b>"Tunisia"</b><br/>{"}"};</code></div><span className="float-label label-a">Python · AI</span><span className="float-label label-b">Web apps ↗</span></div>
    </section>
    <section className="about-section section-wrap" id="about">
      <div className="about-visual"><div className="about-avatar">FD</div><span className="about-image-caption">FERES DOUIK · SOUSSE, TUNISIA</span><span className="image-chip">ABOUT / 01</span></div>
      <div className="about-content"><p className="section-kicker">{t.aboutTag}</p><h2>{t.aboutTitle}</h2><h3>{t.aboutLead}</h3><p>{t.aboutText}</p><p>{t.aboutText2}</p><div className="skill-bars">{t.skills.map(([name,level]) => <div className="skill-row" key={name}><div><b>{name}</b><span>{level}</span></div><div className="skill-track"><i /></div></div>)}</div><div className="about-stats">{t.stats.map(([value,label]) => <div key={label}><b>{value}</b><span>{label}</span></div>)}</div></div>
    </section>
    <section className="section-block section-wrap" id="services"><div className="section-heading"><p className="section-kicker">{t.servicesTag}</p><h2>{t.servicesTitle}</h2><p>{t.servicesIntro}</p></div><div className="services-grid">{t.services.map(([icon,title,desc,tags],i) => <article className="service-card" key={title}><span className={"service-icon service-icon-"+i}>{icon}</span><h3>{title}</h3><p>{desc}</p><div className="service-tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>
    <section className="section-block section-wrap" id="projects"><div className="section-heading"><p className="section-kicker">{t.projectsTag}</p><h2>{t.projectsTitle}</h2><p>{t.projectsIntro}</p></div><div className="projects-grid">{t.projects.map(([name,category,desc,stack,repo,live,monogram],i) => <article className="project-card" key={name}><div className={"project-preview preview-"+i}><div className="preview-top"><span>FD / PROJECT 0{i+1}</span><span>↗</span></div><div className="preview-center"><span>{monogram}</span><b>{name}</b><small>{category}</small></div><div className="preview-bottom"><span>{stack}</span><span>CASE STUDY</span></div></div><div className="project-body"><p className="project-category">{category}</p><h3>{name}</h3><p>{desc}</p><div className="project-links"><a href={repo} target="_blank" rel="noreferrer">GitHub ↗</a>{live && <a href={live} target="_blank" rel="noreferrer">Live demo ↗</a>}</div></div></article>)}</div></section>
    <section className="section-block principles-section"><div className="section-wrap"><div className="section-heading"><p className="section-kicker">{t.approachTag}</p><h2>{t.approachTitle}</h2><p>{t.approachIntro}</p></div><div className="principles-grid">{t.principles.map(([n,title,desc]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>
    <section className="section-block section-wrap" id="insights"><div className="section-heading"><p className="section-kicker">{t.insightsTag}</p><h2>{t.insightsTitle}</h2><p>{t.insightsIntro}</p></div><div className="insights-grid">{t.insights.map(([title,desc,tag,url],i) => <a className="insight-card" href={url} target="_blank" rel="noreferrer" key={title}><div className={"insight-art insight-art-"+i}><span>0{i+1}</span><b>{tag}</b><i>↗</i></div><div className="insight-body"><small>PROJECT NOTE · {tag.toUpperCase()}</small><h3>{title}</h3><p>{desc}</p><span>Explore project ↗</span></div></a>)}</div></section>
    <section className="contact-section" id="contact"><div className="section-wrap contact-grid"><div><p className="section-kicker">{t.contactTag}</p><h2>{t.contactTitle}</h2><p className="contact-description">{t.contactText}</p><div className="contact-location">⌖ &nbsp;{t.location}</div></div><div className="contact-card"><div className="contact-card-top"><span>PROJECT ENQUIRY</span><span>↗</span></div><h3>{t.contactCard}</h3><a href="https://github.com/feresdouik" target="_blank" rel="noreferrer" className="button button-primary">{t.contactButton} ↗</a><p>{t.contactNote}</p></div></div></section>
    <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">FD</span><span>Feres Douik<span className="brand-dot">.</span></span></a><p>© 2026 Feres Douik. {t.footer}</p><button onClick={() => go("home")}>{t.back} ↑</button></footer>
  </main>;
}
