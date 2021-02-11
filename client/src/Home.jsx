import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function Home({fetchUrl}) {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("https://restcountries.eu/rest/v2/all")
      console.log(request.data);
      setCountries(request.data)
      return request
    }
    fetchData() 
  }, [fetchUrl])


  return (
    <div className="row">
      <div className="country">
        {countries.map((country) => (
          <div>
            <img
              key={country.id}
              className="flag"
              src={country.flag}
              alt={country.name}
            />
            <p>{country.name}</p>
          </div>
        ))}
      </div>
      
    </div>
  )
}
