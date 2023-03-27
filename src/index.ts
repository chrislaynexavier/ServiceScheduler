import { Resolver } from "dns"

const express = require('express')
const app = express()
const { Pool } = require("pg")
const client = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: '5432'
})

const connectDb = async () => {
    try {
        await client.connect()
        console.log('conectado')
    } catch (error) {
        console.log(error)
    }
}

app.use(express.json())

app.get('/habit', async (req: any, res: any) => {
    let response = null
    if (req.query.id_group) {
        response = await client.query('select * from habits where id_group = $1', [req.query.id_group])
    } else {
        response = await client.query('select * from habits')
    }
    res.json(response.rows)
    // await client.end()

})

app.listen(2000, function (erro: any) {
    if (erro) {
        console.log("Ocorreu um erro!")
    } else {
        connectDb()
        console.log("Servidor iniciado com sucesso")
    }
})
