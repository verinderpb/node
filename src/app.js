const path = require("path")
const express = require("express")
const hbs = require("hbs")
const weather = require("./utils/weather")

const app = express()
const port = process.env.PORT || 3000

const publicDirPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

app.set("view engine", "hbs")
app.set("views", viewsPath)

hbs.registerPartials(partialsPath)

app.use(express.static(publicDirPath))

app.get("", (req, res) => {
    res.render("index", {
        "title" : "Welcome, this is home page",
        "name" : "Verinder"
    })
})

app.get("/about", (req, res) => {
    res.render("about", {
        "title" : "About",
        "name" : "Verinder"
    })
})

app.get("/help", (req, res) => {
    res.render("help", {
        "title" : "Help",
        "name" : "Verinder"
    })
})

app.get("/weather", (req, res) => {
    let address = req.query.address
    if (!address) {
        return res.send({
            "error" : "Address not provided"
        })
    }

    weather.getWeatherInfo(address, (error, msg) => {
        res.send({
            "Address" : address,
            "Forecast" : msg
        })
    })
})

app.get("/help/*" , (req, res) => {
    res.render("404", {
        "title" : "Help",
        "name" : "Verinder",
        "errorMessage": "Sorry, Can't find this help page"
    })
})

app.get("*" , (req, res) => {
    res.render("404", {
        "title" : "Help",
        "name" : "Verinder",
        "errorMessage": "Sorry, Can't find this page"
    })
})


app.listen(port, () => {
    console.log("Server started on port " + port)
})