import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Eye, EyeOff, User, Mail, Phone, MapPin, GraduationCap, GitBranch, Lock, CheckCircle, XCircle } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'

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

interface PasswordStrength {
  score: number
  feedback: string
  color: string
}

function calculatePasswordStrength(password: string): PasswordStrength {
  let score = 0
  let feedback = 'Very weak'
  let color = 'text-destructive'

  if (password.length >= 8) score++
  if (/[a-z]/.test(password)) score++
  if (/[A-Z]/.test(password)) score++
  if (/\d/.test(password)) score++
  if (/[!@#$%^&*]/.test(password)) score++

  switch (score) {
    case 0:
    case 1:
      feedback = 'Very weak'
      color = 'text-destructive'
      break
    case 2:
      feedback = 'Weak'
      color = 'text-warning'
      break
    case 3:
      feedback = 'Fair'
      color = 'text-warning'
      break
    case 4:
      feedback = 'Good'
      color = 'text-success'
      break
    case 5:
      feedback = 'Strong'
      color = 'text-success'
      break
  }

  return { score, feedback, color }
}

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    place: '',
    collegeName: '',
    branch: '',
    password: '',
    confirmPassword: ''
  })
  
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const passwordStrength = calculatePasswordStrength(formData.password)
  const passwordsMatch = formData.password && formData.confirmPassword && formData.password === formData.confirmPassword

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Registration data:', formData)
    
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="glass-card border-b border-glass-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">PH</span>
              </div>
              <span className="font-bold text-xl gradient-text">Project Hub</span>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Registration Form */}
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-2xl"
        >
          <div className="glass-card p-8 hover-elevate">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold gradient-text">Create Your Account</h2>
              <p className="mt-2 text-muted-foreground">
                Join thousands of students building amazing projects
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="glass-subtle"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="glass-subtle"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="glass-subtle"
                    placeholder="+91 9876543210"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="place" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Location
                  </Label>
                  <Input
                    id="place"
                    type="text"
                    value={formData.place}
                    onChange={(e) => setFormData(prev => ({ ...prev, place: e.target.value }))}
                    className="glass-subtle"
                    placeholder="City, State"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="collegeName" className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    College Name
                  </Label>
                  <Input
                    id="collegeName"
                    type="text"
                    value={formData.collegeName}
                    onChange={(e) => setFormData(prev => ({ ...prev, collegeName: e.target.value }))}
                    className="glass-subtle"
                    placeholder="Your college/university"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="branch" className="flex items-center gap-2">
                    <GitBranch className="h-4 w-4" />
                    Engineering Branch
                  </Label>
                  <Select
                    value={formData.branch}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, branch: value }))}
                  >
                    <SelectTrigger className="glass-subtle">
                      <SelectValue placeholder="Select your branch" />
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
              </div>

              {/* Password Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="password" className="flex items-center gap-2">
                    <Lock className="h-4 w-4" />
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                      className="glass-subtle pr-10"
                      placeholder="Create a strong password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  
                  {/* Password Strength Indicator */}
                  {formData.password && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full transition-all duration-300 ${
                              passwordStrength.score <= 1 ? 'bg-destructive' :
                              passwordStrength.score <= 3 ? 'bg-warning' : 'bg-success'
                            }`}
                            style={{ width: `${(passwordStrength.score / 5) * 100}%` }}
                          />
                        </div>
                        <span className={`text-xs font-medium ${passwordStrength.color}`}>
                          {passwordStrength.feedback}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="flex items-center gap-2">
                    <Lock className="h-4 w-4" />
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                      className="glass-subtle pr-10"
                      placeholder="Confirm your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  
                  {/* Password Match Indicator */}
                  {formData.confirmPassword && (
                    <div className="flex items-center gap-2 text-xs">
                      {passwordsMatch ? (
                        <>
                          <CheckCircle className="h-3 w-3 text-success" />
                          <span className="text-success">Passwords match</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="h-3 w-3 text-destructive" />
                          <span className="text-destructive">Passwords don't match</span>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isLoading || !passwordsMatch || passwordStrength.score < 3}
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </Button>

              {/* Login Link */}
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{' '}
                  <Link to="/login" className="font-medium text-primary hover:text-primary-glow transition-colors">
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}