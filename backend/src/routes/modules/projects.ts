import { Router } from 'express'

export const router = Router()

const mockProjects = Array.from({ length: 24 }).map((_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  description: 'A great project',
  branch: ['Computer Science Engineering', 'Electronics and Communication Engineering', 'Mechanical Engineering'][i % 3],
  isFeatured: i % 5 === 0,
  tags: ['react', 'node', 'ml', 'iot'].slice(0, (i % 4) + 1),
}))

router.get('/', (req, res) => {
  const { branch, search, page = '1', limit = '12' } = req.query as Record<string, string>
  let filtered = [...mockProjects]
  if (branch && branch !== 'All Branches') filtered = filtered.filter(p => p.branch === branch)
  if (search) {
    const s = search.toLowerCase()
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(s) ||
      p.description.toLowerCase().includes(s) ||
      p.tags.some(t => t.toLowerCase().includes(s))
    )
  }
  const pageNum = parseInt(page)
  const limitNum = parseInt(limit)
  const start = (pageNum - 1) * limitNum
  const data = filtered.slice(start, start + limitNum)
  res.json({ projects: data, total: filtered.length, page: pageNum, limit: limitNum, totalPages: Math.ceil(filtered.length / limitNum) })
})

router.get('/featured', (_req, res) => {
  res.json({ projects: mockProjects.filter(p => p.isFeatured) })
})

router.get('/:id', (req, res) => {
  const project = mockProjects.find(p => p.id === Number(req.params.id))
  if (!project) return res.status(404).json({ success: false, message: 'Project not found' })
  res.json({ project })
})


