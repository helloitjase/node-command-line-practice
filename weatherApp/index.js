const program = require('commander');
const { getWeatherData, getForecast }= require('./weatherApp.js');

program
.version('0.0.1')
.description('Weather command line app');

program
.command("now <city>")
.alias('n')
.description('see current weather in specified city')
.action(city => getWeatherData(city));

program
.command('future <city>')    
.alias('fut')
.description('get city forecast')
.action(city => getForecast(city));


program.parse(process.argv)