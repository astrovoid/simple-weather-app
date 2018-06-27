import React from 'react';

const CitiesListItem = (props) => {
    const {
        name,
        id,
        deleteCityFromList,
        showCityWeather
    } = props;

    return (
        <li className="list-group-item cities-list-item" >
            <div className="city-name" onClick={() => showCityWeather(name)}>{name}</div>
            <button className="btn btn-danger btn-sm delete-list-item" onClick={() => deleteCityFromList(id)}>X</button>
        </li>
    );
};

export default CitiesListItem;