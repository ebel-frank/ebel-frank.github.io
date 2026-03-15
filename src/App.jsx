import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
    return (
        <div className="app">
            <Header />
            <main className="container">
                <Hero />
                <About />
                <Projects />
                <Resume />
                {/* <Blog /> */}
                <Contact />
            </main>

            <footer style={{
                padding: '5rem 0',
                textAlign: 'center',
                borderTop: '1px solid var(--border)',
                marginTop: '5rem'
            }}>
                <p className="mono">© {new Date().getFullYear()} Frank Ebeledike.</p>
            </footer>
        </div>
    );
}

export default App;
