import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AlertTriangle, MapPin, Clock, Phone, MessageCircle, Radio, Volume2, Bell, Filter, ExternalLink } from 'lucide-react';

export function EmergencyAlertsPage() {
  const [selectedRegion, setSelectedRegion] = useState('all');

  const activeAlerts = [
    {
      id: 1,
      type: 'Cyclone Warning',
      severity: 'high',
      region: 'Odisha Coastal Districts',
      message: 'Severe cyclonic storm expected to make landfall within 48 hours. Schools advised to suspend classes and initiate evacuation procedures.',
      timeIssued: '2 hours ago',
      source: 'IMD (India Meteorological Department)',
      instructions: [
        'Suspend all school activities immediately',
        'Ensure all students reach home safely',
        'Secure school property and important documents',
        'Monitor weather updates continuously'
      ]
    },
    {
      id: 2,
      type: 'Flood Alert',
      severity: 'medium',
      region: 'Kerala - Kottayam District',
      message: 'Heavy rainfall causing water logging in low-lying areas. Schools in affected areas should remain vigilant.',
      timeIssued: '6 hours ago',
      source: 'State Disaster Management Authority',
      instructions: [
        'Monitor local water levels',
        'Prepare evacuation routes',
        'Keep emergency supplies ready',
        'Maintain communication with authorities'
      ]
    },
    {
      id: 3,
      type: 'Heat Wave Warning',
      severity: 'medium',
      region: 'Rajasthan, Haryana, Delhi',
      message: 'Extreme heat wave conditions expected. Schools advised to adjust timings and ensure adequate hydration facilities.',
      timeIssued: '12 hours ago',
      source: 'National Disaster Management Authority',
      instructions: [
        'Modify school timings (early morning hours)',
        'Ensure adequate drinking water supply',
        'Avoid outdoor activities during peak hours',
        'Watch for heat-related illness symptoms'
      ]
    }
  ];

  const recentAlerts = [
    { type: 'Earthquake', region: 'Himachal Pradesh', magnitude: '4.2', time: '1 day ago', severity: 'low' },
    { type: 'Landslide Warning', region: 'Uttarakhand', time: '2 days ago', severity: 'medium' },
    { type: 'Fire Incident', region: 'Maharashtra', time: '3 days ago', severity: 'high' },
    { type: 'Heavy Rainfall', region: 'Tamil Nadu', time: '4 days ago', severity: 'medium' },
  ];

  const communicationChannels = [
    {
      name: 'Emergency Hotline',
      contact: '1078',
      type: 'phone',
      description: 'NDMA National Emergency Helpline',
      available: '24/7'
    },
    {
      name: 'WhatsApp Alerts',
      contact: 'Join Group',
      type: 'message',
      description: 'Real-time alerts and updates',
      available: 'Active'
    },
    {
      name: 'All India Radio',
      contact: 'FM 102.6',
      type: 'radio',
      description: 'Emergency broadcasts and updates',
      available: 'Live'
    },
    {
      name: 'Doordarshan News',
      contact: 'DD National',
      type: 'tv',
      description: 'Official government announcements',
      available: 'Live'
    }
  ];

  const emergencyContacts = [
    { service: 'Fire Department', number: '101', description: 'Fire emergencies and rescue' },
    { service: 'Police', number: '100', description: 'Security and law enforcement' },
    { service: 'Ambulance', number: '108', description: 'Medical emergencies' },
    { service: 'Disaster Helpline', number: '1078', description: 'Disaster management support' },
    { service: 'Women Helpline', number: '1091', description: 'Women safety and support' },
    { service: 'Child Helpline', number: '1098', description: 'Child protection services' }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'border-red-500 bg-red-50';
      case 'medium': return 'border-yellow-500 bg-yellow-50';
      case 'low': return 'border-blue-500 bg-blue-50';
      default: return 'border-gray-500 bg-gray-50';
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-600 text-white';
      case 'medium': return 'bg-yellow-600 text-white';
      case 'low': return 'bg-blue-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Header */}
      <div className="bg-card border-b border-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div>
              <h1 className="text-3xl lg:text-4xl mb-2">Emergency Alerts & Communication</h1>
              <p className="text-xl text-gray-600">Real-time disaster alerts and emergency communication hub</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge className="bg-red-100 text-red-800 border-red-200 animate-pulse">
                <Bell className="w-4 h-4 mr-1" />
                3 Active Alerts
              </Badge>
              <Button variant="outline" className="flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <span>Filter by Region</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="active" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="active">Active Alerts</TabsTrigger>
            <TabsTrigger value="recent">Recent History</TabsTrigger>
            <TabsTrigger value="communication">Communication</TabsTrigger>
            <TabsTrigger value="contacts">Emergency Contacts</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-6">
            {/* Region Filter */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-gray-600" />
                    <span>Filter by Region:</span>
                  </div>
                  <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                    <SelectTrigger className="w-[250px]">
                      <SelectValue placeholder="Select Region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Regions</SelectItem>
                      <SelectItem value="north">Northern States</SelectItem>
                      <SelectItem value="south">Southern States</SelectItem>
                      <SelectItem value="east">Eastern States</SelectItem>
                      <SelectItem value="west">Western States</SelectItem>
                      <SelectItem value="central">Central States</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Active Alerts */}
            <div className="space-y-6">
              {activeAlerts.map((alert) => (
                <Card key={alert.id} className={`border-l-4 ${getSeverityColor(alert.severity)}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <AlertTriangle className="w-6 h-6 text-red-600" />
                          <h3 className="text-xl font-semibold">{alert.type}</h3>
                          <Badge className={getSeverityBadge(alert.severity)}>
                            {alert.severity.toUpperCase()}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{alert.region}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{alert.timeIssued}</span>
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Share Alert
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-700">{alert.message}</p>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 text-blue-900">Immediate Actions Required:</h4>
                        <ul className="space-y-1 text-sm text-blue-800">
                          {alert.instructions.map((instruction, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="text-blue-600 mt-1">•</span>
                              <span>{instruction}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="text-sm text-gray-600">
                        <strong>Source:</strong> {alert.source}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recent" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Alert History</CardTitle>
                <CardDescription>Past alerts and notifications from the last 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAlerts.map((alert, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <AlertTriangle className={`w-5 h-5 ${alert.severity === 'high' ? 'text-red-600' : alert.severity === 'medium' ? 'text-yellow-600' : 'text-blue-600'}`} />
                        <div>
                          <div className="font-medium">{alert.type}</div>
                          <div className="text-sm text-gray-600 flex items-center space-x-2">
                            <MapPin className="w-3 h-3" />
                            <span>{alert.region}</span>
                            {alert.type === 'Earthquake' && alert.magnitude && (
                              <>
                                <span>•</span>
                                <span>Magnitude {alert.magnitude}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">{alert.time}</div>
                        <Badge variant="outline" className={getSeverityBadge(alert.severity)}>
                          {alert.severity}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="communication" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Real-time Communication */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>Communication Channels</span>
                  </CardTitle>
                  <CardDescription>Stay connected during emergencies</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {communicationChannels.map((channel, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div className="flex items-center space-x-3">
                          {channel.type === 'phone' && <Phone className="w-5 h-5 text-green-600" />}
                          {channel.type === 'message' && <MessageCircle className="w-5 h-5 text-blue-600" />}
                          {channel.type === 'radio' && <Radio className="w-5 h-5 text-purple-600" />}
                          {channel.type === 'tv' && <Volume2 className="w-5 h-5 text-red-600" />}
                          <div>
                            <div className="font-medium">{channel.name}</div>
                            <div className="text-sm text-gray-600">{channel.description}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-mono text-sm">{channel.contact}</div>
                          <Badge variant="secondary" className="text-xs">{channel.available}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Group Communication */}
              <Card>
                <CardHeader>
                  <CardTitle>Group Communication</CardTitle>
                  <CardDescription>Send messages to school community</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Input placeholder="Type your emergency message..." />
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select recipient group" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Users</SelectItem>
                        <SelectItem value="students">Students Only</SelectItem>
                        <SelectItem value="teachers">Teachers & Staff</SelectItem>
                        <SelectItem value="parents">Parents/Guardians</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" size="sm">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Send SMS
                    </Button>
                    <Button variant="outline" size="sm">
                      <Phone className="w-4 h-4 mr-2" />
                      Voice Call
                    </Button>
                  </div>
                  
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Send Emergency Alert
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Emergency Broadcast */}
            <Card>
              <CardHeader>
                <CardTitle>Emergency Broadcast System</CardTitle>
                <CardDescription>Live updates and official announcements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                    <span className="font-medium text-red-900">LIVE: Emergency Broadcast Active</span>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-red-800">
                      "All educational institutions in the cyclone-affected areas are advised to remain closed until further notice. 
                      Evacuation procedures should be implemented immediately in coastal districts."
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-red-700">
                        Broadcasting from: National Emergency Response Centre
                      </div>
                      <Button size="sm" variant="outline" className="border-red-300 text-red-700">
                        <Volume2 className="w-4 h-4 mr-2" />
                        Listen Live
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contacts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Emergency Contact Directory</span>
                </CardTitle>
                <CardDescription>Quick access to emergency services across India</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {emergencyContacts.map((contact, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                      <div className="text-center">
                        <div className="font-medium text-lg mb-1">{contact.service}</div>
                        <div className="text-2xl font-mono font-bold text-blue-600 mb-2">{contact.number}</div>
                        <div className="text-sm text-gray-600 mb-3">{contact.description}</div>
                        <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                          <Phone className="w-4 h-4 mr-2" />
                          Call Now
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Regional Contacts */}
            <Card>
              <CardHeader>
                <CardTitle>Regional Emergency Contacts</CardTitle>
                <CardDescription>State and district-specific emergency services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Disaster Management Authorities</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>NDMA (National)</span>
                        <span className="font-mono">011-26701700</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Delhi DDMA</span>
                        <span className="font-mono">011-23378958</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Mumbai MCGM</span>
                        <span className="font-mono">022-22694725</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Chennai Corporation</span>
                        <span className="font-mono">044-25619493</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Educational Authorities</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Ministry of Education</span>
                        <span className="font-mono">011-23383155</span>
                      </div>
                      <div className="flex justify-between">
                        <span>CBSE Emergency</span>
                        <span className="font-mono">011-23212229</span>
                      </div>
                      <div className="flex justify-between">
                        <span>UGC Helpline</span>
                        <span className="font-mono">011-23604446</span>
                      </div>
                      <div className="flex justify-between">
                        <span>AICTE Emergency</span>
                        <span className="font-mono">011-29581000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}