import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { properties } from './Properties';
import { getWeatherData } from '../api/getWeatherData';
export const HouseRental = () => {

    const [weather, setWeather] = useState({})
    const fetchWeather = async () => {
        const data = await getWeatherData("New York");   
        console.log(data)     
        const { condition } = data.current
        console.log(condition, 'condition')
        setWeather(condition);
    }
    useEffect(() => {
        fetchWeather();
    }, []);
    

    const { id } = useParams();
    const { name,address,description,price,image} = properties[id];

  return (
    <>
        <div className='house-rental-card'>
            <img src={image} alt={name} className='house-rental-image' />
            <h3 className='house-rental-name'>{name}</h3>
            <p className='house-rental-address'>{address}</p>
            <p className='house-rental-desc'>{description}</p>
            <p className='house-rental-price'>{price}</p>
            {weather && (
                <div className='weather-info'>
                    <h4>Current Weather:</h4>
                    <p>{weather.text}</p>
                    <img src={weather.icon} alt={weather.text} />
                </div>
            )}
        </div>

    </>
  )
}
