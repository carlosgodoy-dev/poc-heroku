const express = require('express')


const PORT = process.env.PORT || 3001
const app = express()

app.get('/', (req, res) => {
    res.send('Hello and Nice Day')
})

app.listen(PORT, () => console.log(`Running listen *:${PORT}`))