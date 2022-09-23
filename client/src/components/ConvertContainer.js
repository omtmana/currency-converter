import { useState } from 'react'

const ConvertContainer = ({ exchange }) => {
   const { from, to, amount, result } = exchange
   const [dollar, setDollar] = useState('')
   const floatDollar = parseFloat(dollar)
   const total = (floatDollar * result).toFixed(2)
   const resultRound = result.toFixed(2)

   // console.log('dollar', typeof(parseFloat(dollar)))
   // console.log('floatDollar',floatDollar)
   
   return (
      <div>
         <div>
            <h1>USD: {from}</h1>
            <h3>$: 1</h3>
            <h1>PHP: {to}</h1>
            <h3>PHP: {resultRound} </h3>
         </div>
         <div>
            <form>
               <input type='float'
                  placeholder='USD'
                  value={dollar}
                  onChange={e => setDollar(e.target.value)}
               />
            </form>
            <p> Total: {total} </p>
         </div>
      </div>
   )
}

export default ConvertContainer;