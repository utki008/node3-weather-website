const request = require('request')
const forecast = (latitude, longitude, callback) =>{
const url = 'https://api.darksky.net/forecast/f117ac5fb31c58161df69e4b52fe7fbf/'+ latitude +','+ longitude

request({url, json: true}, (error, {body}) => {
    if (error){
        callback('Unable to connect to weather services!', undefined)
    }else if (body.error){
        callback('Unable to find location', undefined)
    }else {
        
callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There high today is ' + body.daily.data[0].temperatureHigh + ' with a low of '+ body.daily.data[0].temperatureHigh +' There is ' + body.currently.precipProbability + '% chance of rain.')
    }
})
}

module.exports = forecast