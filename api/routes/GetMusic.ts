import { FastifyInstance } from 'fastify'
import { prisma } from '../../lib/prisma'

export async function GetMusic(fastify: FastifyInstance) {
    fastify.get('/musics', async () => {
        const Music = await prisma.music.findMany()

    return {Music}
    })
}