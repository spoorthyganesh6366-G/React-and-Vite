
import { useState } from 'react'
import './App.css'

const interests = [
  {
    title: 'Travel',
    category: 'ADVENTURE',
    description: 'Collecting memories from beautiful places.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700',
  },
  {
    title: 'Reading',
    category: 'HOBBIES',
    description: 'Finding new worlds between the pages.',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=700',
  },
  {
    title: 'Photography',
    category: 'CREATIVITY',
    description: 'Capturing little moments of life.',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=700',
  },
  {
    title: 'Music',
    category: 'ENTERTAINMENT',
    description: 'Every song has its own story.',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=700',
  },
  {
    title: 'Nature',
    category: 'LIFESTYLE',
    description: 'Peace, flowers and beautiful views.',
    image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=700',
  },
  {
    title: 'Art',
    category: 'CREATIVITY',
    description: 'Expressing imagination through colours.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=700',
  },
]

function App() {
  const [activeCategory, setActiveCategory] = useState('ALL')
  const [selected, setSelected] = useState(null)

  const categories = ['ALL', ...new Set(interests.map(item => item.category))]

  const filteredInterests = activeCategory === 'ALL'
    ? interests
    : interests.filter(item => item.category === activeCategory)

  return (
    <div className="app">
      <nav className="navbar">
        <h2>Spoorthi<span>.</span></h2>
        <a href="#about">About Me</a>
      </nav>

      <header className="hero">
        <p className="eyebrow">WELCOME TO MY LITTLE WORLD</p>
        <h1>Hey, I'm <span>Spoorthi!</span></h1>
        <p className="hero-text">
          A little collection of things I love, places I dream of
          and moments that make life beautiful.
        </p>
        <a href="#explore" className="explore-btn">Explore My World ↓</a>
      </header>

      <main id="explore" className="gallery-section">
        <p className="eyebrow">MY FAVOURITE THINGS</p>
        <h2>Things I <span>Love</span></h2>
        <p className="section-text">A glimpse into my interests and passions.</p>

        <div className="filters">
          {categories.map(category => (
            <button
              key={category}
              className={activeCategory === category ? 'active' : ''}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery">
          {filteredInterests.map(item => (
            <article className="interest-card" key={item.title}
              onClick={() => setSelected(item)}>
              <img src={item.image} alt={item.title} />
              <div className="card-content">
                <p>{item.category}</p>
                <h3>{item.title}</h3>
                <span>{item.description}</span>
              </div>
            </article>
          ))}
        </div>
      </main>

      <section id="about" className="about">
        <p className="eyebrow">A LITTLE ABOUT ME</p>
        <h2>Life is made of little <span>moments.</span></h2>
        <p>
          I'm Spoorthi! I enjoy discovering new things, being creative
          and making memories. This space is a small reflection of
          everything that inspires me.
        </p>
      </section>

      <footer>
        Made with ♡ by Spoorthi
      </footer>

      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelected(null)}>×</button>
            <img src={selected.image} alt={selected.title} />
            <p>{selected.category}</p>
            <h2>{selected.title}</h2>
            <span>{selected.description}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
