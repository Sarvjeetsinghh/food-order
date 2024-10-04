const Careers = () => {
    return (
    <div className="App-car">
      <header className="header-car">
        <h1>Join Our Team at Food Order</h1>
        <p>We're looking for talented people to help us deliver the best food ordering experience.</p>
      </header>
      <main className="main-content">
        <section className="job-listings">
          <h2>Current Openings</h2>
          <div className="job-card">
            <h3>Frontend Developer</h3>
            <p>We are looking for a skilled frontend developer to join our team. Experience with React is required.</p>
            <button className="apply-btn">Apply Now</button>
          </div>
          <div className="job-card">
            <h3>Backend Developer</h3>
            <p>Join our backend team and help us build robust APIs and services. Experience with Node.js is a plus.</p>
            <button className="apply-btn">Apply Now</button>
          </div>
          <div className="job-card">
            <h3>UI/UX Designer</h3>
            <p>We're seeking a creative UI/UX designer to design intuitive and engaging user interfaces.</p>
            <button className="apply-btn">Apply Now</button>
          </div>
        </section>
      </main>
    </div>
  );
}

    
export default Careers;