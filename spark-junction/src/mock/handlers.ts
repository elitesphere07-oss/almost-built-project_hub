import { http, HttpResponse } from 'msw'
import { mockProjects, mockUsers, mockOrders, mockNotifications } from './fixtures'

const baseUrl = 'http://localhost:4000/api'

export const handlers = [
  // Auth endpoints
  http.post(`${baseUrl}/auth/login`, async ({ request }) => {
    const { email, password } = await request.json() as any
    
    // Mock authentication logic
    if (email === 'admin@projecthub.com' && password === 'admin123') {
      return HttpResponse.json({
        success: true,
        user: { 
          id: '1', 
          email, 
          name: 'John Doe',
          role: 'admin' 
        },
        token: 'mock-jwt-token'
      })
    }
    
    if (password === 'student123') {
      return HttpResponse.json({
        success: true,
        user: { 
          id: '2', 
          email, 
          name: 'Jane Smith',
          role: 'student' 
        },
        token: 'mock-jwt-token'
      })
    }
    
    return HttpResponse.json(
      { success: false, message: 'Invalid credentials' },
      { status: 401 }
    )
  }),

  http.post(`${baseUrl}/auth/register`, async ({ request }) => {
    const userData = await request.json() as any
    
    // Mock registration - always succeed for demo
    return HttpResponse.json({
      success: true,
      user: {
        id: Math.random().toString(36).substr(2, 9),
        ...userData,
        role: 'student'
      },
      token: 'mock-jwt-token'
    })
  }),

  http.post(`${baseUrl}/auth/logout`, () => {
    return HttpResponse.json({ success: true })
  }),

  // Projects endpoints
  http.get(`${baseUrl}/projects`, ({ request }) => {
    const url = new URL(request.url)
    const branch = url.searchParams.get('branch')
    const search = url.searchParams.get('search')
    const page = parseInt(url.searchParams.get('page') || '1')
    const limit = parseInt(url.searchParams.get('limit') || '12')
    
    let filteredProjects = [...mockProjects]
    
    if (branch && branch !== 'All Branches') {
      filteredProjects = filteredProjects.filter(p => p.branch === branch)
    }
    
    if (search) {
      filteredProjects = filteredProjects.filter(p => 
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
      )
    }
    
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedProjects = filteredProjects.slice(startIndex, endIndex)
    
    return HttpResponse.json({
      projects: paginatedProjects,
      total: filteredProjects.length,
      page,
      limit,
      totalPages: Math.ceil(filteredProjects.length / limit)
    })
  }),

  http.get(`${baseUrl}/projects/featured`, () => {
    const featuredProjects = mockProjects.filter(p => p.isFeatured)
    return HttpResponse.json({ projects: featuredProjects })
  }),

  http.get(`${baseUrl}/projects/:id`, ({ params }) => {
    const project = mockProjects.find(p => p.id === parseInt(params.id as string))
    if (!project) {
      return HttpResponse.json(
        { success: false, message: 'Project not found' },
        { status: 404 }
      )
    }
    return HttpResponse.json({ project })
  }),

  // Orders endpoints
  http.get(`${baseUrl}/orders`, () => {
    return HttpResponse.json({ orders: mockOrders })
  }),

  http.post(`${baseUrl}/orders`, async ({ request }) => {
    const orderData = await request.json() as any
    
    const newOrder = {
      id: Math.random().toString(36).substr(2, 9),
      ...orderData,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    
    return HttpResponse.json({ success: true, order: newOrder })
  }),

  // Project Requests endpoints
  http.post(`${baseUrl}/project-requests`, async ({ request }) => {
    const requestData = await request.json() as any
    
    const newRequest = {
      id: Math.random().toString(36).substr(2, 9),
      ...requestData,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    
    return HttpResponse.json({ success: true, request: newRequest })
  }),

  // Payments endpoints
  http.post(`${baseUrl}/payments/razorpay/create-order`, async ({ request }) => {
    const { amount, currency } = await request.json() as any
    
    return HttpResponse.json({
      id: 'order_' + Math.random().toString(36).substr(2, 9),
      amount: amount * 100, // Razorpay uses paise
      currency: currency || 'INR',
      key: 'rzp_test_1234567890'
    })
  }),

  http.post(`${baseUrl}/payments/stripe/create-session`, async ({ request }) => {
    const { items, successUrl, cancelUrl } = await request.json() as any
    
    return HttpResponse.json({
      id: 'cs_' + Math.random().toString(36).substr(2, 9),
      url: 'https://checkout.stripe.com/mock-session',
      success_url: successUrl,
      cancel_url: cancelUrl
    })
  }),

  // Notifications endpoints
  http.get(`${baseUrl}/notifications`, () => {
    return HttpResponse.json({ notifications: mockNotifications })
  }),

  http.get(`${baseUrl}/notifications/unread-count`, () => {
    const unreadCount = mockNotifications.filter(n => !n.read).length
    return HttpResponse.json({ count: unreadCount })
  }),

  http.patch(`${baseUrl}/notifications/:id/read`, ({ params }) => {
    return HttpResponse.json({ success: true })
  }),

  // File upload endpoints
  http.post(`${baseUrl}/uploads/signed-url`, async ({ request }) => {
    const { fileName, fileType, folder } = await request.json() as any
    
    return HttpResponse.json({
      signedUrl: `https://mock-s3.amazonaws.com/${folder}/${fileName}?signature=mock`,
      publicUrl: `https://mock-cdn.com/${folder}/${fileName}`,
      key: `${folder}/${fileName}`
    })
  }),

  // Support endpoints
  http.post(`${baseUrl}/support/tickets`, async ({ request }) => {
    const ticketData = await request.json() as any
    
    return HttpResponse.json({
      success: true,
      ticket: {
        id: 'ticket_' + Math.random().toString(36).substr(2, 9),
        ...ticketData,
        status: 'open',
        priority: 'medium',
        createdAt: new Date().toISOString()
      }
    })
  }),

  // Admin endpoints
  http.get(`${baseUrl}/admin/stats`, () => {
    return HttpResponse.json({
      totalUsers: 5432,
      totalProjects: 1234,
      totalOrders: 2345,
      totalRevenue: 234567,
      monthlyGrowth: 12.5,
      activeUsers: 3456
    })
  }),

  http.get(`${baseUrl}/admin/users`, () => {
    return HttpResponse.json({ users: mockUsers })
  }),

  // User profile endpoints
  http.get(`${baseUrl}/users/profile`, () => {
    return HttpResponse.json({
      user: {
        id: '2',
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+91 9876543210',
        college: 'IIT Delhi',
        branch: 'Computer Science Engineering',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
      }
    })
  }),

  http.put(`${baseUrl}/users/profile`, async ({ request }) => {
    const userData = await request.json() as any
    return HttpResponse.json({ success: true, user: userData })
  })
]