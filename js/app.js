// Mohamed A Awara
const geoFunc = require('./GeoCode')
const OurWeather = require('./Weather')
const country = process.argv[2]
geoFunc(country ,(error,data)=>{
        console.log("ERROR : " , error)
        console.log("Your latitude is : " , data.latitude )
        console.log("Your longtitude is : " , data.longtitude )
        // Call Weather in the Function 
        if(data){
            OurWeather(data.latitude , data.longtitude , (error , data)=>{
                console.log("Data Of Weather : " , data)
            })
        }
        else {
            console.log("Country Not Found ! ")
        }
})