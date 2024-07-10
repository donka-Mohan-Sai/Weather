function weatherFn(city) {
    const weatherData = {
        "New York": {
            cityName: "New York",
            date: moment().format('MMMM Do YYYY, h:mm:ss a'),
            icon: "http://openweathermap.org/img/wn/01d.png",
            temperature: "25°C",
            description: "Clear sky",
            windSpeed: "5 m/s"
        },
        "London": {
            cityName: "London",
            date: moment().format('MMMM Do YYYY, h:mm:ss a'),
            icon: "http://openweathermap.org/img/wn/02d.png",
            temperature: "20°C",
            description: "Few clouds",
            windSpeed: "3 m/s"
        },
        "Tokyo": {
            cityName: "Tokyo",
            date: moment().format('MMMM Do YYYY, h:mm:ss a'),
            icon: "http://openweathermap.org/img/wn/03d.png",
            temperature: "30°C",
            description: "Scattered clouds",
            windSpeed: "4 m/s"
        },
        "Paris": {
            cityName: "Paris",
            date: moment().format('MMMM Do YYYY, h:mm:ss a'),
            icon: "http://openweathermap.org/img/wn/04d.png",
            temperature: "22°C",
            description: "Broken clouds",
            windSpeed: "5 m/s"
        },
        "Sydney": {
            cityName: "Sydney",
            date: moment().format('MMMM Do YYYY, h:mm:ss a'),
            icon: "http://openweathermap.org/img/wn/09d.png",
            temperature: "18°C",
            description: "Shower rain",
            windSpeed: "6 m/s"
        },
        "Berlin": {
            cityName: "Berlin",
            date: moment().format('MMMM Do YYYY, h:mm:ss a'),
            icon: "http://openweathermap.org/img/wn/10d.png",
            temperature: "15°C",
            description: "Rain",
            windSpeed: "4 m/s"
        },
        "Moscow": {
            cityName: "Moscow",
            date: moment().format('MMMM Do YYYY, h:mm:ss a'),
            icon: "http://openweathermap.org/img/wn/11d.png",
            temperature: "10°C",
            description: "Thunderstorm",
            windSpeed: "7 m/s"
        },
        "Toronto": {
            cityName: "Toronto",
            date: moment().format('MMMM Do YYYY, h:mm:ss a'),
            icon: "http://openweathermap.org/img/wn/13d.png",
            temperature: "0°C",
            description: "Snow",
            windSpeed: "5 m/s"
        },
        "Beijing": {
            cityName: "Beijing",
            date: moment().format('MMMM Do YYYY, h:mm:ss a'),
            icon: "http://openweathermap.org/img/wn/50d.png",
            temperature: "8°C",
            description: "Mist",
            windSpeed: "2 m/s"
        },
        "Mumbai": {
            cityName: "Mumbai",
            date: moment().format('MMMM Do YYYY, h:mm:ss a'),
            icon: "http://openweathermap.org/img/wn/01d.png",
            temperature: "32°C",
            description: "Clear sky",
            windSpeed: "3 m/s"
        }
    };

    const weatherInfo = weatherData[city];

    if (weatherInfo) {
        updateWeatherInfo(weatherInfo);
    } else {
        alert('Please select a city.');
    }
}

function updateWeatherInfo(info) {
    $('#weather-info').show();
    $('#city-name').text(info.cityName);
    $('#date').text(info.date);
    $('#weather-icon').attr('src', info.icon);
    $('#temperature').text(info.temperature);
    $('#description').text(info.description);
    $('#wind-speed').text(info.windSpeed);
}
