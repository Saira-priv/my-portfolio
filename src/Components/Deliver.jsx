const steps = [
  { id: 1, title: 'Listen', desc: 'I start by understanding your idea, your goals and who the website is for.' },
  { id: 2, title: 'PLan', desc: 'I sketch the layout, choose colours and fonts, and organise the content.' },
  { id: 3, title: 'Design', desc: 'I turn the plan into a clean, responsive design that looks good on every screen.' },
  { id: 4, title: 'build', desc: 'I code the pages with HTML, CSS and JavaScript, using AI tools to work faster and smarter.' },
  { id: 5, title: 'Test', desc: 'I check everything on phone and laptop, fix bugs and polish the details.' },
  { id: 6, title: 'Deliver', desc: 'I publish the site with GitHub and Vercel, share the live link and stay available for updates.' },
]

function Deliver() {
  return (
    <section id="deliver" className="section">
      <h2 className="title">How I Deliver</h2>
      <div className="deliver-grid">
        {steps.map(step => (
          <div key={step.id} className="deliver-card project-card">
            <span className="deliver-num">{step.id}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Deliver