export const GET_ALL_USERS = (setUserData,setLoading,setError) => (
    fetch('https://randomuser.me/api/?results=20')
    .then((res) => {
        if(!res.ok){
          setLoading(false);
          setUserData([]);
          setError(true)
          throw Error('Could not fetch data!');
        }
        return res.json();
    })
    .then((data) => {
      setUserData(data.results);
      setLoading(false);
      setError(false);
    })
    .catch(() => {
      setUserData([]);
      setLoading(false);
      setError(true);
    })
)