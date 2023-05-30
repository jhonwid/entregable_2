import { useEffect, useState } from 'react'
import './App.css'
// import { useState } from 'react'
import axios from 'axios'
import Weather from './components/Weather'
import { getRandom } from './utils/temp'



const bgImages = ["bg1", "bg2", "bg3", "bg4", "bg5"]

function App() {

  const [weatherInfo, setWeatherInfo] = useState(null)
  
  const [bgImage, setBgImage] = useState(getRandom(bgImages))

  const success = (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const API_KEY = "33055ce913c319c3173753acfe94c0a8"

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    axios.get(URL)
      .then(({data}) => setWeatherInfo(data))
      .catch((err) => console.log(err))
  }
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)

  }, [])

  const handleChangeQuote = () => {
    setBgImage(getRandom(bgImages))
  }

  return (

      // {
      // weatherInfo ? <Weater weatherInfo={weaterInfo} /> : <h2> Loading <h2/>
      // }

    <main className={`app ${bgImage}`}>
    
    <Weather weatherInfo={weatherInfo} />
    
    </main>
  )
}

export default App
