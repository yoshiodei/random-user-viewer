import {useState, useEffect} from 'react';
import DataFilter from './components/DataFilter';
import Error from './components/Error';
import LoadingSpinner from './components/LoadingSpinner';
import UsersList from './components/UsersList';
import { GET_ALL_USERS } from './endPoints/fetchData';
import './styles/listStyles.css';

function App() {
  const [country,setCountry] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => { GET_ALL_USERS(setUserData,setLoading,setError) },[]);  

  if (loading) return <LoadingSpinner />;
  if (error) return <Error />;

  return (
    <main className="App">
      <DataFilter setCountry={setCountry} />  
      <section className='main-section'>
        <UsersList country={country} userData={userData} />
      </section>
    </main>
  );
}

export default App;
