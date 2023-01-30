import { randomUUID } from 'crypto'
import {FastifyInstance} from 'fastify'
import { z } from 'zod'
import { prisma } from '../../lib/prisma'

export async function RegisterMusic(fastify: FastifyInstance) {
    fastify.post('/NewMusic', async (request, reply) => {
        const Music = z.object({
            Nome: z.string(),
            URL: z.string(),
            Artista: z.string()
        })

        const { Nome, URL, Artista } = Music.parse(request.body)
        
        await prisma.music.create({
            data: {
                id: randomUUID(),
                Nome,
                Artista,
                URL
            }
        })

        return reply.status(201).send()
    })
}