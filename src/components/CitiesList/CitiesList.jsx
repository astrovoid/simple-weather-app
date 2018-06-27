import React from 'react';
import { observer, inject } from 'mobx-react';

import CitiesListItem from '../CitiesListItem/CitiesListItem';

const CitiesList = inject('Store')(observer(({ Store }) => {

    return (
        <div>
            <h4>List of cities</h4>
            { Store.citiesList.length > 0 ? 
             <ul className="list-group">
                {Store.citiesList.map((item) =>
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

export default CitiesList;