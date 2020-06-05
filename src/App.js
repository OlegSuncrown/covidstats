import React, { useState, useEffect} from 'react';
import Chart from './components/Chart'
import CountrySelector from './components/CountrySelector'
import Cards from './components/Cards'

function App() {

const [data, setData] = useState({})
const [countriesList, setCountriesList] = useState([])
const [selectedCountry, setSelectedCountry] = useState('')

const url = 'https://covid19.mathdro.id/api'

const fetchData = async (url) => {
  let response
  if(selectedCountry){
    response = await fetch(`${url}/countries/${selectedCountry}`)
  } else {
    response = await fetch(url)
  }
  //const response = await fetch(url)
  const data = await response.json()
  const {confirmed, recovered, deaths, lastUpdate} = data
  const modifiedData = {
    confirmed,
    recovered,
    deaths,
    lastUpdate,
  }
  setData(modifiedData)
}

const handleChange = (country) => {
  setSelectedCountry(country)
}

useEffect(() => {
  fetchData(url)
}, [selectedCountry])

  return (
    <div className="container-flex bg-light p-2">
      
      
      <h1 className="text-center display-3 mt-3 font-weight-bold">COVID-19</h1>
      <h3 className="text-center text-primary font-weight-bold">Corona tracker</h3>
      <div className="row mb-5 mt-3">
        <div className="col-lg-8 mx-auto">
          <Cards 
          data={data}
          />
        </div>
      </div>

      <CountrySelector
        setCountriesList={setCountriesList} 
        countriesList={countriesList}
        handleChange={handleChange}
      />
     
        <div className="row">
          <div className="col-lg-2">
          </div>
     
          <div className="col-lg-8">
            <Chart 
              data={data}
              selectedCountry={selectedCountry}
            />
          </div>
    
        </div>

      
    </div>
  );
}

export default App;
