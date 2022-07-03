import '../styles/listStyles.css';
import Empty from './EmptyList';
import User from './User';

const Users = ({userData, country}) => {

    const filteredUserData = userData.filter(userInfo =>{ 
        return (userInfo.location.country === country || '' === country)
    });
    
    if(!filteredUserData.length) return <Empty />
    
    return (
        <>
            <div className='list-heading'>
                <h3>Name</h3>
                <h3>Gender</h3>
                <h3>Location</h3>
                <h3>Email</h3>
                <h3>Find On Map</h3>
            </div>
            <div className='user-list'>
                {filteredUserData.map(userInfo => (<User userInfo={userInfo} />))}
            </div>
        </>
    );
}

export default Users;
