const request = require ('request')

const url ='https://api.darksky.net/forecast/7d735164bc044f183b5f1c7498354bd5/37.8267,-122.4233'

request({url:url,json:true},(error,response)=>{
   console.log(response.body.currently)
})

//genocoding mapbox


const geoCode           