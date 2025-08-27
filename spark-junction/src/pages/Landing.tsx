import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/layout/navbar'
import { ArrowRight, Code, Users, Zap, Star, CheckCircle, ArrowDown } from 'lucide-react'

const features = [
  {
    icon: Code,
    title: 'Quality Projects',
    description: 'Access to high-quality student projects across all engineering branches'
  },
  {
    icon: Users,
    title: 'Expert Community',
    description: 'Connect with talented students and collaborate on innovative solutions'
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: '24-hour support and quick project delivery to meet your deadlines'
  }
]

const stats = [
  { label: 'Active Projects', value: '1,200+' },
  { label: 'Students', value: '5,000+' },
  { label: 'Branches', value: '15+' },
  { label: 'Success Rate', value: '98%' }
]

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Computer Science, IIT Delhi',
    content: 'Project Hub helped me find the perfect project for my final semester. The quality and support were exceptional.',
    rating: 5
  },
  {
    name: 'Priya Patel',
    role: 'Mechanical Engineering, NIT Surat',
    content: 'Amazing platform! Got my project completed ahead of schedule with excellent documentation.',
    rating: 5
  }
]

export default function Landing() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Your Ultimate{' '}
                <span className="gradient-text">Student Project</span>{' '}
                Marketplace
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
                Connect with talented students, access premium projects, and accelerate your academic journey. 
                From concept to completion, we've got you covered.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/register">
                    Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="glass" size="xl" asChild>
                  <Link to="/projects">Browse Projects</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-neon-primary/20 to-neon-secondary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-neon-tertiary/15 to-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="glass-card p-6 text-center hover-elevate">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Why Choose Project Hub?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Experience the future of academic collaboration with our cutting-edge platform
              </p>
            </motion.div>
          </div>
          
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-card p-8 hover-elevate group"
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-primary mb-6 group-hover:neon-glow transition-all duration-normal">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Loved by Students
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See what our community has to say about Project Hub
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-8 hover-elevate"
              >
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg italic mb-6">
                  "{testimonial.content}"
                </blockquote>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 text-center hover-elevate"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Ready to Transform Your Academic Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already using Project Hub to excel in their studies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/register">
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <Link to="/login">Already have an account?</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-card border-t border-glass-border mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <span className="text-white font-bold text-sm">PH</span>
                </div>
                <span className="font-bold text-xl gradient-text">Project Hub</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Empowering students through collaborative project excellence.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
                <li><Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
                <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                <li><Link to="/status" className="hover:text-primary transition-colors">Status</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
                <li><Link to="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
                <li><Link to="/cookies" className="hover:text-primary transition-colors">Cookies</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-glass-border mt-12 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Project Hub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}