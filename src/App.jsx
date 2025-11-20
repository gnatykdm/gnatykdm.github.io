import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Sparkles, Eye, BarChart3, Brain, Code2, Database, TrendingUp, Zap } from 'lucide-react';

import profilePicture from '../public/logo.jpg';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Eye className="service-icon" />,
      title: "Exploratory Data Analysis",
      description: "Uncover hidden patterns and insights that drive strategic decisions",
      deliverables: ["Statistical Analysis", "Data Profiling", "Trend Identification"]
    },
    {
      icon: <BarChart3 className="service-icon" />,
      title: "Business Intelligence",
      description: "Transform raw data into interactive dashboards and compelling reports",
      deliverables: ["Power BI Dashboards", "Custom Reports", "KPI Tracking"]
    },
    {
      icon: <Brain className="service-icon" />,
      title: "Machine Learning Solutions",
      description: "Build predictive models for regression and classification problems",
      deliverables: ["Computer Vision", "Predictive Analytics", "Model Optimization"]
    },
    {
      icon: <Database className="service-icon" />,
      title: "Data Engineering",
      description: "Clean, structure, and automate your data pipelines",
      deliverables: ["Data Cleaning", "Web Scraping", "ETL Automation"]
    },
    {
      icon: <Code2 className="service-icon" />,
      title: "Custom Development",
      description: "Build GUI applications and visualization tools tailored to your needs",
      deliverables: ["Data Visualization Apps", "Custom Interfaces", "API Integration"]
    },
    {
      icon: <TrendingUp className="service-icon" />,
      title: "ROI Optimization",
      description: "Data-driven strategies that directly increase your bottom line",
      deliverables: ["Revenue Analysis", "Cost Reduction", "Growth Forecasting"]
    }
  ];

  const projects = [
    {
      title: "Customer Analysis & Segmentation",
      description: "Tech Shop E-Commerce analysis with K-means clustering and RFM analysis. Identified 5 customer segments with 18-25% projected revenue uplift.",
      tags: ["Python", "Pandas", "K-means", "RFM Analysis"],
      image: null,
      github: "https://github.com/yourusername/customer-analysis",
      notebook: "https://github.com/yourusername/customer-analysis/blob/main/analysis.ipynb",
      pdf: "https://github.com/yourusername/customer-analysis/blob/main/report.pdf",
      highlights: ["18% customers = 40% revenue", "31% churn risk identified", "5 distinct segments"]
    },
    {
      title: "Event Parser & Data Extraction",
      description: "Automated web scraper for event.com with custom query parameters. Exports structured data to CSV for further analysis.",
      tags: ["Python", "Web Scraping", "Selenium", "CSV"],
      image: null,
      github: "https://github.com/yourusername/event-parser",
      notebook: null,
      pdf: null,
      highlights: ["Automated data collection", "Custom query filters", "CSV export"]
    },
    {
      title: "Loan Risk Prediction Model",
      description: "ML pipeline for credit risk assessment with XGBoost. Includes data cleaning, EDA, StandardScaler pipeline, and cross-validation.",
      tags: ["XGBoost", "Scikit-learn", "Pipeline", "Cross-Validation"],
      image: null,
      github: "https://github.com/yourusername/loan-risk",
      notebook: "https://github.com/yourusername/loan-risk/blob/main/model.ipynb",
      pdf: null,
      highlights: ["307k loan applications", "122 features analyzed", "8% default prediction"]
    },
    {
      title: "Banking Credit Risk EDA",
      description: "Comprehensive EDA for banking sector with 307,511 loan applications. Analyzed 122 features to identify key risk factors and patterns.",
      tags: ["EDA", "Pandas", "Data Visualization", "Banking"],
      image: null,
      github: "https://github.com/yourusername/credit-risk-eda",
      notebook: "https://github.com/yourusername/credit-risk-eda/blob/main/eda.ipynb",
      pdf: "https://github.com/yourusername/credit-risk-eda/blob/main/report.pdf",
      highlights: ["91.93% repayment rate", "External scores analysis", "Age-risk correlation"]
    },
    {
      title: "PDF to CSV Converter",
      description: "Automated tool for extracting tabular data from PDF documents and converting to structured CSV format.",
      tags: ["Python", "PDF Parsing", "Automation", "Data Extraction"],
      image: null,
      github: "https://github.com/yourusername/pdf-to-csv",
      notebook: null,
      pdf: null,
      highlights: ["Batch processing", "Table detection", "Clean output"]
    },
    {
      title: "Market Basket Analysis",
      description: "Association rule mining using Apriori algorithm to discover product purchase patterns and cross-selling opportunities.",
      tags: ["Apriori", "Association Rules", "Python", "mlxtend"],
      image: null,
      github: "https://github.com/yourusername/market-basket",
      notebook: "https://github.com/yourusername/market-basket/blob/main/analysis.ipynb",
      pdf: null,
      highlights: ["Purchase patterns", "Cross-sell insights", "Rule mining"]
    },
    {
      title: "E-Commerce Product Aggregator",
      description: "Multi-platform parser combining eBay and Amazon data. Built with Streamlit for interactive product comparison and analysis.",
      tags: ["Streamlit", "Web Scraping", "Pandas", "GUI"],
      image: null,
      github: "https://github.com/yourusername/product-parser",
      notebook: null,
      pdf: null,
      highlights: ["Multi-platform scraping", "Price comparison", "Interactive dashboard"]
    }
  ];

  const techStack = {
    "Data & Analytics": ["Power BI", "Excel", "SQL", "PostgreSQL (PL/pgSQL)", "Pandas", "NumPy"],
    "Machine Learning": ["Scikit-learn", "XGBoost", "Computer Vision", "OCR", "Model Training"],
    "Development": ["Python", "C++", "Matplotlib", "GUI Development", "Web Scraping"],
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className={scrolled ? 'nav_header scrolled' : 'nav_header'}>
        <ul>
          {['About', 'Services', 'Projects', 'Tech Stack', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase().replace(' ', '-')}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-background">
          <div className="glow-blob glow-blob-1"></div>
          <div className="glow-blob glow-blob-2"></div>
        </div>
        
        <div className="hero-container">
          {/* Profile Image */}
          <div className="profile-container">
            <div className="profile-wrapper">
              <div className="profile-image">
                <img src={profilePicture} className="profile-initials"/>
              </div>
              <div className="availability-badge">
                <div className="status-dot"></div>
                <span>Available for Work</span>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles className="badge-icon" />
              CS Student • Data Wizard • Problem Solver
            </div>
            
            <h1 className="hero-title">
              Dmytro
              <span className="gradient-text"> Gnatyk</span>
            </h1>
            
            <p className="hero-subtitle">
              21-year-old tech enthusiast with 7 years in IT. I turn your data into revenue and your challenges into automated solutions.
            </p>

            <div className="mission-card">
              <p className="mission-title">💰 My Mission:</p>
              <p className="mission-text">
                Use the full power of Computer Science to <span className="highlight-text">increase money in your pocket</span> by creating perfect solutions for your business tasks.
              </p>
            </div>

            <div className="hero-buttons">
              <a href="#services" className="btn-primary">
                See What I Can Do
                <ArrowRight className="btn-icon" />
              </a>
              <a href="#contact" className="btn-secondary">
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <h2 className="section-title">
            Why <span className="gradient-text">Choose Me?</span>
          </h2>
          <p className="section-subtitle">
            Because numbers don't lie, and I speak their language fluently.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-emoji">🚀</div>
              <h3 className="feature-title">7+ Years Experience</h3>
              <p className="feature-text">Started at 14, obsessed with data ever since. Your data has more value than you think—let me show you.</p>
            </div>

            <div className="feature-card">
              <div className="feature-emoji">🎯</div>
              <h3 className="feature-title">Results-Driven</h3>
              <p className="feature-text">Focused on Data Mining, Data Science, and Machine Learning (especially Computer Vision) to deliver measurable ROI.</p>
            </div>

            <div className="feature-card">
              <div className="feature-emoji">⚡</div>
              <h3 className="feature-title">Full-Stack Skills</h3>
              <p className="feature-text">From analysis to deployment. I don't just crunch numbers—I build complete solutions that work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="section-container-wide">
          <h2 className="section-title">
            <span className="gradient-text">Services</span> That Print Money
          </h2>
          <p className="section-subtitle">
            Everything you need to turn data into decisions and decisions into dollars.
          </p>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="deliverables-list">
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="deliverable-item">
                      <Zap className="deliverable-icon" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-container-wide">
          <h2 className="section-title">
            Portfolio <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Real-world solutions that deliver measurable results
          </p>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                {project.image && (
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                )}
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  {project.highlights && (
                    <div className="project-highlights">
                      {project.highlights.map((highlight, i) => (
                        <div key={i} className="highlight-badge">
                          {highlight}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <Github className="link-icon" />
                        Code
                      </a>
                    )}
                    {project.notebook && (
                      <a href={project.notebook} target="_blank" rel="noopener noreferrer" className="project-link">
                        <Code2 className="link-icon" />
                        Notebook
                      </a>
                    )}
                    {project.pdf && (
                      <a href={project.pdf} target="_blank" rel="noopener noreferrer" className="project-link">
                        <Database className="link-icon" />
                        Report
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Tech Stack Section */}
      <section id="tech-stack" className="tech-section">
        <div className="section-container">
          <h2 className="section-title">
            Tech <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="section-subtitle">
            Tools I use to solve your biggest challenges
          </p>

          <div className="tech-grid">
            {Object.entries(techStack).map(([category, tools]) => (
              <div key={category} className="tech-category">
                <h3 className="tech-category-title">{category}</h3>
                <div className="tech-tags">
                  {tools.map((tool) => (
                    <span key={tool} className="tech-tag">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">
            Ready to <span className="gradient-text">Transform</span><br/>Your Data?
          </h2>
          <p className="contact-subtitle">
            Let's talk about how I can help you unlock hidden revenue, automate tedious tasks, and make data-driven decisions that actually matter.
          </p>
          
          <div className="contact-card">
            <p className="contact-card-title">Get in Touch</p>
            <div className="social-links">
              <a href="mailto:gnatykwork@gmail.com" className="social-link">
                <Mail className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/gnatykdm/" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin className="social-icon" />
              </a>
              <a href="https://github.com/gnatykdm" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github className="social-icon" />
              </a>
            </div>
          </div>

          <p className="footer-text">
            © 2024 Dmytro Gnatyk. Turning data into dollars, one project at a time.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;