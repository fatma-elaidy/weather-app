const request = require('request')
const geoFunc = (address , callBack)=>{
    const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address + '.json?access_token=pk.eyJ1IjoibW9oYW1lZGF3YXJhIiwiYSI6ImNscDhxbjdwNjA0ZWoyaW10MGdkN3pvMzEifQ.jFdChWy_D3SA8NcXpWRdJA'
    request ({url : geoUrl , json:true} , (error,response)=>{
        if (error){
            // callBack to handle error and data
            callBack("Connection Failed ! " , 'Data not found')
        }
        else if (response.body.message){
            callBack(response.body.message , 'Data not found')
        }
        else if (response.body.features.length == 0){
            callBack("Your Location Not Found", 'Data not found')
        }
        else {
            callBack("No Error Founded" , {
                longtitude : response.body.features[0].center[0],
                latitude : response.body.features[0].center[1],
            })
        }
    })
}

module.exports = geoFunc