import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Shield, BookOpen, Users, BarChart3, AlertTriangle, MapPin, Trophy, Clock, CheckCircle } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: BookOpen,
      title: "Interactive Learning Modules",
      description: "Region-specific disaster education with gamified experiences",
      color: "bg-blue-50 text-blue-700",
    },
    {
      icon: Users,
      title: "Virtual Drills",
      description: "Practice emergency procedures in safe, simulated environments",
      color: "bg-green-50 text-green-700",
    },
    {
      icon: BarChart3,
      title: "Admin Dashboard",
      description: "Track preparedness metrics and drill participation",
      color: "bg-purple-50 text-purple-700",
    },
    {
      icon: AlertTriangle,
      title: "Real-time Alerts",
      description: "Instant disaster warnings and emergency communications",
      color: "bg-orange-50 text-orange-700",
    },
  ];

  const disasters = [
    { name: "Earthquake Safety", region: "Seismic Zones", icon: "🏗️" },
    { name: "Flood Preparedness", region: "Coastal Areas", icon: "🌊" },
    { name: "Fire Evacuation", region: "All Regions", icon: "🔥" },
    { name: "Cyclone Response", region: "Eastern Coast", icon: "🌪️" },
  ];

  const testimonials = [
    {
      quote: "DisasterSafe Education has transformed how our students understand emergency preparedness.",
      author: "Dr. Priya Sharma",
      role: "Principal, Delhi Public School",
      avatar: "👩‍🏫"
    },
    {
      quote: "The gamified approach makes learning about disasters engaging rather than frightening.",
      author: "Rajesh Kumar",
      role: "Safety Officer, Gujarat Education Board",
      avatar: "👨‍💼"
    },
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-600 hover:bg-blue-600 text-white border-blue-500">
                  🇮🇳 Designed for Indian Schools & Colleges
                </Badge>
                <h1 className="text-4xl lg:text-6xl leading-tight">
                  Empowering Schools for a <span className="text-yellow-300">Safer Tomorrow</span>
                </h1>
                <p className="text-xl text-blue-100 max-w-lg">
                  Comprehensive disaster preparedness education system with interactive learning, virtual drills, and real-time emergency communications.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
                  onClick={() => onNavigate('modules')}
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explore Modules
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3"
                  onClick={() => onNavigate('drills')}
                >
                  <Users className="w-5 h-5 mr-2" />
                  Start a Drill
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-blue-100">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>500+ Schools</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  <span>50,000+ Students Trained</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1593442808882-775dfcd90699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzY2hvb2wlMjBzdHVkZW50cyUyMGNsYXNzcm9vbSUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NTgzODAwNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Indian students in classroom"
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-background">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">Comprehensive Disaster Education Platform</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines modern technology with proven educational methods to create engaging, effective disaster preparedness training.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${feature.color} mb-4`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Disaster Types Section */}
      <div className="bg-card py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4">Region-Specific Disaster Preparedness</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about disasters most relevant to your geographical region with tailored safety protocols and response strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {disasters.map((disaster, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => onNavigate('modules')}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{disaster.icon}</div>
                  <h3 className="text-lg mb-2">{disaster.name}</h3>
                  <div className="flex items-center justify-center space-x-1 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{disaster.region}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-2">500+</div>
              <div className="text-blue-200">Schools Enrolled</div>
            </div>
            <div>
              <div className="text-4xl mb-2">50K+</div>
              <div className="text-blue-200">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl mb-2">2K+</div>
              <div className="text-blue-200">Teachers Certified</div>
            </div>
            <div>
              <div className="text-4xl mb-2">15+</div>
              <div className="text-blue-200">States Covered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">Trusted by Educators Across India</h2>
          <p className="text-xl text-gray-600">See what educators are saying about DisasterSafe Education</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 border-0 shadow-lg">
              <CardContent className="space-y-6">
                <p className="text-lg text-gray-700 italic">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-6">Ready to Make Your School Safer?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Join thousands of schools across India in building a culture of disaster preparedness and resilience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3"
              onClick={() => onNavigate('login')}
            >
              Get Started Today
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3"
              onClick={() => onNavigate('about')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}