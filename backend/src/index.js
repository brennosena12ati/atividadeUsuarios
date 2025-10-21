import express from "express"
import cors from "cors"
import { people } from "./people.js"

const app = express()
const port = 3333

app.use(cors())
//GET, POST, PUT, PATCH, DELETE.
app.get("/", (request, response) => {
    response.json(people)
})

//DEIXAR O SERVIDOR ONLINE
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})