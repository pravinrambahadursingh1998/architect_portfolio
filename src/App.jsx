import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Team from './components/Team';
import EstimatorAndReviews from './components/EstimatorAndReviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('studio_mithun_theme') || 'dark';
  });

  const [prefilledProject, setPrefilledProject] = useState('');
  const [prefilledScope, setPrefilledScope] = useState('');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('studio_mithun_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleSelectProjectForInquiry = (projectTitle) => {
    setPrefilledProject(projectTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEstimateApply = (estimateSummary) => {
    setPrefilledScope(estimateSummary);
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Sections */}
      <main>
        {/* 1. Home / Hero */}
        <Hero />

        {/* 2. Expertise (Requested: Expertis) */}
        <Expertise />

        {/* 3. Projects */}
        <Projects onSelectProjectForInquiry={handleSelectProjectForInquiry} />

        {/* 4. Team */}
        <Team />

        {/* 5. Interactive Scope Estimator & Reviews */}
        <EstimatorAndReviews onEstimateApply={handleEstimateApply} />

        {/* 6. Contact */}
        <Contact
          prefilledProject={prefilledProject}
          prefilledScope={prefilledScope}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
