export const getWeatherData = async (city) => {
    const apiKey = import.meta.env.VITE_API_WEATHER_KEY;
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
    const data = await response.json();
    return data;
}