const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if(!address){
   console.log('Please provide an address')
} else {
   //taking value from command line location
   geocode(address, (error, {latitude,longitude,location}) => {
      if(error){
         return console.log(error);
         
      }
       //callback chainning
       forecast(latitude, longitude, (error, forecastData) => {
         if(error){
            return console.log(error);
            
         }
         console.log(location)
         console.log(forecastData)
     })
   })

}

// geocode(address, (error, data) => {
//    if(error){
//       return console.log(error);
      
//    }
//     //callback chainning
//     forecast(data.latitude, data.longitude, (error, forecastData) => {
//       if(error){
//          return console.log(error);
         
//       }
//       console.log(data.location)
//       console.log(forecastData)
//   })
// })
// forecast(-75.7088, 44.1545, (error, data) => {
//    console.log('Error', error)
//    console.log('Data', data)
// })
