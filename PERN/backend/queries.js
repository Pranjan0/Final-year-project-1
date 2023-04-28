const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'user_db',
    password: 'root',
    port: 5432,
})
const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const addUser =()=>{
    pool.query('INSERT INTO users (id, user_name) VALUES ($1, $2)', [2,'bbc'],(error, results) => {
        if (error) {
            throw error
        }
        // response.status(200).json(results.rows)
        console.log(results.rows)
    })

}
const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const createUser = (request, response) => {
    const {
        name,
        email
    } = request.body
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${result.insertId}`)
    })
}

// addUser();
module.exports={getUsers,addUser}