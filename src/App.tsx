import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { WelcomePage } from './components/WelcomePage';
import { HomePage } from './components/HomePage';
import { LearningModulesPage } from './components/LearningModulesPage';
import { VirtualDrillsPage } from './components/VirtualDrillsPage';
import { AdminDashboard } from './components/AdminDashboard';
import { EmergencyAlertsPage } from './components/EmergencyAlertsPage';
import { AboutPage } from './components/AboutPage';
import { LoginPage } from './components/LoginPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(prefersDark);
    }
  }, []);

  // Save theme preference and apply class
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'welcome':
        return <WelcomePage onNavigate={setCurrentPage} />;
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'modules':
        return <LearningModulesPage onNavigate={setCurrentPage} />;
      case 'drills':
        return <VirtualDrillsPage onNavigate={setCurrentPage} />;
      case 'dashboard':
        return <AdminDashboard />;
      case 'alerts':
        return <EmergencyAlertsPage />;
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />;
      case 'login':
        return <LoginPage onNavigate={setCurrentPage} />;
      default:
        return <WelcomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {currentPage !== 'login' && currentPage !== 'welcome' && (
        <Navigation 
          currentPage={currentPage} 
          onPageChange={setCurrentPage}
          isDarkMode={isDarkMode}
          onToggleTheme={toggleTheme}
        />
      )}
      {renderPage()}
    </div>
  );
}