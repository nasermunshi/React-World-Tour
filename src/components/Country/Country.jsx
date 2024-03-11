import { useState } from 'react';
import'./Country.css'
const Country = ({country, handleVisitedCountry}) => {
 const {name, flags, population, area, cca3} = country;

 const [visited, setVisited ] = useState(false);

 const handleVisited =()=>{
  setVisited(!visited);                  
 }




return (
  // Visited State ; 
<div className={`country ${visited ? 'visited' : 'non-visited'}`}>
 <h3 style={{color: visited ? 'purple':'white'}}>{name.common}</h3>
 <img src={flags.png} alt="" />  
 <p>population:{population}</p>                                                         
 <p>Area: {area}</p>  
 <p><small>Code: {cca3}</small></p>
 <button onClick={()=> handleVisitedCountry (country)}>mark visited</button> 
 <br />
 <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>  
 {visited ?  'I Have Visited This Country' : 'I Went to Visite'}                                                    
</div>
   );
};

export default Country;