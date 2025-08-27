// Mock data fixtures for MSW

export const mockProjects = [
  {
    id: 1,
    title: 'AI-Powered Smart Traffic Management System',
    description: 'Complete IoT-based traffic management solution using computer vision and machine learning algorithms to optimize traffic flow in urban areas.',
    branch: 'Computer Science Engineering',
    price: 2499,
    rating: 4.8,
    reviews: 124,
    downloads: 456,
    author: 'Raj Patel',
    college: 'IIT Mumbai',
    tags: ['AI/ML', 'IoT', 'Computer Vision', 'Python', 'OpenCV', 'TensorFlow'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    isFeatured: true,
    deliveryTime: '2-3 days',
    category: 'Final Year Project',
    complexity: 'Advanced',
    documentation: 'Complete with source code, documentation, and presentation',
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T10:30:00Z'
  },
  {
    id: 2,
    title: 'Automated Solar Panel Cleaning Robot',
    description: 'Mechanical design and prototype of an autonomous robot for cleaning solar panels with efficiency tracking and remote monitoring capabilities.',
    branch: 'Mechanical Engineering',
    price: 1899,
    rating: 4.6,
    reviews: 89,
    downloads: 234,
    author: 'Priya Sharma',
    college: 'NIT Delhi',
    tags: ['Robotics', 'Automation', 'Solar Energy', 'CAD', 'Arduino', 'Sensors'],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop',
    isFeatured: false,
    deliveryTime: '3-4 days',
    category: 'Mini Project',
    complexity: 'Intermediate',
    documentation: 'CAD files, circuit diagrams, and implementation guide',
    createdAt: '2024-01-20T14:15:00Z',
    updatedAt: '2024-01-20T14:15:00Z'
  },
  {
    id: 3,
    title: 'Smart Home Automation using ESP32',
    description: 'Complete IoT solution for home automation with voice control, mobile app, energy monitoring, and security features.',
    branch: 'Electronics & Communication',
    price: 1299,
    rating: 4.7,
    reviews: 156,
    downloads: 789,
    author: 'Arjun Singh',
    college: 'VIT Vellore',
    tags: ['IoT', 'ESP32', 'Mobile App', 'Voice Control', 'Blynk', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    isFeatured: true,
    deliveryTime: '1-2 days',
    category: 'Course Project',
    complexity: 'Beginner',
    documentation: 'Source code, mobile app, and step-by-step tutorial',
    createdAt: '2024-01-25T09:45:00Z',
    updatedAt: '2024-01-25T09:45:00Z'
  },
  {
    id: 4,
    title: 'Earthquake Resistant Building Design',
    description: 'Structural analysis and design of earthquake-resistant buildings using advanced materials and seismic isolation techniques.',
    branch: 'Civil Engineering',
    price: 3299,
    rating: 4.9,
    reviews: 67,
    downloads: 123,
    author: 'Neha Gupta',
    college: 'IIT Chennai',
    tags: ['Structural Analysis', 'AutoCAD', 'STAAD Pro', 'Seismic Design', 'Building Codes'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
    isFeatured: false,
    deliveryTime: '4-5 days',
    category: 'Final Year Project',
    complexity: 'Advanced',
    documentation: 'Structural drawings, analysis reports, and calculations',
    createdAt: '2024-02-01T11:20:00Z',
    updatedAt: '2024-02-01T11:20:00Z'
  },
  {
    id: 5,
    title: 'Blockchain-Based Supply Chain Management',
    description: 'Decentralized supply chain tracking system using blockchain technology for transparency and authenticity verification.',
    branch: 'Information Technology',
    price: 2199,
    rating: 4.5,
    reviews: 98,
    downloads: 345,
    author: 'Rohit Kumar',
    college: 'BITS Pilani',
    tags: ['Blockchain', 'Web3', 'Smart Contracts', 'React', 'Node.js', 'Ethereum'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop',
    isFeatured: true,
    deliveryTime: '3-4 days',
    category: 'Final Year Project',
    complexity: 'Advanced',
    documentation: 'Full-stack application with smart contracts and documentation',
    createdAt: '2024-02-05T16:30:00Z',
    updatedAt: '2024-02-05T16:30:00Z'
  },
  {
    id: 6,
    title: 'Renewable Energy Management System',
    description: 'MATLAB/Simulink based system for optimal management of renewable energy sources including solar, wind, and battery storage.',
    branch: 'Electrical Engineering',
    price: 1799,
    rating: 4.4,
    reviews: 76,
    downloads: 189,
    author: 'Ananya Reddy',
    college: 'IISC Bangalore',
    tags: ['MATLAB', 'Simulink', 'Power Systems', 'Renewable Energy', 'Control Systems'],
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop',
    isFeatured: false,
    deliveryTime: '2-3 days',
    category: 'Mini Project',
    complexity: 'Intermediate',
    documentation: 'Simulation files, results analysis, and implementation guide',
    createdAt: '2024-02-10T13:45:00Z',
    updatedAt: '2024-02-10T13:45:00Z'
  }
]

export const mockUsers = [
  {
    id: '1',
    name: 'Raj Patel',
    email: 'raj@example.com',
    role: 'student',
    college: 'IIT Mumbai',
    branch: 'Computer Science Engineering',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    joinDate: '2023-08-15T10:30:00Z',
    projectsCount: 5,
    ordersCount: 12
  },
  {
    id: '2',
    name: 'Priya Sharma',
    email: 'priya@example.com',
    role: 'student',
    college: 'NIT Delhi',
    branch: 'Mechanical Engineering',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
    joinDate: '2023-09-20T14:15:00Z',
    projectsCount: 3,
    ordersCount: 8
  },
  {
    id: '3',
    name: 'Admin User',
    email: 'admin@projecthub.com',
    role: 'admin',
    college: 'Project Hub',
    branch: 'Administration',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
    joinDate: '2023-01-01T00:00:00Z',
    projectsCount: 0,
    ordersCount: 0
  }
]

export const mockOrders = [
  {
    id: 'order_1',
    projectId: 1,
    projectTitle: 'AI-Powered Smart Traffic Management System',
    userId: '2',
    userName: 'John Doe',
    amount: 2499,
    status: 'completed',
    paymentMethod: 'razorpay',
    paymentId: 'pay_12345',
    deliveryDate: '2024-02-15T10:00:00Z',
    createdAt: '2024-02-10T09:30:00Z',
    updatedAt: '2024-02-15T10:00:00Z'
  },
  {
    id: 'order_2',
    projectId: 3,
    projectTitle: 'Smart Home Automation using ESP32',
    userId: '2',
    userName: 'John Doe',
    amount: 1299,
    status: 'in_progress',
    paymentMethod: 'stripe',
    paymentId: 'pi_67890',
    deliveryDate: '2024-02-20T10:00:00Z',
    createdAt: '2024-02-18T14:20:00Z',
    updatedAt: '2024-02-18T14:20:00Z'
  }
]

export const mockNotifications = [
  {
    id: 'notif_1',
    userId: '2',
    type: 'order_completed',
    title: 'Order Completed',
    message: 'Your order for "AI-Powered Smart Traffic Management System" has been completed and delivered.',
    read: false,
    createdAt: '2024-02-15T10:00:00Z'
  },
  {
    id: 'notif_2',
    userId: '2',
    type: 'new_project',
    title: 'New Project Available',
    message: 'A new project matching your interests in "Computer Science Engineering" is now available.',
    read: false,
    createdAt: '2024-02-14T15:30:00Z'
  },
  {
    id: 'notif_3',
    userId: '2',
    type: 'payment_received',
    title: 'Payment Received',
    message: 'Payment of ₹1,299 for "Smart Home Automation using ESP32" has been received.',
    read: true,
    createdAt: '2024-02-12T11:45:00Z'
  }
]

export const mockProjectRequests = [
  {
    id: 'req_1',
    userId: '2',
    userName: 'John Doe',
    title: 'Custom E-commerce Website with Payment Integration',
    description: 'Need a full-stack e-commerce website with product catalog, shopping cart, user authentication, and payment gateway integration using React and Node.js.',
    branch: 'Computer Science Engineering',
    budget: 5000,
    deadline: '2024-03-15T00:00:00Z',
    requirements: [
      'Frontend: React.js with responsive design',
      'Backend: Node.js with Express',
      'Database: MongoDB',
      'Payment: Razorpay/Stripe integration',
      'Authentication: JWT based',
      'Admin panel for product management'
    ],
    attachments: [
      { name: 'wireframe.pdf', url: '/mock/wireframe.pdf' },
      { name: 'requirements.docx', url: '/mock/requirements.docx' }
    ],
    status: 'pending',
    responses: [],
    createdAt: '2024-02-10T09:00:00Z'
  }
]