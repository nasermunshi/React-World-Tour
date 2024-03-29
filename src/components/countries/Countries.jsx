import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {
 const [countries, setCountries] = useState([]);
const [visitedcountries, setvisitedcountries] = useState([]);


 useEffect(()=>{
 fetch('https://restcountries.com/v3.1/all') 
 .then (res =>res.json()) 
 .then (data =>setCountries(data));              
 }, [])

 const handleVisitedCountry = country =>{
  console.log('Add this to your visited country');
  const newvisitedcountries = [...visitedcountries, country]
  setvisitedcountries(newvisitedcountries)
 }

return (
 <div >
  <h3>Countries:{countries.length}</h3> 
  <div>
  <h5>Visited Countries: {visitedcountries.length}</h5>
  <ul>
    {
      visitedcountries.map(country=> <li key={country.cca3}>
        {country.name.common}</li>)
    }
  </ul>
  </div>
 <div className="countries-container">
 {
     countries.map(country =><Country key={country.cca3}
      handleVisitedCountry = {handleVisitedCountry}
       country={country} ></Country>)                
   }
   </div>                                                     
</div>
 );
};

export default Countries;