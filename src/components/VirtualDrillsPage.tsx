import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Alert, AlertDescription } from './ui/alert';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play, Clock, Users, Award, AlertTriangle, CheckCircle, Timer, RotateCcw, Share2, Calendar } from 'lucide-react';

interface VirtualDrillsPageProps {
  onNavigate: (page: string) => void;
}

export function VirtualDrillsPage({ onNavigate }: VirtualDrillsPageProps) {
  const [activeDrill, setActiveDrill] = useState<string | null>(null);
  const [drillProgress, setDrillProgress] = useState(0);
  const [drillStep, setDrillStep] = useState(0);

  const drillTypes = [
    {
      id: 'earthquake',
      title: 'Earthquake Drill',
      description: 'Practice drop, cover, and hold procedures',
      duration: '5-8 minutes',
      participants: '1-30 students',
      difficulty: 'Beginner',
      image: 'https://images.unsplash.com/photo-1663086799993-8abf18491260?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXJ0aHF1YWtlJTIwZGlzYXN0ZXIlMjBwcmVwYXJlZG5lc3MlMjBzYWZldHl8ZW58MXx8fHwxNzU4MzgwMDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      steps: ['Alert Phase', 'Drop Action', 'Cover Position', 'Hold & Wait', 'Evacuation', 'Assembly Point'],
      lastScore: 85,
    },
    {
      id: 'fire',
      title: 'Fire Evacuation Drill',
      description: 'Orderly evacuation procedures and safety protocols',
      duration: '6-10 minutes',
      participants: '5-50 students',
      difficulty: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1697952433745-ae6701979f93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwZXZhY3VhdGlvbiUyMGRyaWxsJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzU4MzgwMDYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      steps: ['Alarm Detection', 'Alert Others', 'Evacuation Route', 'Exit Building', 'Assembly Point', 'Roll Call'],
      lastScore: 92,
    },
    {
      id: 'flood',
      title: 'Flood Response Drill',
      description: 'Preparation and evacuation for flood scenarios',
      duration: '8-12 minutes',
      participants: '10-40 students',
      difficulty: 'Advanced',
      image: 'https://images.unsplash.com/photo-1702397874679-ffffe2f74671?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9vZCUyMGVtZXJnZW5jeSUyMHJlc3BvbnNlJTIwaW5kaWF8ZW58MXx8fHwxNzU4MzgwMDYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      steps: ['Warning Phase', 'Preparation', 'Vertical Evacuation', 'Safe Zone', 'Communication', 'Rescue Protocol'],
      lastScore: null,
    },
    {
      id: 'lockdown',
      title: 'Security Lockdown Drill',
      description: 'Secure classroom and building procedures',
      duration: '4-6 minutes',
      participants: '1-25 students',
      difficulty: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1593442808882-775dfcd90699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzY2hvb2wlMjBzdHVkZW50cyUyMGNsYXNzcm9vbSUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NTgzODAwNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      steps: ['Alert Recognition', 'Secure Entry', 'Communication Silence', 'Safe Position', 'Wait for All Clear', 'Debrief'],
      lastScore: 78,
    }
  ];

  const recentDrills = [
    { date: '2025-01-15', type: 'Fire Evacuation', score: 92, participants: 28 },
    { date: '2025-01-10', type: 'Earthquake', score: 85, participants: 32 },
    { date: '2025-01-05', type: 'Lockdown', score: 78, participants: 25 },
  ];

  const startDrill = (drillId: string) => {
    setActiveDrill(drillId);
    setDrillProgress(0);
    setDrillStep(0);
    
    // Simulate drill progress
    const interval = setInterval(() => {
      setDrillProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
      
      setDrillStep(prev => {
        const drill = drillTypes.find(d => d.id === drillId);
        if (drill && prev < drill.steps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 1500);
  };

  const resetDrill = () => {
    setActiveDrill(null);
    setDrillProgress(0);
    setDrillStep(0);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const currentDrill = activeDrill ? drillTypes.find(d => d.id === activeDrill) : null;

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Header */}
      <div className="bg-card border-b border-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div>
              <h1 className="text-3xl lg:text-4xl mb-2">Virtual Drills</h1>
              <p className="text-xl text-gray-600">Practice emergency procedures in safe, simulated environments</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Schedule Drill</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2">
                <Share2 className="w-4 h-4" />
                <span>Share Results</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Active Drill Interface */}
      {activeDrill && currentDrill && (
        <div className="bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl mb-2">Active Drill: {currentDrill.title}</h2>
                <p className="text-blue-200">Follow the steps and complete each phase</p>
              </div>
              <Button 
                variant="outline" 
                onClick={resetDrill}
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset Drill
              </Button>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <Timer className="w-6 h-6" />
                  <span className="text-lg">Step {drillStep + 1} of {currentDrill.steps.length}</span>
                </div>
                <Badge className="bg-white text-blue-900 text-sm">
                  {drillProgress}% Complete
                </Badge>
              </div>

              <Progress value={drillProgress} className="h-3 mb-6" />
              
              <div className="bg-white rounded-lg p-6 text-gray-900">
                <h3 className="text-xl mb-2">{currentDrill.steps[drillStep]}</h3>
                <p className="text-gray-600 mb-4">
                  {drillStep === 0 && "The drill has begun. Pay attention to instructions and follow safety protocols."}
                  {drillStep === 1 && "Execute the primary safety action for this emergency type."}
                  {drillStep === 2 && "Move to the designated safe position or follow evacuation route."}
                  {drillStep === 3 && "Maintain safety position and await further instructions."}
                  {drillStep === 4 && "Proceed to assembly point in an orderly manner."}
                  {drillStep === 5 && "Drill complete. Await debriefing and assessment."}
                </p>
                
                {drillProgress === 100 && (
                  <Alert className="border-green-200 bg-green-50">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      Drill completed successfully! Your performance will be evaluated shortly.
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Drill Types */}
        {!activeDrill && (
          <>
            <div className="mb-8">
              <h2 className="text-2xl mb-6">Available Drills</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {drillTypes.map((drill) => (
                  <Card key={drill.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative">
                      <ImageWithFallback
                        src={drill.image}
                        alt={drill.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className={getDifficultyColor(drill.difficulty)}>
                          {drill.difficulty}
                        </Badge>
                      </div>
                      {drill.lastScore && (
                        <div className="absolute bottom-3 left-3">
                          <Badge className="bg-white/90 text-gray-900">
                            Last: {drill.lastScore}%
                          </Badge>
                        </div>
                      )}
                    </div>

                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{drill.title}</CardTitle>
                      <CardDescription>{drill.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{drill.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{drill.participants}</span>
                          </div>
                        </div>

                        <Button 
                          className="w-full" 
                          onClick={() => startDrill(drill.id)}
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Start Drill
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Drills */}
            <div className="mb-8">
              <h2 className="text-2xl mb-6">Recent Drill Results</h2>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="w-5 h-5" />
                    <span>Performance History</span>
                  </CardTitle>
                  <CardDescription>Track your improvement over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentDrills.map((drill, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <Award className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium">{drill.type} Drill</div>
                            <div className="text-sm text-gray-600">{drill.date} • {drill.participants} participants</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-600">{drill.score}%</div>
                          <div className="text-sm text-gray-600">Score</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Tips */}
            <div>
              <h2 className="text-2xl mb-6">Drill Guidelines</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Before Starting:</strong> Ensure all participants understand the drill objectives and safety guidelines.
                  </AlertDescription>
                </Alert>
                
                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>During Drill:</strong> Follow instructions carefully and maintain calm, orderly behavior throughout.
                  </AlertDescription>
                </Alert>
                
                <Alert>
                  <Award className="h-4 w-4" />
                  <AlertDescription>
                    <strong>After Completion:</strong> Review feedback and discuss areas for improvement with your team.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}