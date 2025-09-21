import { Button } from './ui/button';
import { Shield, ArrowRight } from 'lucide-react';

interface WelcomePageProps {
  onNavigate: (page: string) => void;
}

export function WelcomePage({ onNavigate }: WelcomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center">
      <div className="text-center text-white px-4 max-w-2xl">
        <div className="mb-8">
          <Shield className="w-24 h-24 mx-auto mb-6 text-yellow-300" />
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">
            Welcome to <span className="text-yellow-300">DisasterSafe</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Empowering Indian schools with comprehensive disaster preparedness education
          </p>
        </div>
        
        <Button 
          size="lg" 
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
          onClick={() => onNavigate('home')}
        >
          Enter Platform
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}