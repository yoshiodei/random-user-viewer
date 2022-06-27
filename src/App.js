import {useState, useEffect} from 'react';
import DataFilter from './components/DataFilter';
import EmptyList from './components/EmptyList';
import Error from './components/Error';
import LoadingSpinner from './components/LoadingSpinner';
import Users from './components/Users';
import './styles/listStyles.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filteredData, setFilteredData] = useState([]);


// fetch data on page load
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
    .then((res) => {
        if(!res.ok){
          setLoading(false);
          setData([]);
          setError(true)
          throw Error('Could not fetch data!');
        }
        return res.json();
    })
    .then((data) => {
      setData(data.results);
      setLoading(false);
      setError(false);
    })
    .catch(() => {
      setData([]);
      setLoading(false);
      setError(true);
    })

    console.log("data",data);

  },[]);

  const switchCountry = (country) => {
    if(country){
      let filteredList = data.filter(user => user.location.country === country);
      setFilteredData(filteredList);
      setData([]);
    }
    else {
      setFilteredData([]);
    }
  
  }  

  return (
    <main className="App">
      <DataFilter switchCountry={switchCountry} />  
      <section className='main-section'>
        { loading && <LoadingSpinner /> }
        { error && <Error /> } 
        { (filteredData.length === 0 && data.length !== 0) && <Users data={data} /> }
        { (filteredData.length !== 0) && <Users data={filteredData} /> }
        { (filteredData.length === 0 && data.length === 0 && !loading && !error) && <EmptyList /> }
      </section>
    </main>
  );
}

export default App;
