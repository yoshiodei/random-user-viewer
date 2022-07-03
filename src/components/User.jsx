const User = ({userInfo}) => {
    const longitude = userInfo.location?.coordinates?.longitude;
    const latitude = userInfo.location?.coordinates?.latitude;
    const title = userInfo.name?.title;
    const firstName = userInfo.name?.first;
    const lastName = userInfo.name?.last;

    const getCoordinates = (latitude,longitude) => {
        return `https://www.openstreetmap.org/#map=15/${latitude}/${longitude}`
    }

    const getFullName = (title,firstName,lastName) => {
        return `${title} ${firstName} ${lastName}`
    }

    return (
        <div className='user-list__item' key={userInfo.id?.value}>
                <p>{getFullName(title,firstName,lastName)}</p>
                <p>{`${userInfo.gender}`}</p>
                <p>{`${userInfo.location?.city}, ${userInfo.location?.country}`}</p>
                <p>{`${userInfo.email}`}</p>
                <a href={getCoordinates(latitude,longitude)} target='_blank' >Locate</a>
        </div>
    );
}

export default User;
