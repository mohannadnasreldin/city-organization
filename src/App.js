import React from 'react';
import Header from '../src/components/Header';
import ActivitySection from '../src/components/ActivitySection';
import Footer from '../src/components/Footer';
import AboutSection from './components/AboutSection';
import DonateSection from './components/DonateSection';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ActivitySection />
        <AboutSection />
        <DonateSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
