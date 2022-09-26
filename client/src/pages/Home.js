import '../styles/Home.css'
const Home = ({ convert }) => {

   return (
      <div className="home">
            <div className="home-banner-container">
            <h1 style={{ fontSize: "3.5em", fontFamily:"Caveat"}}> Money <span className='transfer-animation'> Transfer </span></h1>
               <h4> Pera Padala <br></br> 24/7</h4>
            </div>
            <div className="home-converter-container">
               <div className="home-usd">
               <h3 style={{ fontFamily: "Caveat", letterSpacing:".1em" }}> US Dollar</h3>
                  <h4> $ 1.00 </h4>
               </div>
               <div>
               <h3 style={{fontSize:"2em", fontWeight:"900"}}> ⇌ </h3>
               </div>
               <div className="home-php">
               <h3 style={{ fontFamily: "Caveat", letterSpacing: ".1em"}}> Philippine Peso </h3>
                  {convert.map((result) => (
                     <h4> {result.result.toFixed(2)}</h4>
                  ))}
               </div>
            </div>
      </div>
   )
}

export default Home;
