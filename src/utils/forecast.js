const request = require('request');
const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/70e2f20ede365891f4a18ff371efcd2f/${latitude},${longitude}?units=auto`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Cannot Connect to wather service.', undefined);
    } else if (body.error) {
      callback('Error. Unable to find Location', undefined);
    } else {
      callback(
        undefined,
        `${body.daily.data[0].summary} It is currently ${
          body.currently.temperature
        } degrees out. And there is ${
          body.currently.precipProbability
        }% chance of rain. Windspeed is ${Math.round(
          body.currently.windSpeed
        )} m/s.`
      );
    }
  });
};

module.exports = forecast;
