import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { fetchQueryWeather } from './utils/api';
import { capitalizeWords } from './utils/functions';

function App() {
  const [data, setData] = useState();
  const [query, setQuery] = useState("london");

  useEffect(() => {
    fetchQueryWeather("london").then((data) => setData(data));
  }, []);

  return (
    <>
      <div>
        {!data ? <p>Loading...</p> :
        <div>
          {/* Header */}
          <div className="header">
            <h1>
              {`${capitalizeWords(data.resolvedAddress)} `}
              <span className="coords">{`(${data.latitude}, ${data.longitude})`}</span>
            </h1>
            
          </div>

          {/* Weather Data - 7 Days */}
          {data.days.map((day) => {
            return <p>{day.conditions}</p>
          })}
        </div>
        }
        
      </div>
    </>
  )
}

export default App
