import React from 'react';

const DataFilter = ({ switchCountry }) => {

    const userNationality = [
        {country: 'United States', abbreviation: 'us'},
        {country: 'Canada', abbreviation: 'ca'},
        {country: 'Australia', abbreviation: 'au'},
        {country: 'Brazil', abbreviation: 'br'},
        {country: 'Germany', abbreviation: 'de'},
        {country: 'France', abbreviation: 'fr'},
        {country: 'United Kingdom', abbreviation: 'gb'},
        {country: 'Norway', abbreviation: 'no'},
        {country: 'New Zealand', abbreviation: 'nz'},
        {country: 'Iran', abbreviation: 'ir'},
        {country: 'Ireland', abbreviation: 'ie'},
        {country: 'Switzerland', abbreviation: 'ch'},
        {country: 'Denmark', abbreviation: 'dk'},
        {country: 'Spain', abbreviation: 'es'},
        {country: 'Netherlands', abbreviation: 'nl'},
        {country: 'Finland', abbreviation: 'fi'},
        {country: 'Turkey', abbreviation: 'tr'},
    ];

    const handleCountrySwitch = (e) =>{
        switchCountry(e.target.value);
    }

    return (
        <form className='filter-form'>
            <select onChange={(e) => handleCountrySwitch(e)}>
                <option value=''>All</option>
                {userNationality.map((nation,index) => (
                    <option value={nation.country}>{nation.country}</option>
                ))}
            </select>
        </form>
    );
}

export default DataFilter;
