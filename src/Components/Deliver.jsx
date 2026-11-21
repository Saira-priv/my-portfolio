const steps = [
  { id: 1, title: 'Understand', desc: 'Client ki requirements aur goals ko samajhna.' },
  { id: 2, title: 'Design', desc: 'Layout aur design plan karna, simple aur clean.' },
  { id: 3, title: 'Develop', desc: 'HTML, CSS, JavaScript aur React se build karna.' },
  { id: 4, title: 'Deliver', desc: 'Test karke time par final website dena.' },
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