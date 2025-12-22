import React, { useState, useEffect, useMemo, useRef } from 'react';
import './App.css';

/**
 * Dashboard Card component
 * Renders a simple card with placeholder title and value.
 */
// PUBLIC_INTERFACE
function Card({ title, value }) {
  /** This is a public component representing a dashboard card with placeholder content. */
  return (
    <div className="card" role="group" aria-label={title}>
      <div className="card-title">{title}</div>
      <div className="card-value">{value}</div>
    </div>
  );
}

/**
 * Floating microphone button with click sound feedback.
 * Uses an embedded audio element and data URI for a short click sound.
 */
// PUBLIC_INTERFACE
function MicButton() {
  /** This is a public component rendering a floating mic button with accessible labeling and sound. */
  const audioRef = useRef(null);

  const handleClick = () => {
    // play short embedded click sound
    if (audioRef.current) {
      // Rewind to start before playing to allow rapid re-clicks
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <>
      {/* Very short click sound (data URI wav beep) */}
      <audio
        ref={audioRef}
        aria-hidden="true"
        preload="auto"
        src="data:audio/wav;base64,UklGRmQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABYAAABcYWN0dWFsbHktc2hvcnQtc25hcC1jbGljay1iZWVwAAAAAABkYXRhAAAAAAB/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f38="
      />
      <button
        type="button"
        className="mic-btn"
        aria-label="Activate microphone"
        onClick={handleClick}
      >
        <span aria-hidden="true">🎤</span>
      </button>
    </>
  );
}

/**
 * Dashboard component rendering 25 responsive cards in a grid that
 * always fits within the viewport without scrollbars.
 *
 * Strategy:
 * - We force exactly 5 grid rows using CSS. The layout adapts the number
 *   of columns based on width via CSS clamp and minmax with fractional units.
 * - Grid rows use 1fr each with total grid container height = 100vh minus padding.
 * - Body and root overflow are hidden to guarantee no scrollbars.
 * - Media queries adjust CSS variables for min column width to encourage
 *   fewer columns on smaller screens while still fitting 25 items (kept visible by scaling).
 */
// PUBLIC_INTERFACE
function Dashboard() {
  /** This is a public component rendering the full 25-card dashboard grid with no scrollbars. */
  // Generate 25 placeholder cards
  const cards = useMemo(
    () => Array.from({ length: 25 }, (_, i) => ({ id: i + 1, title: `Card ${i + 1}`, value: `--` })),
    []
  );

  return (
    <main className="dashboard-root" role="main" aria-label="25-card dashboard">
      <div className="topbar" role="banner" aria-label="Dashboard header">
        <h1 className="app-title">Responsive Dashboard</h1>
        <div className="spacer" />
      </div>

      <section className="grid-wrap" aria-label="Card grid">
        {cards.map((c) => (
          <Card key={c.id} title={c.title} value={c.value} />
        ))}
      </section>

      <MicButton />
    </main>
  );
}

// PUBLIC_INTERFACE
function App() {
  /** This is the App entry that renders the Dashboard as the main view and keeps theme support. */
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <div className="App">
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>

      <Dashboard />
    </div>
  );
}

export default App;
