const express = require("express")
const mysql = require('mysql')

const app = express()
const port = 3000

const config = {
	host: 'db',
	user: 'root',
	password: 'root',
	database: 'nodedb'
}

const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) VALUES('Mateus')`
connection.query(sql)


app.get("/", (req, res) => {
	const query = `SELECT * FROM people`

	connection.query(query, (error, results) => {
        if (error) {
            return res.status(500).send(`Error retrieving data from database. ${error}`);
        }

        // Transformar resultados em uma lista de usuários
        const usersList = results.map(user => `<li>${user.name}</li>`).join("");

        res.send(`
            <h1>Full Cycle!!</h1>
            <ul>
                ${usersList}
            </ul>
        `);
    });
})

app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`)
})
