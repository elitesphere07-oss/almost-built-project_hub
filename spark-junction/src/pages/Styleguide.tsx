import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Navbar } from '@/components/layout/navbar'
import { Palette, Type, Zap, Grid, Eye, Copy, Heart, Star, Download } from 'lucide-react'

const colorTokens = [
  { name: 'Primary', css: '--primary', color: 'bg-primary' },
  { name: 'Primary Glow', css: '--primary-glow', color: 'bg-primary-glow' },
  { name: 'Accent', css: '--accent', color: 'bg-accent' },
  { name: 'Accent Glow', css: '--accent-glow', color: 'bg-accent-glow' },
  { name: 'Neon Primary', css: '--neon-primary', color: 'bg-neon-primary' },
  { name: 'Neon Secondary', css: '--neon-secondary', color: 'bg-neon-secondary' },
  { name: 'Neon Tertiary', css: '--neon-tertiary', color: 'bg-neon-tertiary' },
  { name: 'Success', css: '--success', color: 'bg-success' },
  { name: 'Warning', css: '--warning', color: 'bg-warning' },
  { name: 'Destructive', css: '--destructive', color: 'bg-destructive' }
]

const gradients = [
  { name: 'Primary Gradient', css: 'bg-gradient-primary', class: 'bg-gradient-primary' },
  { name: 'Secondary Gradient', css: 'bg-gradient-secondary', class: 'bg-gradient-secondary' },
  { name: 'Mesh Gradient', css: 'bg-gradient-mesh', class: 'bg-gradient-mesh' }
]

const glassEffects = [
  { name: 'Glass Card', class: 'glass-card', description: 'Main glass card effect' },
  { name: 'Glass Subtle', class: 'glass-subtle', description: 'Subtle glass for inputs' },
  { name: 'Hover Elevate', class: 'hover-elevate', description: 'Hover elevation effect' },
  { name: 'Neon Glow', class: 'neon-glow', description: 'Primary neon glow' },
  { name: 'Neon Glow Accent', class: 'neon-glow-accent', description: 'Accent neon glow' }
]

export default function Styleguide() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold gradient-text mb-4">Design System</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Project Hub's glassmorphism design system with neon accents and modern components
          </p>
        </motion.div>

        {/* Colors Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Color Palette
              </CardTitle>
              <CardDescription>
                HSL-based color tokens for consistent theming
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {colorTokens.map((token) => (
                  <div key={token.name} className="text-center">
                    <div className={`w-20 h-20 rounded-xl ${token.color} mx-auto mb-2 shadow-lg`} />
                    <div className="text-sm font-medium">{token.name}</div>
                    <code className="text-xs text-muted-foreground">{token.css}</code>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Typography Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Type className="h-5 w-5" />
                Typography
              </CardTitle>
              <CardDescription>
                Inter font family with gradient text effects
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold gradient-text">Hero Heading</h1>
                <code className="text-sm text-muted-foreground">text-4xl font-bold gradient-text</code>
              </div>
              <div>
                <h2 className="text-3xl font-bold">Section Heading</h2>
                <code className="text-sm text-muted-foreground">text-3xl font-bold</code>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Card Title</h3>
                <code className="text-sm text-muted-foreground">text-xl font-semibold</code>
              </div>
              <div>
                <p className="text-base text-muted-foreground">Body text with muted foreground for descriptions and secondary content.</p>
                <code className="text-sm text-muted-foreground">text-base text-muted-foreground</code>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Gradients Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Gradients
              </CardTitle>
              <CardDescription>
                Beautiful gradient backgrounds and effects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {gradients.map((gradient) => (
                  <div key={gradient.name} className="text-center">
                    <div className={`w-full h-32 rounded-xl ${gradient.class} mb-3 flex items-center justify-center`}>
                      <span className="text-white font-semibold">{gradient.name}</span>
                    </div>
                    <code className="text-sm text-muted-foreground">{gradient.css}</code>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Glass Effects Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Glass Effects
              </CardTitle>
              <CardDescription>
                Glassmorphism components with backdrop blur and transparency
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {glassEffects.map((effect) => (
                  <div key={effect.name} className={`p-6 rounded-xl ${effect.class}`}>
                    <h3 className="font-semibold mb-2">{effect.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{effect.description}</p>
                    <code className="text-xs bg-background/50 px-2 py-1 rounded">{effect.class}</code>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Buttons Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Grid className="h-5 w-5" />
                Button Variants
              </CardTitle>
              <CardDescription>
                Various button styles for different use cases
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="space-y-3">
                  <Button variant="default">Default</Button>
                  <code className="text-xs block">variant="default"</code>
                </div>
                <div className="space-y-3">
                  <Button variant="hero">Hero</Button>
                  <code className="text-xs block">variant="hero"</code>
                </div>
                <div className="space-y-3">
                  <Button variant="glass">Glass</Button>
                  <code className="text-xs block">variant="glass"</code>
                </div>
                <div className="space-y-3">
                  <Button variant="glass-primary">Glass Primary</Button>
                  <code className="text-xs block">variant="glass-primary"</code>
                </div>
                <div className="space-y-3">
                  <Button variant="glass-accent">Glass Accent</Button>
                  <code className="text-xs block">variant="glass-accent"</code>
                </div>
                <div className="space-y-3">
                  <Button variant="neon">Neon</Button>
                  <code className="text-xs block">variant="neon"</code>
                </div>
                <div className="space-y-3">
                  <Button variant="outline">Outline</Button>
                  <code className="text-xs block">variant="outline"</code>
                </div>
                <div className="space-y-3">
                  <Button variant="ghost">Ghost</Button>
                  <code className="text-xs block">variant="ghost"</code>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Form Elements Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Form Elements</CardTitle>
              <CardDescription>
                Input fields and form components with glass styling
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Glass Input</label>
                    <Input placeholder="Enter text here..." className="glass-subtle" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Regular Input</label>
                    <Input placeholder="Standard input field..." />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Icons Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Icon Examples</CardTitle>
              <CardDescription>
                Lucide React icons used throughout the application
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  <span className="text-sm">Heart</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  <span className="text-sm">Star</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  <span className="text-sm">Download</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  <span className="text-sm">Eye</span>
                </div>
                <div className="flex items-center gap-2">
                  <Copy className="h-5 w-5" />
                  <span className="text-sm">Copy</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  <span className="text-sm">Zap</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Animations Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Animations</CardTitle>
              <CardDescription>
                Smooth transitions and micro-interactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl glass-subtle hover-elevate cursor-pointer">
                  <h3 className="font-semibold mb-2">Hover Elevate</h3>
                  <p className="text-sm text-muted-foreground">Hover to see elevation effect</p>
                </div>
                <div className="p-6 rounded-xl glass-subtle neon-glow">
                  <h3 className="font-semibold mb-2">Neon Glow</h3>
                  <p className="text-sm text-muted-foreground">Constant glow effect</p>
                </div>
                <div className="p-6 rounded-xl glass-subtle animate-glow-pulse">
                  <h3 className="font-semibold mb-2">Pulse Glow</h3>
                  <p className="text-sm text-muted-foreground">Pulsing glow animation</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}