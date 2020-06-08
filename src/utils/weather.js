const request = require('request')

const getWeatherInfo = (suburb, callback) => {
    
    const url = "http://api.weatherstack.com/current?access_key=2e8814d9ebd0370671c081d5ca181884&query=" + suburb
    request(url, (error, response, body) => {
        console.log("--" + error)
        if(error) {
            callback(error, undefined)
        } else {
            // console.log(data.current)
            data = JSON.parse(body)
            console.log(data.current)
            if (!data.current) {
                const msg = "Location " + suburb + "not found"
            }
            const {temperature = "", feelslike = ""} = data.current
            const msg = "The current temperature is " + temperature + ", feels like " + feelslike
            callback(undefined, msg)
        }
    })
}

module.exports = {
    getWeatherInfo : getWeatherInfo
}