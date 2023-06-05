const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')

const app = express()

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})

app.use(bodyParser.json())

const PUERTO = 3000

const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'alimentador',
    user: 'root',
    password: ''
})

app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en el puerto ${PUERTO}`);
})

conexion.connect(error => {
    if (error) throw error
    console.log('Conexión exitosa a la base de datos');
})

app.get('/', (req, res) => {
    res.send('API')
})

/*RUTAS PARA TABLA SCHEDULE*/


app.get('/schedule', (req, res) => {
    const query = `SELECT * FROM schedule;`
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message)

        if (resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`No hay registros de horarios`)
        }
    })
})

app.get('/schedule/:id', (req, res) => {
    const {
        id
    } = req.params

    const query = `SELECT * FROM schedule WHERE id_schedule=${id};`
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message)

        if (resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`No hay horarios`)
        }
    })
})

app.post('/schedule/agregar', (req, res) => {
    const usuario = {
        tipo: req.body.tipo,
        horario: req.body.horario,
    }

    const query = `INSERT INTO schedule SET ?`
    conexion.query(query, usuario, (error) => {
        if (error) return console.error(error.message)

        res.json(`Se insertó correctamente el horario`)
    })
})

app.put('/schedule/actualizar/:id', (req, res) => {
    const {
        id
    } = req.params
    const {
        tipo,
        horario
    } = req.body

    const query = `UPDATE schedule SET tipo='${tipo}', horario='${horario}' WHERE id_schedule='${id}';`
    conexion.query(query, (error) => {
        if (error) return console.error(error.message)

        res.json(`Se actualizó correctamente el horario`)
    })
})


app.delete('/schedule/borrar/:id', (req, res) => {
    const {
        id
    } = req.params

    const query = `DELETE FROM schedule WHERE id_schedule=${id};`
    conexion.query(query, (error) => {
        if (error) console.error(error.message)

        res.json(`Se eliminó correctamente el horario`)
    })
})

/*****************************************************/

/*RUTAS PARA TABLA CLEANINGALERTS*/

app.get('/cleaningalerts', (req, res) => {
    const query = `SELECT * FROM cleaningalerts;`
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message)

        if (resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`No hay registros de alertas de limpieza`)
        }
    })
})

app.get('/cleaningalerts/:id', (req, res) => {
    const {
        id
    } = req.params

    const query = `SELECT * FROM cleaningalerts WHERE id_cleaning=${id};`
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message)

        if (resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`No hay alertas de limpieza`)
        }
    })
})

app.post('/cleaningalerts/agregar', (req, res) => {
    const usuario = {
        tipo: req.body.tipo,
        fechaHora: req.body.horario,
        limpiado: req.body.limpiado,
    }

    const query = `INSERT INTO cleaningalerts SET ?`
    conexion.query(query, usuario, (error) => {
        if (error) return console.error(error.message)

        res.json(`Se insertó correctamente la alerta de limpieza`)
    })
})

app.put('/cleaningalerts/actualizar/:id', (req, res) => {
    const {
        id
    } = req.params
    const {
        tipo,
        fechaHora,
        limpiado
    } = req.body

    const query = `UPDATE cleaningalerts SET tipo='${tipo}', fechaHora='${fechaHora}', limpiado='${limpiado}' WHERE id_cleaning='${id}';`
    conexion.query(query, (error) => {
        if (error) return console.error(error.message)

        res.json(`Se actualizó correctamente la alerta de limpieza`)
    })
})


app.delete('/cleaningalerts/borrar/:id', (req, res) => {
    const {
        id
    } = req.params

    const query = `DELETE FROM cleaningalerts WHERE id_cleaning=${id};`
    conexion.query(query, (error) => {
        if (error) console.error(error.message)

        res.json(`Se eliminó correctamente la alerta de limpieza`)
    })
})

/*****************************************************/


/*RUTAS PARA TABLA DISPENSINGLOG*/


app.get('/dispensinglog', (req, res) => {
    const query = `SELECT * FROM dispensinglog;`
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message)

        if (resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`No hay registros de dispensador`)
        }
    })
})

app.get('/dispensinglog/:id', (req, res) => {
    const {
        id
    } = req.params

    const query = `SELECT * FROM dispensinglog WHERE id_dispensing=${id};`
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message)

        if (resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`No hay dispensador`)
        }
    })
})

app.post('/dispensinglog/agregar', (req, res) => {
    const usuario = {
        tipo: req.body.tipo,
        disponibilidad: req.body.disponibilidad,
        fechaHora: req.body.fechaHora,
    }

    const query = `INSERT INTO dispensinglog SET ?`
    conexion.query(query, usuario, (error) => {
        if (error) return console.error(error.message)

        res.json(`Se insertó correctamente el dispensador`)
    })
})

app.put('/dispensinglog/actualizar/:id', (req, res) => {
    const {
        id
    } = req.params
    const {
        tipo,
        disponibilidad,
        fechaHora
    } = req.body

    const query = `UPDATE dispensinglog SET tipo='${tipo}', disponibilidad='${disponibilidad}', fechaHora='${fechaHora}' WHERE id_dispensing='${id}';`
    conexion.query(query, (error) => {
        if (error) return console.error(error.message)

        res.json(`Se actualizó correctamente el dispensador`)
    })
})


app.delete('/dispensinglog/borrar/:id', (req, res) => {
    const {
        id
    } = req.params

    const query = `DELETE FROM dispensinglog WHERE id_dispensing=${id};`
    conexion.query(query, (error) => {
        if (error) console.error(error.message)

        res.json(`Se eliminó correctamente el dispensador`)
    })
})

/*****************************************************/