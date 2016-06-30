var express = require('express');
var router = express.Router();

var request = require('request');
var config = require('../config');

/* GET home page. */
router.get('/', function(req, res, next) {

  var location = 'Dubai';

  request(config.weatherAPI + location, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var weather = JSON.parse(body);

      console.log(weather);

      var weatherTag = weather.weather[0].description;
      var url = config.googleAPI.replace(/{}/g, location + ' ' + weatherTag)

      request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
           var response = JSON.parse(body);

           var images = [];

           for (image in response.items) {
              images.push(response.items[image].link);
           }

           res.render('index', { title: 'WeatherGram', images: images,
                                 location: location,
                                 weather: weather.weather[0].main });
        }
      });
    }
  });
});


router.post('/', function(req, res, next) {
  var location = req.body.searchword;

  request(config.weatherAPI + location, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var weather = JSON.parse(body);

      console.log(weather);

      var weatherTag = weather.weather[0].description;
      var url = config.googleAPI.replace(/{}/g, location + ' ' + weatherTag)

      request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
           var response = JSON.parse(body);
           var images = [];

           for (image in response.items) {
              images.push(response.items[image].link);
           }
           res.render('index', { title: 'WeatherGram', images: images,
                                 location: location,
                                 weather: weather.weather[0].main });
        }
      });
    }
  });
});

module.exports = router;
