import React, {useState, useEffect} from 'react'
import ConvertContainer from '../components/ConvertContainer'

const Convert = ({convert}) => {
// console.log('convert', convert)
   return (
      <div className="convert">
         <div className="convert-container">
            <h1> USD <span> PHP </span> </h1>
            {
               convert?.map((exchange) => {
                  return <ConvertContainer key={exchange.id } exchange={exchange}/>
               })
            }
         </div>
      </div>
   )
}

export default Convert;