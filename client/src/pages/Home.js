
const Home = ({ convert }) => {
   console.log('convert', convert)
   // console.log('rate', convert.info.rate)

   return (
      <div className="home">
         <div className="home-container">
            <table>
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
            </table>
         </div>
      </div>
   )
}

export default Home;