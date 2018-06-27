import React from 'react';
import { observer, inject } from 'mobx-react';

import CitiesListItem from '../CitiesListItem/CitiesListItem';
import { PropTypes as mobxPropTypes } from "mobx-react";

const CitiesList = inject('Store')(observer(({ Store }) => {
    const citiesList = Store.citiesList;

    return (
        <div>
            <h4>List of cities</h4>
            { citiesList.length > 0 ? 
             <ul className="list-group">
                {citiesList.map((item) =>
                    <CitiesListItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        deleteCityFromList={Store.deleteCityFromList}
                        showCityWeather={Store.fetchCityWeather}
                    />
                )}
            </ul>
            : 
            <div>No cities</div> }
        </div>
    );
}));

CitiesList.propTypes = { 
    Store: mobxPropTypes.observableObject,
}

export default CitiesList;