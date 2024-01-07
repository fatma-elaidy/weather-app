const request = require('request')
const OurWeather = (latitude, longtitude , callBack)=>{
    const url = 'http://api.weatherapi.com/v1/current.json?key=0b1c4265208f4a02b1d100438232311&q=' + latitude + ',' + longtitude
    request({url : url , json:true}, (error,response)=>{
        if (error){
            callBack("Connection Failed ! " , 'No Data')
        }
        else if (response.body.error){
            callBack(response.body.error.message, 'No Data')
        }
        else {
            callBack("No Error" ,"City Name is : " +  response.body.location.name + "And The Temperature " + response.body.current.temp_c)
        }
    })
}

module.exports = OurWeather