import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Navbar } from '@/components/layout/navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Upload, X, FileText, DollarSign, Clock, Tag, AlertCircle } from 'lucide-react'

const branches = [
  'Computer Science Engineering',
  'Electronics & Communication',
  'Mechanical Engineering', 
  'Civil Engineering',
  'Electrical Engineering',
  'Information Technology',
  'Chemical Engineering',
  'Aerospace Engineering',
  'Biotechnology',
  'Automobile Engineering'
]

const urgencyOptions = [
  { value: 'low', label: 'Standard (7-14 days)', color: 'bg-green-500' },
  { value: 'medium', label: 'Priority (3-7 days)', color: 'bg-yellow-500' },
  { value: 'high', label: 'Urgent (1-3 days)', color: 'bg-red-500' }
]

interface FileUpload {
  id: string
  file: File
  name: string
  size: string
}

const mockUser = {
  name: 'John Doe',
  email: 'john@example.com',
  branch: 'Computer Science Engineering',
  college: 'IIT Delhi'
}

export default function ProjectRequest() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    branch: '',
    budget: '',
    deadline: '',
    urgency: '',
    requirements: [''],
    technologies: '',
    deliverables: ''
  })
  
  const [uploadedFiles, setUploadedFiles] = useState<FileUpload[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const addRequirement = () => {
    setFormData(prev => ({
      ...prev,
      requirements: [...prev.requirements, '']
    }))
  }

  const updateRequirement = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      requirements: prev.requirements.map((req, i) => i === index ? value : req)
    }))
  }

  const removeRequirement = (index: number) => {
    setFormData(prev => ({
      ...prev,
      requirements: prev.requirements.filter((_, i) => i !== index)
    }))
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    
    files.forEach(file => {
      const newFile: FileUpload = {
        id: Math.random().toString(36).substr(2, 9),
        file,
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(2) + ' MB'
      }
      setUploadedFiles(prev => [...prev, newFile])
    })
  }

  const removeFile = (id: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== id))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Project request data:', { ...formData, files: uploadedFiles })
    
    setIsLoading(false)
  }

  const estimatedBudget = formData.budget ? parseInt(formData.budget) : 0
  const platformFee = estimatedBudget * 0.1
  const totalCost = estimatedBudget + platformFee

  return (
    <div className="min-h-screen bg-background">
      <Navbar user={mockUser} />
      
      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold gradient-text mb-2">Request Custom Project</h1>
          <p className="text-muted-foreground">
            Describe your project requirements and get custom solutions from talented students
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                  <CardDescription>
                    Provide comprehensive details about your project requirements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Information */}
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="title" className="flex items-center gap-2">
                          <FileText className="h-4 w-4" />
                          Project Title
                        </Label>
                        <Input
                          id="title"
                          type="text"
                          value={formData.title}
                          onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                          className="glass-subtle"
                          placeholder="e.g., E-commerce Website with Payment Integration"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="description">Project Description</Label>
                        <Textarea
                          id="description"
                          value={formData.description}
                          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                          className="glass-subtle min-h-[120px]"
                          placeholder="Describe your project in detail. Include the problem you're solving, target audience, and key features you need..."
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="branch">Engineering Branch</Label>
                          <Select
                            value={formData.branch}
                            onValueChange={(value) => setFormData(prev => ({ ...prev, branch: value }))}
                          >
                            <SelectTrigger className="glass-subtle">
                              <SelectValue placeholder="Select branch" />
                            </SelectTrigger>
                            <SelectContent className="glass-card">
                              {branches.map((branch) => (
                                <SelectItem key={branch} value={branch}>
                                  {branch}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="budget" className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4" />
                            Budget Range (₹)
                          </Label>
                          <Input
                            id="budget"
                            type="number"
                            value={formData.budget}
                            onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                            className="glass-subtle"
                            placeholder="5000"
                            min="500"
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="deadline" className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            Deadline
                          </Label>
                          <Input
                            id="deadline"
                            type="date"
                            value={formData.deadline}
                            onChange={(e) => setFormData(prev => ({ ...prev, deadline: e.target.value }))}
                            className="glass-subtle"
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="urgency">Priority Level</Label>
                          <Select
                            value={formData.urgency}
                            onValueChange={(value) => setFormData(prev => ({ ...prev, urgency: value }))}
                          >
                            <SelectTrigger className="glass-subtle">
                              <SelectValue placeholder="Select urgency" />
                            </SelectTrigger>
                            <SelectContent className="glass-card">
                              {urgencyOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  <div className="flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full ${option.color}`} />
                                    {option.label}
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div>
                      <Label className="flex items-center gap-2 mb-3">
                        <Tag className="h-4 w-4" />
                        Specific Requirements
                      </Label>
                      <div className="space-y-3">
                        {formData.requirements.map((req, index) => (
                          <div key={index} className="flex gap-2">
                            <Input
                              value={req}
                              onChange={(e) => updateRequirement(index, e.target.value)}
                              className="glass-subtle"
                              placeholder={`Requirement ${index + 1}`}
                            />
                            {formData.requirements.length > 1 && (
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => removeRequirement(index)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        ))}
                        <Button
                          type="button"
                          variant="glass"
                          size="sm"
                          onClick={addRequirement}
                        >
                          Add Requirement
                        </Button>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <Label htmlFor="technologies">Preferred Technologies</Label>
                      <Input
                        id="technologies"
                        value={formData.technologies}
                        onChange={(e) => setFormData(prev => ({ ...prev, technologies: e.target.value }))}
                        className="glass-subtle"
                        placeholder="e.g., React, Node.js, MongoDB, Python, etc."
                      />
                    </div>

                    {/* Deliverables */}
                    <div>
                      <Label htmlFor="deliverables">Expected Deliverables</Label>
                      <Textarea
                        id="deliverables"
                        value={formData.deliverables}
                        onChange={(e) => setFormData(prev => ({ ...prev, deliverables: e.target.value }))}
                        className="glass-subtle"
                        placeholder="e.g., Source code, documentation, deployment guide, presentation, etc."
                      />
                    </div>

                    {/* File Upload */}
                    <div>
                      <Label>Reference Files (Optional)</Label>
                      <div className="mt-2">
                        <div className="border-2 border-dashed border-glass-border rounded-lg p-6 text-center glass-subtle">
                          <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                          <p className="text-sm text-muted-foreground mb-2">
                            Upload wireframes, mockups, or reference documents
                          </p>
                          <input
                            type="file"
                            multiple
                            onChange={handleFileUpload}
                            className="hidden"
                            id="file-upload"
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
                          />
                          <Button
                            type="button"
                            variant="glass"
                            size="sm"
                            onClick={() => document.getElementById('file-upload')?.click()}
                          >
                            Choose Files
                          </Button>
                        </div>
                        
                        {uploadedFiles.length > 0 && (
                          <div className="mt-4 space-y-2">
                            {uploadedFiles.map((file) => (
                              <div key={file.id} className="flex items-center justify-between p-2 glass-subtle rounded">
                                <div className="flex items-center gap-2">
                                  <FileText className="h-4 w-4 text-muted-foreground" />
                                  <span className="text-sm">{file.name}</span>
                                  <Badge variant="secondary" className="text-xs">{file.size}</Badge>
                                </div>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeFile(file.id)}
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Submitting Request...' : 'Submit Project Request'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Cost Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Cost Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Project Budget</span>
                      <span className="font-medium">₹{estimatedBudget.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Platform Fee (10%)</span>
                      <span>₹{platformFee.toLocaleString()}</span>
                    </div>
                    <hr className="border-glass-border" />
                    <div className="flex justify-between font-semibold">
                      <span>Total Cost</span>
                      <span className="text-primary">₹{totalCost.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* How it Works */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>How it Works</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-white text-sm flex items-center justify-center flex-shrink-0">1</div>
                      <div>
                        <p className="text-sm font-medium">Submit Request</p>
                        <p className="text-xs text-muted-foreground">Describe your project requirements</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-white text-sm flex items-center justify-center flex-shrink-0">2</div>
                      <div>
                        <p className="text-sm font-medium">Review Proposals</p>
                        <p className="text-xs text-muted-foreground">Students submit their proposals</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-white text-sm flex items-center justify-center flex-shrink-0">3</div>
                      <div>
                        <p className="text-sm font-medium">Select & Pay</p>
                        <p className="text-xs text-muted-foreground">Choose best proposal and make payment</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-white text-sm flex items-center justify-center flex-shrink-0">4</div>
                      <div>
                        <p className="text-sm font-medium">Get Delivered</p>
                        <p className="text-xs text-muted-foreground">Receive your completed project</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Important Notice */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="glass-card border-warning/20">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <AlertCircle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium mb-2">Important Notice</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Payment is held in escrow until delivery</li>
                        <li>• 24-hour support for all projects</li>
                        <li>• Full refund if not satisfied</li>
                        <li>• All work is original and plagiarism-free</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}