import React, {useState, useEffect} from 'react'

const Convert = () => {
   const [convert, setConvert] = useState([])

   useEffect(() => {
      fetch('https://api.exchangerate.host/convert?from=USD&to=PHP')
      .then(res => res.json())
      .then((convert) => setConvert(convert))
   })

   return (
      <div className="convert">
         <div className="convert-container">
            <h1> USD <span> PHP </span> </h1>
         </div>
      </div>
   )
}

export default Convert;