import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Search, MapPin, Clock, Star, Trophy, Play, Volume2, Filter } from 'lucide-react';

interface LearningModulesPageProps {
  onNavigate: (page: string) => void;
}

export function LearningModulesPage({ onNavigate }: LearningModulesPageProps) {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const regions = [
    { value: 'all', label: 'All Regions' },
    { value: 'coastal', label: 'Coastal Areas' },
    { value: 'seismic', label: 'Seismic Zones' },
    { value: 'flood-prone', label: 'Flood Prone Areas' },
    { value: 'cyclone', label: 'Cyclone Regions' },
    { value: 'drought', label: 'Drought Areas' },
  ];

  const modules = [
    {
      id: 1,
      title: "Earthquake Safety Fundamentals",
      description: "Learn drop, cover, and hold techniques for earthquake situations",
      duration: "45 mins",
      difficulty: "Beginner",
      region: "seismic",
      regionLabel: "Seismic Zones",
      progress: 75,
      rating: 4.8,
      students: 1250,
      image: "https://images.unsplash.com/photo-1663086799993-8abf18491260?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXJ0aHF1YWtlJTIwZGlzYXN0ZXIlMjBwcmVwYXJlZG5lc3MlMjBzYWZldHl8ZW58MXx8fHwxNzU4MzgwMDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badges: ["Interactive", "Audio Enabled"],
      completed: false,
    },
    {
      id: 2,
      title: "Flood Response and Evacuation",
      description: "Essential skills for flood preparation and safe evacuation procedures",
      duration: "60 mins",
      difficulty: "Intermediate",
      region: "coastal",
      regionLabel: "Coastal Areas",
      progress: 30,
      rating: 4.9,
      students: 980,
      image: "https://images.unsplash.com/photo-1702397874679-ffffe2f74671?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9vZCUyMGVtZXJnZW5jeSUyMHJlc3BvbnNlJTIwaW5kaWF8ZW58MXx8fHwxNzU4MzgwMDYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badges: ["Regional Specific", "Video Content"],
      completed: false,
    },
    {
      id: 3,
      title: "Fire Safety and Evacuation Drills",
      description: "Complete guide to fire prevention and emergency evacuation",
      duration: "50 mins",
      difficulty: "Beginner",
      region: "all",
      regionLabel: "All Regions",
      progress: 100,
      rating: 4.7,
      students: 2100,
      image: "https://images.unsplash.com/photo-1697952433745-ae6701979f93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwZXZhY3VhdGlvbiUyMGRyaWxsJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzU4MzgwMDYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badges: ["Completed", "Certificate"],
      completed: true,
    },
    {
      id: 4,
      title: "Cyclone Preparedness",
      description: "Understanding cyclone warnings and protection strategies",
      duration: "40 mins",
      difficulty: "Intermediate",
      region: "cyclone",
      regionLabel: "Cyclone Regions",
      progress: 0,
      rating: 4.6,
      students: 750,
      image: "https://images.unsplash.com/photo-1681887199694-43443fa36ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjByZXNwb25zZSUyMHRlYW0lMjBpbmRpYXxlbnwxfHx8fDE3NTgzODAwNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badges: ["New", "Interactive"],
      completed: false,
    },
    {
      id: 5,
      title: "First Aid and Emergency Response",
      description: "Basic first aid skills for disaster situations",
      duration: "35 mins",
      difficulty: "Beginner",
      region: "all",
      regionLabel: "All Regions",
      progress: 60,
      rating: 4.9,
      students: 1800,
      image: "https://images.unsplash.com/photo-1681887199694-43443fa36ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjByZXNwb25zZSUyMHRlYW0lMjBpbmRpYXxlbnwxfHx8fDE3NTgzODAwNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badges: ["Practical", "Hands-on"],
      completed: false,
    },
    {
      id: 6,
      title: "Communication During Emergencies",
      description: "How to maintain contact and share information during disasters",
      duration: "30 mins",
      difficulty: "Beginner",
      region: "all",
      regionLabel: "All Regions",
      progress: 0,
      rating: 4.5,
      students: 650,
      image: "https://images.unsplash.com/photo-1593442808882-775dfcd90699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzY2hvb2wlMjBzdHVkZW50cyUyMGNsYXNzcm9vbSUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NTgzODAwNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badges: ["Communication", "Technology"],
      completed: false,
    }
  ];

  const filteredModules = modules.filter(module => {
    const matchesRegion = selectedRegion === 'all' || module.region === selectedRegion;
    const matchesSearch = module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         module.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Header */}
      <div className="bg-card border-b border-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div>
              <h1 className="text-3xl lg:text-4xl mb-2">Learning Modules</h1>
              <p className="text-xl text-gray-600">Interactive disaster preparedness education for all regions</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                <Trophy className="w-4 h-4 mr-1" />
                285 Points Earned
              </Badge>
              <Badge className="bg-green-100 text-green-800 border-green-200">
                <Star className="w-4 h-4 mr-1" />
                3 Certificates
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search modules..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select Region" />
                </SelectTrigger>
                <SelectContent>
                  {regions.map((region) => (
                    <SelectItem key={region.value} value={region.value}>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{region.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button variant="outline" className="flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <span>More Filters</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((module) => (
            <Card key={module.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <ImageWithFallback
                  src={module.image}
                  alt={module.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getDifficultyColor(module.difficulty)}>
                    {module.difficulty}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-black/60 text-white px-2 py-1 rounded-md text-sm flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{module.duration}</span>
                  </div>
                </div>
                {module.completed && (
                  <div className="absolute inset-0 bg-green-500/90 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Trophy className="w-12 h-12 mx-auto mb-2" />
                      <span>Completed!</span>
                    </div>
                  </div>
                )}
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-lg leading-tight">{module.title}</CardTitle>
                  <div className="flex items-center space-x-1 text-yellow-500 ml-2">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm text-gray-600">{module.rating}</span>
                  </div>
                </div>
                <CardDescription className="text-sm">{module.description}</CardDescription>
                
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{module.regionLabel}</span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4">
                  {/* Progress */}
                  {module.progress > 0 && (
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{module.progress}%</span>
                      </div>
                      <Progress value={module.progress} className="h-2" />
                    </div>
                  )}

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1">
                    {module.badges.map((badge, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {badge === "Audio Enabled" && <Volume2 className="w-3 h-3 mr-1" />}
                        {badge === "Video Content" && <Play className="w-3 h-3 mr-1" />}
                        {badge}
                      </Badge>
                    ))}
                  </div>

                  {/* Students count */}
                  <div className="text-sm text-gray-600">
                    {module.students.toLocaleString()} students enrolled
                  </div>

                  {/* Action Button */}
                  <Button 
                    className="w-full" 
                    variant={module.completed ? "outline" : "default"}
                    onClick={() => {
                      // Simulate module start
                      alert(`Starting module: ${module.title}`);
                    }}
                  >
                    {module.completed ? "Review Module" : module.progress > 0 ? "Continue Learning" : "Start Module"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredModules.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl mb-2">No modules found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}