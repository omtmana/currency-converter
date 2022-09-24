import '../styles/Home.css'
const Home = ({ convert }) => {

   return (
      <div className="home">
            <div className="home-banner">
            <h1 style={{ fontSize: "3.5em", fontFamily:"Caveat"}}> Money Transfer</h1>
               <h4> Pera Padala <br></br> 24/7</h4>
            </div>
            <div className="home-converter-container">
               <div className="home-usd">
                  <h3> US Dollar</h3>
                  <h4> $ 1.00 </h4>
               </div>
               <div>
               <h3> ⇌ </h3>
               </div>
               <div className="home-php">
                  <h3> Philippine Peso </h3>
                  {convert.map((result) => (
                     <h4> {result.result.toFixed(2)}</h4>
                  ))}
               </div>
            </div>
      </div>
   )
}

export default Home;

{/* <table>
   <tr>
      <th> USD </th>
      <th> PHP </th>
   </tr>
   <tr>
      <td> 1 </td>
      {convert.map((result) => (
         <td> {result.result.toFixed(2)}</td>
      ))}
   </tr>
</table> */}