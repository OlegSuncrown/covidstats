import React from 'react'
import CountUp from 'react-countup';

function Cards({data}) {

  if(!data.confirmed){
    return(
      null
    )
  }

  return (
  <div className="">
 
      <div className="card-deck ">

        <div className="card shadow-sm" >
          <div className="card-body " >
            <h6 className="card-title text-muted">Infected</h6>
              <CountUp start={0} end={data.confirmed.value} duration={2.5} separator=","/>
              <br/>
              <div className="text-muted mt-1">
              {new Date(data.lastUpdate).toDateString()}
              </div>
              <div className="mt-1"><small>Number of active cases of COVID-19.</small></div>
          </div>
          <div className="card-footer bg-info">
          </div>
        </div>

        <div className="card shadow-sm" >
          <div className="card-body " >
            <h6 className="card-title text-muted">Recovered</h6>
              <CountUp start={0} end={data.recovered.value} duration={2.5} separator=","/>
              <br/>
              <div className="text-muted mt-1">
              {new Date(data.lastUpdate).toDateString()}
              </div>
              <div className="mt-1"><small>Number of recoveries from COVID-19.</small></div>
          </div>
          <div className="card-footer bg-success">
          </div>
        </div>

        <div className="card shadow-sm" >
        <div className="card-body " >
          <h6 className="card-title text-muted">Deaths</h6>
            <CountUp start={0} end={data.deaths.value} duration={2.5} separator=","/>
            <br/>
            <div className="text-muted mt-1">
            {new Date(data.lastUpdate).toDateString()}
            </div>
            <div className="mt-1"><small>Number of deaths caused by COVID-19.</small></div>
        </div>
        <div className="card-footer bg-danger">
        </div>
      </div>
      
      </div>
  </div>
  )
}

export default Cards
