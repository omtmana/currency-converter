import {useState} from 'react'

const ConvertContainer = ({ exchange }) => {
   const { from, to, amount, result } = exchange
   const [dollar, setDollar] = useState('')
   
   // const handleChange = ((e) => {
   //    e.preventDefault()
   // })
   console.log(typeof(result))
   console.log(typeof(dollar))

   return (
      <div>
         <div>
            <h1>USD: {from}</h1>
            <h3>$: 1</h3>
            <h1>PHP: {to}</h1>
            <h3>PHP: {result}</h3>
         </div>
         <div>
            <form>
               <input type='float'
               placeholder='USD'
               value={dollar}
               onChange={e => setDollar(e.target.value)}
               />
            </form>
            <h3> {dollar} </h3>
         </div>
      </div>
   )
}

export default ConvertContainer;