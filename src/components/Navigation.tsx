import { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Shield, AlertTriangle, BookOpen, Users, BarChart3, Phone, User, Sun, Moon } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export function Navigation({ currentPage, onPageChange, isDarkMode, onToggleTheme }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Shield },
    { id: 'modules', label: 'Learning Modules', icon: BookOpen },
    { id: 'drills', label: 'Virtual Drills', icon: Users },
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'alerts', label: 'Emergency Alerts', icon: AlertTriangle },
    { id: 'about', label: 'About Us', icon: Phone },
  ];

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    setIsOpen(false);
  };

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-foreground tracking-tight leading-none">
                DisasterSafe Education
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block mt-0.5 tracking-wide">
                Empowering Schools for a Safer Tomorrow
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={currentPage === item.id ? "default" : "ghost"}
                  onClick={() => handleNavClick(item.id)}
                  className="flex items-center space-x-2 px-3 py-2"
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Button>
              );
            })}
          </div>

          {/* Auth Buttons, Theme Toggle and Mobile Menu */}
          <div className="flex items-center space-x-3">
            <Badge variant="outline" className="hidden sm:flex bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800">
              Live Alerts
            </Badge>
            
            {/* Theme Toggle */}
            <Button 
              variant="outline" 
              size="icon"
              onClick={onToggleTheme}
              className="hidden sm:flex"
              title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
            
            <Button variant="outline" onClick={() => handleNavClick('login')} className="hidden sm:flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Sign In</span>
            </Button>
            
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-lg text-foreground tracking-tight leading-none">
                        DisasterSafe Education
                      </span>
                      <span className="text-xs text-muted-foreground mt-0.5 tracking-wide">
                        Empowering Schools for a Safer Tomorrow
                      </span>
                    </div>
                  </div>
                  
                  {navigationItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Button
                        key={item.id}
                        variant={currentPage === item.id ? "default" : "ghost"}
                        onClick={() => handleNavClick(item.id)}
                        className="justify-start flex items-center space-x-3 w-full"
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </Button>
                    );
                  })}
                  
                  <div className="border-t pt-4 mt-6 space-y-3">
                    <Button 
                      variant="outline" 
                      onClick={onToggleTheme}
                      className="w-full flex items-center space-x-2"
                    >
                      {isDarkMode ? (
                        <>
                          <Sun className="w-4 h-4" />
                          <span>Light Mode</span>
                        </>
                      ) : (
                        <>
                          <Moon className="w-4 h-4" />
                          <span>Dark Mode</span>
                        </>
                      )}
                    </Button>
                    
                    <Button variant="outline" onClick={() => handleNavClick('login')} className="w-full flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>Sign In</span>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}