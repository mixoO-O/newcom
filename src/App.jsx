import { NextUIProvider } from '@nextui-org/react';
import AppNavbar from './components/AppNavbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <NextUIProvider>
      <AppNavbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Benefits />
      </main>
      <Footer />
    </NextUIProvider>
  );
}

export default App;
