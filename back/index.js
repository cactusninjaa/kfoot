import express from 'express'
import cors from 'cors'
import router from './router.js'
import { createServer } from 'node:http';
import { Server } from 'socket.io';


const app = express()
app.use(cors())

const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }

});

app.use(router)

io.on('connection', (socket) => {
    console.log('User connected')

});

io.on('disconnect', (socket) => {
    console.log('User disconnected')
})


server.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})