import express from "express"
import cors from "cors"
import { people } from "./people.js"

const app = express()
const port = 3333

app.use(cors())
app.use(express.json())
//GET, POST, PUT, PATCH, DELETE.
app.get("/", (request, response) => {
    response.json(people)
})

app.post("/cadastrar", (request, response) => {
    const { name, email, age, passsword } = request.body.user

    console.log(`
        Nome: ${name},
        E-mail: ${email},
        Idade: ${age},
        Senha: ${passsword}
        `)

        //guardar usuário no banco de dados

        response.status(201).json({ message: "Usuário cadastrado com sucesso!" })
})

//DEIXAR O SERVIDOR ONLINE
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})