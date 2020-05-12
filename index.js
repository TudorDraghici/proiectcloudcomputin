const express = require("express")
const Sequelize = require('sequelize')
let sequelize

 {
    sequelize = new Sequelize('profile', 'root', 'password', {
        dialect: "mysql",
        host: "aar7jeifk9xq9b.ccmgtnfn5td6.us-east-2.rds.amazonaws.com",
        port: 3306
    })
}

sequelize.authenticate().then(() => {
    console.log("Connected to database")
}).catch(() => {
    console.log("Unable to connect to database")
})

const Messages = sequelize.define('messages', {
    subject: Sequelize.STRING,
    name: Sequelize.STRING,
    message: Sequelize.TEXT
})

const app = express()

app.use('/', express.static('frontend'))


app.use(express.json())
app.use(express.urlencoded())



app.listen(process.env.PORT||8080)