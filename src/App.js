
import './App.css';
import Dash from './components/Dash';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import Country from './components/Country';

function App() {

  //STATES.
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [continent, setContinent] = useState('');

  //UPDATING THE SEARCH TO FIND COUNTRIES
  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search)
  }

  //FILTERING BY REGION
  const selected = (e) => {
    setContinent(e.target.value);
    console.log(continent)
  }

  useEffect(()=>{
    getCountries();
  }, [search])


  //FETCHING THE DATA FROM THE SOURCE
  const getCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    setCountries(data);
    console.log(data)
    console.log(data[22].population.toString().length)
    console.log(data[22].continents[0])
  }

  return (
    <div className="App">
      <Dash/>
      <div className="main">

        <Header 
        search = {search}
        updatesearch = {updateSearch}
        selected = {selected}/>


        <div className="grido">
          {countries.filter((val)=> {
            if(search==''){
              return val;
            }else if(val.name.common.toLowerCase().includes(search.toLocaleLowerCase())){
              return val;
            }
          }).map(country => (
            <Country
            key={country.index} 
            flag={country.flags.png}
            title={country.name.common}
            population={country.population}
            capital={country.capital}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;
