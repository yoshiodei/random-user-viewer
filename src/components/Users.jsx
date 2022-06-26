import '../styles/listStyles.css';

const Users = ({data}) => {
    return (
        <div className='user-list'>
           { data.map( user => (
                <div className='user-list__item' key={user.id?.value}>
                    <div className='user-list__item-div'>
                        <h3>Name:</h3>
                        <p>{`${user.name?.title} ${user.name?.first} ${user.name?.last}`}</p>
                    </div>
                    <div className='user-list__item-div'>
                        <h3>Gender:</h3>
                        <p>{`${user.gender}`}</p>
                    </div>
                    <div className='user-list__item-div'>
                        <h3>Location:</h3>
                        <p>{`${user.location?.city}, ${user.location?.country}`}</p>
                    </div>
                    <div className='user-list__item-div'>
                        <h3>E-mail:</h3>
                        <p>{`${user.email}`}</p>
                    </div>
                    <div className='user-list__item-div'>
                        <h3>Find On Map:</h3>
                        <a href={`https://www.openstreetmap.org/#map=${user.location?.cordinates?.latitude}/${user.location?.cordinates?.longitude}`} target='_blank' >Locate</a>
                    </div>
                </div>
             ))
            }
        </div>
    );
}

export default Users;
