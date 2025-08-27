import { useState } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/layout/navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, Filter, Grid, List, Star, Clock, Download, Eye, Heart, ArrowUpRight } from 'lucide-react'

const mockProjects = [
  {
    id: 1,
    title: 'AI-Powered Smart Traffic Management System',
    description: 'Complete IoT-based traffic management solution using computer vision and machine learning algorithms.',
    branch: 'Computer Science Engineering',
    price: 2499,
    rating: 4.8,
    reviews: 124,
    downloads: 456,
    author: 'Raj Patel',
    college: 'IIT Mumbai',
    tags: ['AI/ML', 'IoT', 'Computer Vision', 'Python'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    isFeatured: true,
    deliveryTime: '2-3 days'
  },
  {
    id: 2,
    title: 'Automated Solar Panel Cleaning Robot',
    description: 'Mechanical design and prototype of an autonomous robot for cleaning solar panels with efficiency tracking.',
    branch: 'Mechanical Engineering',
    price: 1899,
    rating: 4.6,
    reviews: 89,
    downloads: 234,
    author: 'Priya Sharma',
    college: 'NIT Delhi',
    tags: ['Robotics', 'Automation', 'Solar Energy', 'CAD'],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop',
    isFeatured: false,
    deliveryTime: '3-4 days'
  },
  {
    id: 3,
    title: 'Smart Home Automation using ESP32',
    description: 'Complete IoT solution for home automation with voice control, mobile app, and energy monitoring.',
    branch: 'Electronics & Communication',
    price: 1299,
    rating: 4.7,
    reviews: 156,
    downloads: 789,
    author: 'Arjun Singh',
    college: 'VIT Vellore',
    tags: ['IoT', 'ESP32', 'Mobile App', 'Voice Control'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    isFeatured: true,
    deliveryTime: '1-2 days'
  },
  {
    id: 4,
    title: 'Earthquake Resistant Building Design',
    description: 'Structural analysis and design of earthquake-resistant buildings using advanced materials and techniques.',
    branch: 'Civil Engineering',
    price: 3299,
    rating: 4.9,
    reviews: 67,
    downloads: 123,
    author: 'Neha Gupta',
    college: 'IIT Chennai',
    tags: ['Structural Analysis', 'AutoCAD', 'STAAD Pro', 'Seismic Design'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
    isFeatured: false,
    deliveryTime: '4-5 days'
  }
]

const branches = [
  'All Branches',
  'Computer Science Engineering',
  'Electronics & Communication',
  'Mechanical Engineering',
  'Civil Engineering',
  'Electrical Engineering',
  'Information Technology'
]

const priceRanges = [
  'All Prices',
  'Under ₹1000',
  '₹1000 - ₹2000',
  '₹2000 - ₹3000',
  'Above ₹3000'
]

interface User {
  name: string
  email: string
  branch: string
  college: string
  avatar?: string
}

const mockUser: User = {
  name: 'John Doe',
  email: 'john@example.com',
  branch: 'Computer Science Engineering',
  college: 'IIT Delhi',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
}

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedBranch, setSelectedBranch] = useState('All Branches')
  const [selectedPrice, setSelectedPrice] = useState('All Prices')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (projectId: number) => {
    setFavorites(prev => 
      prev.includes(projectId)
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    )
  }

  const filteredProjects = mockProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesBranch = selectedBranch === 'All Branches' || project.branch === selectedBranch
    
    let matchesPrice = true
    if (selectedPrice !== 'All Prices') {
      switch (selectedPrice) {
        case 'Under ₹1000':
          matchesPrice = project.price < 1000
          break
        case '₹1000 - ₹2000':
          matchesPrice = project.price >= 1000 && project.price <= 2000
          break
        case '₹2000 - ₹3000':
          matchesPrice = project.price > 2000 && project.price <= 3000
          break
        case 'Above ₹3000':
          matchesPrice = project.price > 3000
          break
      }
    }
    
    return matchesSearch && matchesBranch && matchesPrice
  })

  return (
    <div className="min-h-screen bg-background">
      <Navbar user={mockUser} />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="glass-card p-6 hover-elevate">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold gradient-text mb-2">
                  Welcome back, {mockUser.name}!
                </h1>
                <p className="text-muted-foreground">
                  Discover amazing projects from talented students across India
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex gap-3">
                <Button variant="glass-primary" asChild>
                  <a href="/my-orders">My Orders</a>
                </Button>
                <Button variant="hero" asChild>
                  <a href="/request-project">Request Custom Project</a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="glass-card p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              {/* Search and Filters */}
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search projects, technologies, keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="glass-subtle pl-10"
                  />
                </div>
                
                <Select value={selectedBranch} onValueChange={setSelectedBranch}>
                  <SelectTrigger className="glass-subtle w-[200px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="glass-card">
                    {branches.map(branch => (
                      <SelectItem key={branch} value={branch}>{branch}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedPrice} onValueChange={setSelectedPrice}>
                  <SelectTrigger className="glass-subtle w-[150px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="glass-card">
                    {priceRanges.map(range => (
                      <SelectItem key={range} value={range}>{range}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'glass-primary' : 'ghost'}
                  size="icon"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'glass-primary' : 'ghost'}
                  size="icon"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">
            Found {filteredProjects.length} projects
            {selectedBranch !== 'All Branches' && ` in ${selectedBranch}`}
          </h2>
        </div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-6'
          }
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`glass-card hover-elevate group cursor-pointer ${
                viewMode === 'list' ? 'flex flex-row overflow-hidden' : ''
              }`}>
                <div className={viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}>
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
                        viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'
                      }`}
                    />
                    {project.isFeatured && (
                      <Badge className="absolute top-3 left-3 bg-gradient-primary text-white">
                        Featured
                      </Badge>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`absolute top-3 right-3 h-8 w-8 glass-subtle ${
                        favorites.includes(project.id) ? 'text-red-500' : ''
                      }`}
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleFavorite(project.id)
                      }}
                    >
                      <Heart className={`h-4 w-4 ${favorites.includes(project.id) ? 'fill-current' : ''}`} />
                    </Button>
                  </div>
                </div>

                <CardContent className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {project.branch}
                      </Badge>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-2xl font-bold text-primary">₹{project.price.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">
                        <Clock className="inline h-3 w-3 mr-1" />
                        {project.deliveryTime}
                      </div>
                    </div>
                  </div>

                  <CardDescription className="mb-4 line-clamp-2">
                    {project.description}
                  </CardDescription>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{project.rating}</span>
                        <span>({project.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        <span>{project.downloads}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <div className="font-medium">{project.author}</div>
                      <div className="text-muted-foreground">{project.college}</div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                      <Button variant="glass-primary" size="sm">
                        Buy Now
                        <ArrowUpRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="glass-card p-8 max-w-md mx-auto">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search criteria or explore different categories
              </p>
              <Button
                variant="glass-primary"
                onClick={() => {
                  setSearchQuery('')
                  setSelectedBranch('All Branches')
                  setSelectedPrice('All Prices')
                }}
              >
                Clear Filters
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}