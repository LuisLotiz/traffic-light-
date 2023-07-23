import { useEffect, useState } from "react"
import './app.css'


function App() {

  const [lights, setLights] = useState([{ color: 'red', isActive: false }, { color: 'yellow', isActive: false }, { color: 'green', isActive: false }])

  const changeLightsState = (color) => {
    const lightsCopy = [...lights]
    lightsCopy.forEach((light) => { light.color === color ? light.isActive = true : light.isActive = false })
    setLights(lightsCopy)
  }

  return (
    <div >
      <div className="post"></div>
      <div className="trafficLight">

        {lights.map((light) => {
          return (
            <div key={light.color} onClick={() => {
              changeLightsState(light.color)
            }} className={`${light.color} ${!light.isActive ? 'notglow' : 'glow'}`}  ></div>
          )

        })}
      </div>
    </div>
  )
}

export default App
