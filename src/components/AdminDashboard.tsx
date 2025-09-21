import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Alert, AlertDescription } from './ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Users, BookOpen, AlertTriangle, Calendar, TrendingUp, Download, Send, Settings, Phone } from 'lucide-react';

export function AdminDashboard() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');

  // Mock data for charts
  const moduleCompletionData = [
    { name: 'Earthquake Safety', completed: 85, total: 100 },
    { name: 'Fire Evacuation', completed: 92, total: 100 },
    { name: 'Flood Response', completed: 67, total: 100 },
    { name: 'First Aid', completed: 78, total: 100 },
    { name: 'Communication', completed: 45, total: 100 },
  ];

  const drillParticipationData = [
    { name: 'Class 1', participation: 95 },
    { name: 'Class 2', participation: 88 },
    { name: 'Class 3', participation: 92 },
    { name: 'Class 4', participation: 85 },
    { name: 'Class 5', participation: 90 },
    { name: 'Class 6', participation: 87 },
  ];

  const preparednessLevelData = [
    { name: 'Excellent', value: 35, color: '#16a34a' },
    { name: 'Good', value: 45, color: '#3b82f6' },
    { name: 'Needs Improvement', value: 20, color: '#f59e0b' },
  ];

  const weeklyProgressData = [
    { week: 'Week 1', modules: 45, drills: 12 },
    { week: 'Week 2', modules: 52, drills: 15 },
    { week: 'Week 3', modules: 48, drills: 18 },
    { week: 'Week 4', modules: 65, drills: 22 },
  ];

  const emergencyContacts = [
    { name: 'Local Fire Department', number: '101', type: 'Emergency' },
    { name: 'Police Station', number: '100', type: 'Emergency' },
    { name: 'Ambulance Service', number: '108', type: 'Medical' },
    { name: 'NDMA Helpline', number: '1078', type: 'Disaster' },
    { name: 'District Collector', number: '+91-99XXX-XXXXX', type: 'Administrative' },
  ];

  const recentAlerts = [
    { type: 'Weather Warning', message: 'Heavy rainfall expected in next 24 hours', severity: 'medium', time: '2 hours ago' },
    { type: 'Drill Reminder', message: 'Monthly fire drill scheduled for tomorrow', severity: 'low', time: '1 day ago' },
    { type: 'System Update', message: 'New earthquake safety module available', severity: 'low', time: '3 days ago' },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Header */}
      <div className="bg-card border-b border-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div>
              <h1 className="text-3xl lg:text-4xl mb-2">Admin Dashboard</h1>
              <p className="text-xl text-gray-600">Monitor school-wide disaster preparedness and safety metrics</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Export Report</span>
              </Button>
              <Button className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600">
                <Send className="w-4 h-4" />
                <span>Send Alert</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl">1,247</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+12</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Modules Completed</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl">3,842</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+248</span> this week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Drills Conducted</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl">67</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+5</span> this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Preparedness Score</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl">87%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+5%</span> from last quarter
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Module Completion Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Module Completion by Type</CardTitle>
                  <CardDescription>Percentage of students who completed each module</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={moduleCompletionData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="completed" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Preparedness Level Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Overall Preparedness Level</CardTitle>
                  <CardDescription>Distribution of students by preparedness assessment</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={preparednessLevelData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {preparednessLevelData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Class-wise Drill Participation */}
            <Card>
              <CardHeader>
                <CardTitle>Drill Participation by Class</CardTitle>
                <CardDescription>Percentage of students participating in emergency drills</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={drillParticipationData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="participation" fill="#16a34a" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            {/* Weekly Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Weekly Progress Tracking</CardTitle>
                <CardDescription>Module completions and drill participation over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={weeklyProgressData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="modules" stroke="#3b82f6" strokeWidth={2} name="Modules Completed" />
                    <Line type="monotone" dataKey="drills" stroke="#16a34a" strokeWidth={2} name="Drills Conducted" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Detailed Performance Metrics */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Classes</CardTitle>
                  <CardDescription>Based on module completion and drill scores</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { class: 'Class 5A', score: 94, improvement: '+7%' },
                      { class: 'Class 4B', score: 91, improvement: '+5%' },
                      { class: 'Class 6A', score: 89, improvement: '+3%' },
                      { class: 'Class 3A', score: 87, improvement: '+8%' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium">{item.class}</div>
                          <div className="text-sm text-gray-600">Overall Score: {item.score}%</div>
                        </div>
                        <Badge className="bg-green-100 text-green-800">{item.improvement}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Areas for Improvement</CardTitle>
                  <CardDescription>Focus areas based on performance data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { area: 'Communication Protocols', completion: 45, priority: 'High' },
                      { area: 'Flood Response', completion: 67, priority: 'Medium' },
                      { area: 'First Aid Training', completion: 78, priority: 'Low' },
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{item.area}</span>
                          <Badge variant={item.priority === 'High' ? 'destructive' : item.priority === 'Medium' ? 'default' : 'secondary'}>
                            {item.priority}
                          </Badge>
                        </div>
                        <Progress value={item.completion} className="h-2" />
                        <div className="text-sm text-gray-600">{item.completion}% completion rate</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-6">
            {/* Recent Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5" />
                  <span>Recent Alerts & Notifications</span>
                </CardTitle>
                <CardDescription>System alerts and emergency notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAlerts.map((alert, index) => (
                    <Alert key={index} className={getSeverityColor(alert.severity)}>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="font-medium">{alert.type}</div>
                            <div className="text-sm mt-1">{alert.message}</div>
                          </div>
                          <span className="text-xs text-gray-500 ml-4">{alert.time}</span>
                        </div>
                      </AlertDescription>
                    </Alert>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Alert Controls */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Send Emergency Alert</CardTitle>
                  <CardDescription>Broadcast important safety information to all users</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Send Emergency Alert
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Drill Reminder
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Custom Message
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Alert Settings</CardTitle>
                  <CardDescription>Configure alert preferences and recipients</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full">
                    <Settings className="w-4 h-4 mr-2" />
                    Notification Settings
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Users className="w-4 h-4 mr-2" />
                    Manage Recipients
                  </Button>
                  <Button variant="outline" className="w-full">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Alert Templates
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="contacts" className="space-y-6">
            {/* Emergency Contacts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Emergency Contact Directory</span>
                </CardTitle>
                <CardDescription>Quick access to emergency services and key contacts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {emergencyContacts.map((contact, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <div className="font-medium">{contact.name}</div>
                        <div className="text-sm text-gray-600">{contact.type}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono text-lg">{contact.number}</div>
                        <Button size="sm" className="mt-1 bg-green-600 hover:bg-green-700">
                          <Phone className="w-3 h-3 mr-1" />
                          Call
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Communication Tools */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mass Communication</CardTitle>
                  <CardDescription>Send messages to all stakeholders</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Message All Students
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Users className="w-4 h-4 mr-2" />
                    Message Teachers & Staff
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Notify Parents/Guardians
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>External Coordination</CardTitle>
                  <CardDescription>Connect with external emergency services</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Contact NDMA
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Local Administration
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Users className="w-4 h-4 mr-2" />
                    District Education Office
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}