import './App.css'

const areas = [
  {
    title: 'Authentication',
    description: 'Sign-in, registration policy, and password recovery.',
  },
  {
    title: 'User management',
    description: 'Account profiles, roles, and account lifecycle.',
  },
  {
    title: 'Access control',
    description: 'Role-based routes and Firebase security rules.',
  },
]

function App() {
  return (
    <main className="page">
      <section className="welcome-card" aria-labelledby="page-title">
        <p className="eyebrow">MinSU Disciplinary System</p>
        <h1 id="page-title">User Management &amp; Access Control</h1>
        <p className="intro">
          Standalone workspace for the authentication and user-administration
          segment.
        </p>

        <div className="area-grid">
          {areas.map((area) => (
            <article className="area-card" key={area.title}>
              <h2>{area.title}</h2>
              <p>{area.description}</p>
            </article>
          ))}
        </div>

        <p className="setup-note">
          Configure your Firebase environment variables to begin implementation.
        </p>
      </section>
    </main>
  )
}

export default App
