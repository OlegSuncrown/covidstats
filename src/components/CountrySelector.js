import React, {useEffect, useState} from 'react';

function CountrySelector(props) {
//const [focus, setFocus] = useState('0')

const url = 'https://covid19.mathdro.id/api/countries'
const fetchCountries = async (url) => {
  const response = await fetch(url)
  const data = await response.json()
  props.setCountriesList(data.countries.map(item => item.name))
  //console.log(data.countries.map(item => item.name))
}

useEffect(() => {
  fetchCountries(url)
}, [])

  return (
    <div className="d-flex justify-content-center">

    <div className="input-group mb-3 col-md-6">
    
    <select className="custom-select " defaultValue='' onChange={(e) => {props.handleChange(e.target.value)}}>
    
      <option  value=''>Choose...</option>
      {props.countriesList.map((country, i) => {
        return(
          <option className="" key={i} value={country}>{country}</option>
        )
      })}
    </select>
  </div>
    </div>
  )
}

export default CountrySelector
