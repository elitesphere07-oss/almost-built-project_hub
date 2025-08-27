import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // debug: list available delegates
  // @ts-ignore
  console.log('Delegates:', Object.keys(prisma))
  const projectsData = Array.from({ length: 24 }).map((_, i) => ({
    title: `Project ${i + 1}`,
    description: 'A great project',
    branch: ['Computer Science Engineering', 'Electronics and Communication Engineering', 'Mechanical Engineering'][i % 3],
    isFeatured: i % 5 === 0,
    tags: ['react', 'node', 'ml', 'iot'].slice(0, (i % 4) + 1),
  }))

  await prisma.project.createMany({ data: projectsData })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })


