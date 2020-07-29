const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const app = express()

//COSAS QUE USA LA APP
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//DATOS DE CONEXIÓN A LA BBDD
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hugo',
    password: '123456',
    database: 'hackamarket'
})

//HACIENDO LA CONEXIÓN A LA BBDD
connection.connect(error => {
    if (error) throw error
    console.log('Database done');
})

//PUERTO DE CONEXIÓN DEL SERVICIO
const PORT = 3050

//CONEXIÓN DEL SERVICIO
app.listen(PORT, () => console.log('API done'));



//VER TODOS LOS PRODUCTOS
app.get('/productos', (req, res) => {

    //SECUENCIA SQL
    const sql = 'SELECT * FROM hackamarket.listaproductos'
    //CONEXIÓN A LA BBDD

    connection.query(sql, (error, results) => {
        if (error) throw error
        if (results.length > 0) {
            res.json(results)
        } else {
            console.log('No hay productos que mostrar. 😠 ');
        }
    })
})
// RECOGER TODOS LOS CLIENTE
app.get('/clientes', (req, res) => {

    //SECUENCIA SQL
    const sql = 'SELECT * FROM listaclientes'

    //CONEXIÓN A LA BBDD
    connection.query(sql, (error, results) => {
        if (error) throw error
        if (results.length > 0) {
            res.json(results)
        } else {
            console.log('No hay clientes que mostrar. 😠 ');
        }
    })
})

//AÑADIR CLIENTES A LA BBDD
app.post('/add', (req, res) => {

    //SECUENCIA SQL
    const sql = 'INSERT INTO listaclientes SET ?'

    //OBJETO DE DATOS DEL NUEVO CLIENTE
    const nuevoCliente = {
        nombre: req.body.nombre,
        usuario: req.body.usuario,
        password: req.body.password,
        email: req.body.email,
        foto: req.body.foto
    }

    //CONEXIÓN A LA BBDD
    connection.query(sql, nuevoCliente, error => {
        if (error) throw error
        console.log('Cliente creado con éxito');
    })
})

app.put('/update/:id', (req, res) => {

    //DATOS QUE RECIBIMOS DE LA VISTA
    const id = req.params.id
    const nombre = req.body.nombre
    const usuario = req.body.usuario
    const email = req.body.email
    const password = req.body.password
    const foto = req.body.foto

    //SECUENCIA SQL
    const sql = `UPDATE listaclientes
    SET nombre='${nombre}',
    usuario='${usuario}',
    email='${email}',
    password='${password}',
    foto='${foto}' 
    WHERE id=${id}`
    console.log(sql);
    //CONEXIÓN A LA BBDD
    connection.query(sql, error => {
        if (error) throw error
        console.log('Cliente actualizado con éxito 🆗');
    })
})

//BORRANDO CLIENTES EN LA BBDD
app.delete('/delete/:id', (req, res) => {

    //DATOS QUE LLEGAN DE LA VISTA
    const id = req.params.id

    //SECUENCIA SQL
    const sql = `DELETE FROM listaclientes WHERE id=${id}`
    console.log(sql);

    //CONEXIÓN A LA BBDD
    connection.query(sql, error => {
        if (error) throw error
        console.log('Cliente borrado');
    })

})

