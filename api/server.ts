import Fastify from "fastify";
import Cors from '@fastify/cors'
import { RegisterMusic } from "./routes/RegisterMusic";
import { GetMusic } from "./routes/GetMusic";

async function start() {
    const fastify = Fastify({
        logger: true,
        
    })

    await fastify.register(Cors, {
        origin: true,
    })

    await fastify.register(RegisterMusic)
    await fastify.register(GetMusic)

    await fastify.listen({ port: 3000 })
}

start()