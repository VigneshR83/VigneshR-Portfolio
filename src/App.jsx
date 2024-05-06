import React from 'react';
import './App.css';
import Header from './components/header.jsx'; // Capitalized component name
import Home from './components/home.jsx'; // Capitalized component name
import Skills from './components/skills.jsx'; // Capitalized component name
import About from './components/about.jsx'; // Capitalized component name
import Contact from './components/contact.jsx'; // Capitalized component name
import Footer from './components/footer.jsx'; // Capitalized component name

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
