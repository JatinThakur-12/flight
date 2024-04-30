import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import PlaneClass from './components/PlaneClass'
import Input2 from './components/Input2'
import { airportData } from './data/airport'

function App() {
  const [count, setCount] = useState(0)
  const [from, setFrom] = useState({
    "airportCode": "DCA",
    "airportName": "Ronald Reagan Washington National",
    "cityCode": "WAS",
    "cityName": "Washington, D.C.",
    "countryCode": "US",
    "countryName": "United States",
    "continent": "North America"
  })
  const [to, setTo] = useState({
    "airportCode": "BWI",
    "airportName": "Baltimore Washington International",
    "cityCode": "WAS",
    "cityName": "Washington, D.C.",
    "countryCode": "US",
    "countryName": "United States",
    "continent": "North America"
  })
  const [Adult, setAdult] = useState(0)
  const [Child, setChild] = useState(0)
  const [Infant, setInfant] = useState(0)
  const [cls, setCls] = useState('Economy')
  const airportList = airportData;
  

  return (
    <>
     
      <Input2 label={'From'} location={from} airportData={airportList} handleLocation={(data)=>{
        setFrom(data)
      }}/>
      <Input2 label={'To'} location={to} airportData={airportList} handleLocation={(data)=>{
        setTo(data)
      }}/>
      <input type="text" disabled="true" placeholder={`${Adult+Child+Infant} Traveller, ${cls}`}></input>


      <div className='flex flex-row gap-4'>
        <div>
          Adult
          <Counter val={Adult} handleCount={(value)=>{
            setAdult(value)
          }}/>
        </div>
        <div>
          {`Child (2-12yrs)`}
          <Counter val={Child} handleCount={(value)=>{
            setChild(value)
          }}/>
        </div>
        <div>
          {`Infant Below 2 yrs`}
          <Counter val={Infant} handleCount={(value)=>{
            setInfant(value)
          }} />
        </div>
      </div>
      <div className='flex flex-col'>
        <PlaneClass handleClass={(cls)=>{
          setCls(cls)
        }}/>
      </div>

    </>
  )
}

export default App
