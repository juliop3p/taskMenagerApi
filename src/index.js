const express = require('express')
require('./db/mongoose')

const app = express()

app.use(express.json())
app.use(require('./routes/user'))
app.use(require('./routes/task'))

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))