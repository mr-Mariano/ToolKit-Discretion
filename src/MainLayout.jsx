
import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="px-0 w-full flex flex-grow flex-col items-center justify-between m-0 text-neutral-700 dark:text-white min-h-screen">
      {/* Fondo dinámico */}
      <div className="
        fixed inset-0 z-[-2] min-h-screen
        bg-white dark:bg-neutral-950
        bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]
        dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]
      "></div>

      {/* Nav */}
      <Nav />

      {/* Dynamic Content */}
        <main className="flex-grow">
            {children}
        </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;