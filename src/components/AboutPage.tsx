import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Shield, Target, Users, Award, Heart, Globe, CheckCircle, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Chief Disaster Management Expert",
      description: "Former NDMA official with 15+ years in disaster preparedness",
      avatar: "👨‍💼"
    },
    {
      name: "Priya Sharma",
      role: "Education Technology Lead",
      description: "Specialized in gamified learning and educational platforms",
      avatar: "👩‍💻"
    },
    {
      name: "Ankit Patel",
      role: "Regional Safety Coordinator",
      description: "Expert in region-specific disaster patterns across India",
      avatar: "👨‍🔬"
    },
    {
      name: "Meera Singh",
      role: "Community Outreach Director",
      description: "Building partnerships with schools and educational institutions",
      avatar: "👩‍🏫"
    }
  ];

  const partners = [
    {
      name: "National Disaster Management Authority (NDMA)",
      role: "Primary Government Partner",
      description: "Policy guidance and disaster preparedness standards"
    },
    {
      name: "Ministry of Education, Government of India",
      role: "Educational Implementation Partner",
      description: "Integration with national education curriculum"
    },
    {
      name: "UN Office for Disaster Risk Reduction (UNDRR)",
      role: "International Standards Partner",
      description: "Global best practices and Sendai Framework alignment"
    },
    {
      name: "Indian Red Cross Society",
      role: "Training and Response Partner",
      description: "First aid training and emergency response protocols"
    },
    {
      name: "State Education Departments",
      role: "Implementation Partners",
      description: "Regional customization and local deployment"
    }
  ];

  const achievements = [
    { number: "500+", label: "Schools Enrolled", icon: "🏫" },
    { number: "50,000+", label: "Students Trained", icon: "👨‍🎓" },
    { number: "2,000+", label: "Teachers Certified", icon: "👩‍🏫" },
    { number: "15+", label: "States Covered", icon: "🗺️" },
    { number: "95%", label: "Satisfaction Rate", icon: "⭐" },
    { number: "24/7", label: "Support Available", icon: "🕒" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Every decision prioritizes the safety and well-being of students, teachers, and school communities."
    },
    {
      icon: Users,
      title: "Inclusive Education",
      description: "Making disaster preparedness accessible to all students regardless of background or abilities."
    },
    {
      icon: Globe,
      title: "Cultural Sensitivity",
      description: "Respecting and incorporating India's diverse cultural contexts in our educational approach."
    },
    {
      icon: Award,
      title: "Evidence-Based",
      description: "Using scientific research and proven methodologies to ensure effective learning outcomes."
    },
    {
      icon: Heart,
      title: "Community Focus",
      description: "Building strong partnerships with schools, families, and local communities."
    },
    {
      icon: Target,
      title: "Continuous Improvement",
      description: "Constantly evolving our platform based on feedback and emerging best practices."
    }
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl">About DisasterSafe Education</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Empowering India's educational institutions with comprehensive disaster preparedness training, 
              real-time emergency communication, and evidence-based safety protocols.
            </p>
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
              onClick={() => onNavigate('home')}
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 text-lg leading-relaxed">
                To create a safer learning environment across India by providing comprehensive disaster preparedness 
                education that is accessible, engaging, and culturally relevant to diverse school communities.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 text-lg leading-relaxed">
                A resilient India where every school is prepared for disasters, every student knows how to respond 
                to emergencies, and communities work together to build a culture of safety and preparedness.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work in creating safer educational environments across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Making a difference in disaster preparedness across India</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{achievement.icon}</div>
                <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">{achievement.number}</div>
                <div className="text-sm text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to making schools safer across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-blue-600">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">Our Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborating with leading organizations to ensure comprehensive disaster preparedness
            </p>
          </div>

          <div className="space-y-6">
            {partners.map((partner, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div>
                          <h3 className="text-lg font-semibold mb-1">{partner.name}</h3>
                          <Badge variant="secondary" className="mb-2">{partner.role}</Badge>
                          <p className="text-gray-600">{partner.description}</p>
                        </div>
                        <CheckCircle className="w-6 h-6 text-green-600 mt-2 lg:mt-0" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              Have questions or want to learn more about implementing DisasterSafe Education in your institution?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">For general inquiries and support</p>
              <p className="font-mono text-blue-600">info@disastersafe.edu.in</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak with our education specialists</p>
              <p className="font-mono text-green-600">+91 11 2345 6789</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">National headquarters location</p>
              <p className="text-orange-600">New Delhi, India</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3"
              onClick={() => onNavigate('login')}
            >
              Join Our Mission
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}