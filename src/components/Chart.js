import React, { useState, useEffect} from 'react';
import {Line, Bar} from 'react-chartjs-2'

function Chart({data, selectedCountry}) {
const [dailyData, setDailyData] = useState([])
const url = 'https://covid19.mathdro.id/api'

const fetchDailyData = async (url) => {
  const response = await fetch(`${url}/daily`)
  const data = await response.json()
  setDailyData(data)
}

useEffect(() => {
  fetchDailyData(url)
}, [])


const lineChart = (
  
  dailyData.length  
  ? (
    <div className="shadow-sm p-3 mb-5 bg-white rounded">
      <Line 
        data={{
        labels: dailyData.map((item) => item.reportDate),
        datasets: [{
          data: dailyData.map((item) => item.confirmed.total/1000),
          label: 'Infected',
          borderColor: 'blue',
          fill: true,
        }, {
          data: dailyData.map((item) => item.deaths.total/100),
          label: 'Deaths',
          borderColor: 'red',
          fill: true,
          backgroundColor: 'rgba(255, 0, 0, 0.3)'
        },
      ]
      }}
      />
    </div>
  ) : (<div className="alert alert-primary">no internet connection</div>)
)

const lineChartPerDay = (
  dailyData.length  
  ? (
    <div className="shadow-sm p-3 mb-5 bg-white rounded">
      <Line 
        data={{
        labels: dailyData.map((item) => item.reportDate),
        datasets: [
          {
            data: dailyData.map((item) => item.deltaConfirmed/10),
            label: 'infected per day (1:10)',
            borderColor: 'blue',
            fill: true,
            //backgroundColor: 'green'
          },
        {
          data: dailyData.map((item, i) => i > 0 ? item.deaths.total - dailyData[i - 1].deaths.total : item.deaths.total),
          label: 'Deaths per day',
          borderColor: 'red',
          fill: true,
          backgroundColor: 'rgba(255, 0, 0, 0.3)'
        },
      ]
      }}
      />
    </div>  
  ) : null
)

const BarChart = (
  
  data.confirmed
  
  ? (
    <Bar
      data = {{
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [{
          label: 'People',
          backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
          data: [data.confirmed.value, data.recovered.value, data.deaths.value]
          }
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${selectedCountry}` },
      }}
    />
  ) : null
)
//data: [data.confirmed.value, data.recovered.value, data.deaths.value]



  return (
    <div className="text-center">
      <h1>Chart</h1>
      {selectedCountry ? BarChart : lineChart}
      <h1>Daily chart</h1>
      {lineChartPerDay}
    </div>
  )
}

export default Chart
