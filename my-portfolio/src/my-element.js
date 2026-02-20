import { LitElement, css, html } from 'lit'
import { icons } from './icons.js';


const sections = [
  { id: '#about', label: 'About' },
  { id: '#experience', label: 'Experience' },
  { id: '#education', label: 'Education' },
  { id: '#projects', label: 'Projects' }
];

const socials = [
  { name: 'github', label: 'GitHub', url: 'https://github.com/aladin20c' },
  { name: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/aladin-cheniour/' },
  //{ name: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/bchiang7/' },
  { name: 'goodreads', label: 'Goodreads', url: 'https://www.goodreads.com/user/show/101887216-aladin' }
];

const experiences = [
  {
    date: "2023 - Present",
    role: "Creative Developer",
    company: "Studio AI",
    companyLink: "https://example.com",
    description: "Designing and building immersive WebGL experiences and integrating computer vision models into real-time browser applications.",
    techs: ["Three.js", "WebGL", "TensorFlow.js", "Lit"]
  },
  {
    date: "2021 - 2023",
    role: "Software Engineering Intern",
    company: "TechNova",
    companyLink: "https://example.com",
    description: "Assisted in migrating legacy dashboard interfaces to modern Web Components. Optimized build pipelines to reduce deployment times.",
    techs: ["JavaScript", "HTML/CSS", "Webpack", "Python"]
  },
  {
    date: "2020 - 2021",
    role: "Freelance Web Developer",
    company: "Self-Employed",
    companyLink: "#",
    description: "Developed responsive, accessible portfolio sites and e-commerce platforms for local artists and small businesses.",
    techs: ["React", "Tailwind CSS", "Figma"]
  }
];

/**
 * THE Main title Eleemnt.
 */
export class NameHeader extends LitElement {

  static properties = {
    name: { type: String },
    url: { type: String }
  };

  static styles = css`
    a {
      color: var(--slate-200);
      cursor: pointer;
      font-size: 2.5rem;
      font-weight: 700;
      letter-spacing: -1.2px;
      line-height: 2.5rem;
      text-decoration: none;
      display: block;
    }

    /* Tablet Styles */
    @media (min-width: 768px) {
      a {
        font-size: 2.8rem;
        line-height: 2.25rem;
      }
    }

    /* Desktop Styles */
    @media (min-width: 1024px) {
      a {
        font-size: 3rem;
        line-height: 2.25rem;
      }
    }
  `;

  constructor() {
    super();
    this.name = 'Alaeddine Cheniour';
    this.url = '/';
  }

  render() {
    return html`<a href="${this.url}" >${this.name}</a>`;
  }

}
customElements.define('name-header', NameHeader);



/**
 * Navigation Item on the left
 */
export class NavItem extends LitElement {
  static properties = {
    href: { type: String },
    text: { type: String },
    active: { type: Boolean, reflect: true }
  };

  static styles = css`
    :host { display: block; }
    
    .nav-link {
      display: flex;
      align-items: center;
      padding: 10px 0;
      text-decoration: none;
    }

    .nav-indicator {
      width: 32px;
      height: 1px;
      background-color: var(--slate-600);
      margin-right: 16px;
      transition: all 0.3s ease;
    }

    .nav-text {
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--slate-500);
    }

    /* Hover States: The indicator grows and the text brightens */
    .nav-link:hover .nav-indicator,
    :host([active]) .nav-indicator {
      width: 64px;
      background-color: var(--slate-200);
    }

    .nav-link:hover .nav-text,
    :host([active]) .nav-text {
      color: var(--slate-200);
    }
  `;

  render() {
    return html`
      <a class="nav-link" href="${this.href}">
        <span class="nav-indicator"></span>
        <span class="nav-text">${this.text}</span>
      </a>
    `;
  }
}
customElements.define('nav-item', NavItem);


/**
 * Navigation Menu
 */

export class NavMenu extends LitElement {
  static properties = {
    activeSection: { type: String }
  };

  static styles = css`
    nav ul {
      margin: 48px 0 24px 0;
      width: max-content;
      padding: 0;
      list-style-type: none;
    }
  `;

  constructor() {
    super();
    // Default to the first section or check the URL hash
    this.activeSection = window.location.hash || '#about';
  }

  // This function runs when any link is clicked
  handleNavClick(e, id) {
    this.activeSection = id;
    // The component will now re-render, updating which nav-item is active
  }

  render() {

    return html`
      <nav aria-label="Main navigation">
        <ul>
          ${sections.map(section => html`
            <li>
              <nav-item 
                href="${section.id}" 
                text="${section.label}"
                ?active="${this.activeSection === section.id}"
                @click="${(e) => this.handleNavClick(e, section.id)}">
              </nav-item>
            </li>
          `)}
        </ul>
      </nav>
    `;
  }
}
customElements.define('nav-menu', NavMenu);









/**
 * Social Link Item
 */
export class SocialLink extends LitElement {
  static properties = {
    href : {type : String},
    label : {type : String},
    iconName: { type: String }
  };

  static styles = css`
    .social-link {
      margin-top: 30px;
      margin-right: 20px;
      font-size: 0.5rem;
      flex-shrink: 0;
      display: block;
      color: inherit;
      text-decoration: none;
    }
    .social-link:hover { color: var(--slate-200); }
    .social-icon { width: 24px; height: 24px; }
  `;

  render() {
    console.log(icons[this.iconName])
    return html`
      <a class="social-link" href="${this.href}" aria-label="${this.label}">
        ${icons[this.iconName]}
      </a>
    `;
  }
}
customElements.define('social-link', SocialLink);


/**
 * Social Link List
 */
export class SocialList extends LitElement {
  static styles = css`
    
    ul {
      display: flex;
      margin-top: auto;
      align-items: center;
      margin-left: 4px;
      padding: 0;
    }
    li {
      list-style-type: none;
    }
    /* We can style the internal icon size from here ::slotted(social-link), social-link {--icon-size: 24px;} */
  `;

  render() {
    return html`
      <ul>
        ${socials.map(s => html`
          <li>
            <social-link 
              .iconName="${s.name}" 
              .label="${s.label}" 
              .href="${s.url}">
            </social-link>
          </li>
        `)}
      </ul>
    `;
  }
}
customElements.define('social-list', SocialList);





/**
 * MAin Part - MAin Part - MAin Part - MAin Part
 */

export class PortfolioSection extends LitElement {
  static properties = {
    id: { type: String },
    title: { type: String }
  };

  static styles = css`
    :host {
      display: block;
    }

    section {
      margin-bottom: 64px;
      scroll-margin-top: 64px;
    }

    @media (min-width: 768px) {
      section {
        margin-bottom: 96px;
      }
    }

    @media (min-width: 1024px) {
      section {
        margin-bottom: 144px;
        scroll-margin-top: 96px;
      }
    }

    .section-header {
      position: sticky;
      top: 0;
      z-index: 20;
      margin: 0 -24px;
      width: 100vw;
      background-color: rgba(15, 23, 42, 0.75);
      padding: 20px 24px;
      backdrop-filter: blur(8px);
    }

    @media (min-width: 768px) {
      .section-header {
        margin: 0 -48px;
        padding: 20px 48px;
      }
    }

    @media (min-width: 1024px) {
      .section-header {
        display: none;
        visibility: hidden;
        opacity: 0;
      }
    }

    .section-title {
      font-size: 0.875rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--slate-200);
    }
  `;

  render() {
    return html`
      <section id="${this.id}">
        <div class="section-header">
          <h2 class="section-title">${this.title}</h2>
        </div>
        <div class="section-content">
          <slot></slot>
        </div>
      </section>
    `;
  }


}
customElements.define('portfolio-section', PortfolioSection);



/**
 * Tech Tag
 */
export class TechTag extends LitElement {
  static properties = {
    name: { type: String }
  };

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      border-radius: 9999px;
      background-color: var(--teal-400-tr);
      padding: 4px 12px;
      font-size: 0.75rem;
      font-weight: 500;
      line-height: 1.25;
      color: var(--teal-300);
      margin-right: 6px;
      margin-top: 8px;
    }
  `;

  render() {
    return html`${this.name}`;
  }
}
customElements.define('tech-tag', TechTag);





/**
 * Experience Card
 */

export class ExperienceCard extends LitElement {
  static properties = {
    date: { type: String },
    role: { type: String },
    company: { type: String },
    companyLink: { type: String },
    description: { type: String },
    techs: { type: Array }
  };

  static styles = css`
    :host { 
      cursor: pointer;
    }

    li {
      position: relative;
      padding: 0;
      margin-bottom: 48px;
    }
      
    /* 3. The Highlight Box Behind the Card */
    .hover-background {
      position: absolute;
      inset: -16px -16px -16px -16px;
      z-index: 0;
      border-radius: 6px;
      transition: all 0.3s ease;
      display: none;
    }

    @media (min-width: 1024px) {
      .hover-background {
        display: block;
        inset: -24px -24px -24px -24px;
      }
    }

    /* When hovering the LI, show the background box */
    li:hover .hover-background {
      background-color: rgba(30, 41, 59, 0.5); /* Slate-800 with opacity */
      box-shadow: inset 0 1px 0 0 rgba(148, 163, 184, 0.1);
      filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04));
    }
    
    .experience-grid {
      display: grid;
      padding-bottom: 4px;
      transition: all 0.3s ease;
      position: relative;
    }

    @media (min-width: 640px) {
      .experience-grid {
        grid-template-columns: repeat(8, minmax(0, 1fr));
        gap: 32px;
      }
    }

    @media (min-width: 768px) {
      .experience-grid {
        gap: 16px;
      }
    }

    .experience-date {
      padding: 0;
      z-index: 10;
      margin-bottom: 8px;
      margin-top: 4px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--slate-500);
    }


    @media (min-width: 640px) {
      .experience-date {
        grid-column: span 2 / span 2;
      }
    }

    .experience-content {
      padding: 0;
      margin: 0;
      z-index: 10;
    }

    @media (min-width: 640px) {
      .experience-content {
        grid-column: span 6 / span 6;
      }
    }

    .experience-title {
      margin: 0;
      font-weight: 500;
      line-height: 1.25;
      color: var(--slate-200);
    }

    .experience-link {
      display: inline-flex;
      align-items: baseline;
      font-weight: 500;
      line-height: 1.5;
      color: var(--slate-200);
      text-decoration: none;
      font-size: 1rem;
    }


    li:hover .experience-link,
    li:focus-visible .experience-link {
      color: var(--teal-300);
    }

    .experience-company {
      display: inline-block;
    }

    .experience-link svg {
      display: inline-block;
      height: 16px;
      width: 16px;
      flex-shrink: 0;
      transition: transform 0.3s ease;
      margin-left: 4px;
      transform: translateY(1px);
    }

    li:hover svg,
    li:focus-visible svg {
      transform: translate(-1px, -1px);
    }

    .experience-description {
      margin-top: 8px;
      font-size: 0.875rem;
      line-height: 1.5;
    }

    .tech-list {
      display: flex;
      flex-wrap: wrap;
      margin-top: 8px;
    }

    
    
  `;

  handleHostClick(event) {
    if (!event.target.closest('a')) {
      window.open(this.companyLink, '_blank', 'noopener,noreferrer');
    }
  }

  render() {
    return html`
    <li @click=${this.handleHostClick} >
      <div class="hover-background"></div>
      <div class="experience-grid">
        <div class="experience-date">${this.date}</div>
        
        <div class="experience-content">
          <h3 class="experience-title">
            <a href="${this.companyLink}" class="experience-link" target="_blank" rel="noopener noreferrer">
              <span class="experience-company">${this.company}</span>
              ${icons["arrow"]}
            </a>
          </h3>
          
          <div class="experience-description">
            ${this.description}
          </div>
          
          <div class="tech-list">
            ${this.techs ? this.techs.map(tech => html`<tech-tag name="${tech}"></tech-tag>`) : ''}
          </div>
        </div>
      </div>
    </li>  
    `;
  }
}
customElements.define('experience-card', ExperienceCard);




export class ExperienceList extends LitElement {

  // We define the data directly in the class
  constructor() {
    super();
  }

  static styles = css`
    /* 1. Reset the list styles */
    ul {
      list-style: none;
      padding: 0;
    }

    /* 2. The Group Hover Logic */
    /* When hovering over the UL, dim ALL LI items */
    ul:hover experience-card {
      opacity: 0.5;
    }
    
    /* But keep the specific LI being hovered at full opacity */
    ul experience-card:hover {
      opacity: 1 !important;
    }
  `;

  render() {
    return html`
      <ul>
        ${experiences.map(exp => html`
          <experience-card 
              .date="${exp.date}"
              .role="${exp.role}"
              .company="${exp.company}"
              .companyLink="${exp.companyLink}"
              .description="${exp.description}"
              .techs="${exp.techs}">
          </experience-card>
        `)}
      </ul>
    `;
  }
}
customElements.define('experience-list', ExperienceList);