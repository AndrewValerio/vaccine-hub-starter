const express =require("express")
const cors = require("cors")
const morgan = require("morgan")
const {PORT} = require("./config")
const authRoutes = require("./routes/auth")
var bodyParser = require('body-parser')

const {BadRequestError, NotFoundError} = require("./utils/errors")

const app = express()

app.use(cors());

app.use(express.json())
app.use(bodyParser.json())

app.use(morgan('tiny'))

app.use("/auth", authRoutes)

app.use((req, res, next) => {
    return next(new NotFoundError())
})

app.use((error, req, res, next) => {
    const status = err.status || 500
    const message = err.message

    return res.status(status.json({
        error: {message, status},
    }))
})


app.listen(PORT, () => {
    console.log(`🚀 Server runnning http://localhost:${PORT}`)
})