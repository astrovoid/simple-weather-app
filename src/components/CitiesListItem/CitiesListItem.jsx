import React from 'react';
import PropTypes from 'prop-types';

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

CitiesListItem.propTypes = { 
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    deleteCityFromList: PropTypes.func.isRequired,
    showCityWeather: PropTypes.func.isRequired
}


export default CitiesListItem;