import React from 'react'
import { properties } from './Properties'
import { HouseRental } from './HouseRental'
import { useNavigate } from 'react-router'
export const Dashboard = () => {
    const navigate = useNavigate();
    const onClickHandler = (index) => {
        navigate(`/house-rental/${index}`)
    }
  return (

    <>
        <div className='dashboard-container'>
            {properties.map((property,index) => (
                <div key={property.id} className='property-card' onClick={()=>{onClickHandler(index)}}>
                    <img src={property.image} alt={property.name} width={"500"} className='property-image'/>
                    <h3 className='property-name'>{property.name}</h3>
                    <p className='property-location'>{property.location}</p>
                    <p className='property-price'>{property.price}</p>
                    <br/>
                </div>
            ))}
        </div>
    </>
  )
}
