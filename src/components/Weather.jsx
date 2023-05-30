import React from 'react'
import { useState } from 'react'
import { kelvinToCelsius, kelvinToFahrenheit } from '../utils/temp'

// //? colocar imagenes para que reemplacen las del API
// const weatherImages = {
//     "10n" : "/imagenes/weather/rain.png"
// }
// //? colocar imagenes para que reemplacen las del API

const Weather = ({weatherInfo}) => {
    console.log(weatherInfo)
    
    const [isCelsius, setIsCelsius] = useState(true)

    const handleChangeTemp = () => {
        setIsCelsius(!isCelsius)
    }

  return (
    <body className=' min-h-screen text-white flex justify-center items-center font-principal-font p-2'>
        
    <section className='text-center grid gap-6'>

        <h2 className='font-bold text-2xl text-black'>{weatherInfo?.name}, {weatherInfo?.sys.country}</h2>

        <section className='grid gap-4 sm:grid-cols-[1fr_auto]'>

    {/* //? Seccion arriba */}
        <article className='bg-white/70 p-2 rounded-3xl grid grid-cols-2 items-center'>
                
                <h3 className='text-black col-span-2 capitalize'>{weatherInfo?.weather[0].description}</h3>
                
                <span className='text-black text-4xl'>{isCelsius ? kelvinToCelsius(weatherInfo?.main.temp) : kelvinToFahrenheit(weatherInfo?.main.temp)}</span>
                
                <div>
                   <img src= {`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt="" /> 
                </div>
           </article>

    {/* //? seccion abajo */}
            <section className='bg-white/70 p-2 py-6 rounded-3xl grid grid-cols-3 justify-itmes-center sm:grid-cols-1 sm:items-center'>
                
                <article className='flex gap-2 sm:items-center'>
                    <div>
                        <img src="/images/wind.png" alt="" />
                    </div>
                    <span className='text-black'>{weatherInfo?.wind.speed}m/s</span>
                </article>

                <article className='flex gap-2 sm:items-center'>
                    <div>
                        <img src="/images/humidy.png" alt="" />
                    </div>
                    <span className='text-black'>{weatherInfo?.main.humidity}%</span>
                </article>

                <article className='flex gap-2 sm:items-center'>
                    <div>
                        <img src="/images/pressure.png" alt="" />
                    </div>
                    <span className='text-black'>{weatherInfo?.main.pressure}hPa</span>
                </article>

            </section>

        </section>

            <button className='text-black' onClick={handleChangeTemp}>Change F/C</button>

    </section>
    </body>
  )
}

export default Weather