import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

function createContext() {
  return { prisma }
}

export default createContext;
export { prisma };