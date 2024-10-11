import express from 'express';
import './config/mongoDB.js'
import { router as moviesRouter} from './routers/movies.js';
import { router as usersRouter } from './routers/users.js'


const PORT = process.env.PORT ?? 3003 
const app = express() 

app.use(express.json())
app.use("/api/v1/movies", moviesRouter)
app.use("/api/v1/users", usersRouter )
app.get('/', (req, res)=> {
    res.send("Movies")
})

app.listen(PORT, (err)=> {
err ? console.log (`Server is not running: ${err}`)
:
console.log (`Server Up: http://localhost:${PORT}`)
})