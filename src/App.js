
import './App.css';
import Dash from './components/Dash';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import Country from './components/Country';
import User from './components/User';

function App() {

  //STATES.
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [continent, setContinent] = useState('');
  const [error, setError] = useState(null);

  //UPDATING THE SEARCH INPUT VALUE
  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search)
  }

  useEffect(()=>{
    getCountries();
  }, [search])


  //FETCHING THE DATA FROM THE SOURCE
  const getCountries = async () => {

    try{
      const response = await fetch('https://restcountries.com/v3.1/all');

      if(!response.ok){
        throw Error('Could not Fetch the Data for that Resource ....');
      }
      const data = await response.json();
      setCountries(data);
      setError(null)
      console.log(data)

//ERROR HANDLING
    } catch (err){
      setError(err.message)
      console.log(err.message)
    }
  }

  return (
    <div className="App">
      <User/>
      <Dash/>
      <div className="main">
        <div>
          <h2>My List</h2>
        </div>

        <Header 
        search = {search}
        updatesearch = {updateSearch}
        />

        {error && <div style={{color:'red', fontSize:'18px', marginTop:'2rem'}}>{error}</div>}

        <div className="grido">
          {countries.filter((val)=> {
            if(search==''){
              return;
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
