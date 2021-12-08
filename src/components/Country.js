import React from 'react'

const Country = ({flag, title, population, capital, currency}) => {
    return (
        <div className='card'>
            <img src={flag} alt='flag'/>
            <div className='info'>
                <h3>{title}</h3>
                <p>Population: {population}</p>
                <p>Capital: {capital}</p>
                <p>Currency: {currency}</p>
            </div>
        </div>
    )
}

export default Country
