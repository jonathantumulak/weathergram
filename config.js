var config = {};


config.weatherAPIKey = '031cf9f3e473023ff9cc2679444a27a7';
config.weatherAPI = 'http://api.openweathermap.org/data/2.5/weather?APPID=' + config.weatherAPIKey + '&q='

config.googleAPIKey = 'AIzaSyArO2LkSQP5hynBUsQ1cge9BjYq27BuxRo'
config.googleAPI = 'https://www.googleapis.com/customsearch/v1?searchType=image&key='+config.googleAPIKey+'&cx=006571249169582713381:8duf-l_9rxq&q={}';

module.exports = config;