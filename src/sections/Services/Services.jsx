import { images } from '../../refs';

const Services = () => {
  return (
    <div className="services section" id="services">
      <div className="container flex justify-between mx-auto">
        <div className="services-info">
          <h1 className="sub-heading">My Services</h1>
          <h3 className="heading">Things I can do for my clients</h3>
          <p className="text">I develop websites and applications tailored to my client&apos;s specific instructions and requirements, ensuring a customized and responsive digital solution.</p>
          <div className="milestones">
            <div className="ml">
              <h2 className="number"><span data-target="5">0</span>+</h2>
              <h5><span>Years</span></h5>
            </div>
            <div className="ml">
              <h2 className="number"><span data-target="60">0</span>+</h2>
              <h5><span>Projects</span></h5>
            </div>
            <div className="ml">
              <h2 className="number"><span data-target="7">0</span>+</h2>
              <h5><span>Clients</span></h5>
            </div>
          </div>
          <div className="cta">
            <a href="mailto:abidalwassie@gmail.com" className="btn email">Hire me</a>
            <a href={images.email} download className="btn secondary-btn">Download CV</a>
          </div>
        </div>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="card-desc">
              <h3>Responsive UIs</h3>
              <p className="text">I offer responsive UIs, ensuring seamless user experiences across devices through innovative design, fluid layouts, and adaptability.</p>
            </div>
            <a href="test" className="btn secondary-btn">Read more</a>
          </div>
          
          <div className="service-card">
            <div className="card-desc">
              <h3>Backend Development</h3>
              <p className="text">I mainly use PHP with the Laravel framework and sometimes Node.js and use MySQL, MongoDB, Firestore for database management, I deliver scalable and efficient server-side solutions with a focus on clean, maintainable code.</p>
            </div>
            <a href="test" className="btn secondary-btn">Read more</a>
          </div>

          <div className="service-card">
            <div className="card-desc">
              <h3>Web Security Essentials</h3>
              <p className="text">I prioritize web security, implementing HTTPS, robust authentication, and protection against vulnerabilities. Proficient in securing user data, I follow best practices to ensure resilient and reliable web applications.</p>
            </div>
            <a href="test" className="btn secondary-btn">Read more</a>
          </div>

          <div className="service-card">
            <div className="card-desc">
              <h3>Latest Tech</h3>
              <p className="text">I leverage cutting-edge technologies in web development, staying at the forefront of industry advancements. From progressive frameworks to emerging tools, I ensure my work is innovative, efficient, and future-ready.</p>
            </div>
            <a href="test" className="btn secondary-btn">Read more</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Services
