import React, {useState, useEffect} from 'react'
import ConvertContainer from '../components/ConvertContainer'

const Convert = () => {
   const [convert, setConvert] = useState([])

   useEffect(() => {
      fetch('https://api.exchangerate.host/convert?from=USD&to=PHP')
      .then(res => res.json())
      .then((convert) => setConvert([convert]))
      // .then((data) => console.log(data))
   }, [])
// console.log('convert', convert)
   return (
      <div className="convert">
         <div className="convert-container">
            <h1> USD <span> PHP </span> </h1>
            {
               convert?.map((exchange) => {
                  return <ConvertContainer key={exchange.id }exchange={exchange}/>
               })
            }
         </div>
      </div>
   )
}

export default Convert;