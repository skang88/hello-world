const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World! This is second commit')
})

app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening on port ${port}`)
})

