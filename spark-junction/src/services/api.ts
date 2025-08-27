import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'

// Create axios instance with default config
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
  // For httpOnly cookies (recommended for production)
  withCredentials: true,
})

// Request interceptor - Add auth token
apiClient.interceptors.request.use(
  (config) => {
    // Option 1: JWT from localStorage (less secure but simpler)
    // const token = localStorage.getItem('auth_token')
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }

    // Option 2: Let httpOnly cookies handle auth (recommended)
    // No manual token handling needed - cookies sent automatically

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor - Handle auth errors and responses
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error) => {
    // Handle 401 Unauthorized - redirect to login
    if (error.response?.status === 401) {
      // Clear local auth state
      localStorage.removeItem('auth_token')
      // Redirect to login
      window.location.href = '/login'
    }
    
    // Handle network errors
    if (!error.response) {
      console.error('Network error:', error.message)
    }
    
    return Promise.reject(error)
  }
)

// API Methods
export const api = {
  // Authentication
  auth: {
    login: (credentials: { email: string; password: string }) =>
      apiClient.post('/auth/login', credentials),
    register: (userData: any) =>
      apiClient.post('/auth/register', userData),
    logout: () =>
      apiClient.post('/auth/logout'),
    refreshToken: () =>
      apiClient.post('/auth/refresh'),
    forgotPassword: (email: string) =>
      apiClient.post('/auth/forgot-password', { email }),
    resetPassword: (token: string, password: string) =>
      apiClient.post('/auth/reset-password', { token, password }),
    verifyEmail: (token: string) =>
      apiClient.post('/auth/verify-email', { token }),
  },

  // Users
  users: {
    getProfile: () =>
      apiClient.get('/users/profile'),
    updateProfile: (data: any) =>
      apiClient.put('/users/profile', data),
    uploadAvatar: (file: File) => {
      const formData = new FormData()
      formData.append('avatar', file)
      return apiClient.post('/users/avatar', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
    },
  },

  // Projects
  projects: {
    getAll: (params?: any) =>
      apiClient.get('/projects', { params }),
    getById: (id: string) =>
      apiClient.get(`/projects/${id}`),
    getByBranch: (branch: string, params?: any) =>
      apiClient.get(`/projects/branch/${branch}`, { params }),
    search: (query: string, filters?: any) =>
      apiClient.get('/projects/search', { params: { q: query, ...filters } }),
    getFeatured: () =>
      apiClient.get('/projects/featured'),
    getRecommended: (userId?: string) =>
      apiClient.get('/projects/recommended', { params: { userId } }),
  },

  // Orders
  orders: {
    create: (orderData: any) =>
      apiClient.post('/orders', orderData),
    getAll: (params?: any) =>
      apiClient.get('/orders', { params }),
    getById: (id: string) =>
      apiClient.get(`/orders/${id}`),
    updateStatus: (id: string, status: string) =>
      apiClient.patch(`/orders/${id}/status`, { status }),
    cancel: (id: string, reason?: string) =>
      apiClient.patch(`/orders/${id}/cancel`, { reason }),
  },

  // Custom Project Requests
  projectRequests: {
    create: (requestData: any) =>
      apiClient.post('/project-requests', requestData),
    getAll: (params?: any) =>
      apiClient.get('/project-requests', { params }),
    getById: (id: string) =>
      apiClient.get(`/project-requests/${id}`),
    respond: (id: string, response: any) =>
      apiClient.post(`/project-requests/${id}/respond`, response),
    updateStatus: (id: string, status: string) =>
      apiClient.patch(`/project-requests/${id}/status`, { status }),
  },

  // Payments
  payments: {
    createRazorpayOrder: (amount: number, currency: string = 'INR') =>
      apiClient.post('/payments/razorpay/create-order', { amount, currency }),
    verifyRazorpayPayment: (paymentData: any) =>
      apiClient.post('/payments/razorpay/verify', paymentData),
    createStripeSession: (items: any[], successUrl: string, cancelUrl: string) =>
      apiClient.post('/payments/stripe/create-session', { items, successUrl, cancelUrl }),
    getPaymentHistory: (params?: any) =>
      apiClient.get('/payments/history', { params }),
  },

  // File Uploads
  uploads: {
    getSignedUrl: (fileName: string, fileType: string, folder: string = 'projects') =>
      apiClient.post('/uploads/signed-url', { fileName, fileType, folder }),
    uploadToSignedUrl: (signedUrl: string, file: File) =>
      fetch(signedUrl, {
        method: 'PUT',
        body: file,
        headers: {
          'Content-Type': file.type,
        },
      }),
  },

  // Notifications
  notifications: {
    getAll: (params?: any) =>
      apiClient.get('/notifications', { params }),
    markAsRead: (id: string) =>
      apiClient.patch(`/notifications/${id}/read`),
    markAllAsRead: () =>
      apiClient.patch('/notifications/mark-all-read'),
    getUnreadCount: () =>
      apiClient.get('/notifications/unread-count'),
  },

  // Support
  support: {
    createTicket: (ticketData: any) =>
      apiClient.post('/support/tickets', ticketData),
    getTickets: (params?: any) =>
      apiClient.get('/support/tickets', { params }),
    getTicketById: (id: string) =>
      apiClient.get(`/support/tickets/${id}`),
    addMessage: (ticketId: string, message: string, attachments?: File[]) => {
      const formData = new FormData()
      formData.append('message', message)
      if (attachments) {
        attachments.forEach(file => formData.append('attachments', file))
      }
      return apiClient.post(`/support/tickets/${ticketId}/messages`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
    },
  },

  // Admin (for admin dashboard)
  admin: {
    getStats: () =>
      apiClient.get('/admin/stats'),
    getUsers: (params?: any) =>
      apiClient.get('/admin/users', { params }),
    getUserById: (id: string) =>
      apiClient.get(`/admin/users/${id}`),
    updateUser: (id: string, data: any) =>
      apiClient.put(`/admin/users/${id}`, data),
    deleteUser: (id: string) =>
      apiClient.delete(`/admin/users/${id}`),
    getProjects: (params?: any) =>
      apiClient.get('/admin/projects', { params }),
    approveProject: (id: string) =>
      apiClient.patch(`/admin/projects/${id}/approve`),
    rejectProject: (id: string, reason: string) =>
      apiClient.patch(`/admin/projects/${id}/reject`, { reason }),
  },
}

export default apiClient