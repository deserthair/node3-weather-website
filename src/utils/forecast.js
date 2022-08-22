const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=407af0fdfbef1ae43cc2039dc3872fa3&query=' + longitude + ',' + latitude + '&units=f';

  request({ url, json: true }, (error, { body }) => {
    if(error){
      callback('Unable to connect to weather services.', undefined);
    } else if(body.error){
      callback(body.error.info, undefined);
    } else{
      callback(undefined, {
        weather_description: 'The current weather condition is ' + body.current.weather_descriptions[0].toLowerCase() + '.',
        current_temp: 'The current temperature is ' + body.current.temperature + ' degrees.',
        feels_like_temp:  'The temperature feels like ' + body.current.feelslike + ' degrees.'
      })
    }
  });
};


module.exports = forecast;