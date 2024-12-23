import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import ActivitySection from './components/ActivitySection';
import AboutSection from './components/AboutSection';
import DonateSection from './components/DonateSection';
import ActivityDetails from './components/ActivityDetails';
import GoalsSection from './components/GoalsSection';

const App = () => {
  return (
    <Router>
      {/* Ensure the page scrolls to the top on route change */}
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <ActivitySection />
                <GoalsSection />
                <AboutSection />
                <DonateSection />
              </>
            } />
            <Route path="/activity/:id" element={<ActivityDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
