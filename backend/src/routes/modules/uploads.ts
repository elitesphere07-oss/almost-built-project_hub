import { Router } from 'express'

export const router = Router()

router.post('/signed-url', (req, res) => {
  const { fileName, folder = 'projects' } = req.body as { fileName: string; fileType: string; folder?: string }
  const publicUrl = `https://mock-cdn.com/${folder}/${fileName}`
  const signedUrl = `https://mock-s3.amazonaws.com/${folder}/${fileName}?signature=mock`
  res.json({ signedUrl, publicUrl, key: `${folder}/${fileName}` })
})


