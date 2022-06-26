import React from 'react';

const Error = () => {
    return (
        <div className='error'>
            <h1>Could  not fetch data</h1>
            <button onClick={()=>window.location.reload()}>Reload</button>
        </div>
    );
}

export default Error;
