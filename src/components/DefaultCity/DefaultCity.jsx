import React from 'react';
import { observer, inject } from 'mobx-react';
import WeatherView from '../WeatherView/WeatherView';

const DefaultCity = inject('Store')(observer(({ Store }) => {
    let defaultCity = Store.defaultCity;

    return (
        <div>
            <h4>Weather in your city</h4>
            { Store.defaultCity ? 
                <WeatherView
                    name={defaultCity.name}
                    wind={defaultCity.wind}
                    coord={defaultCity.coord}
                    sys={defaultCity.sys}
                    humidity={defaultCity.main.humidity}
                    pressure={defaultCity.main.pressure}
                    temperature={defaultCity.main.temp}
                />
            :
                <div>Сity not selected</div>
            }
        </div>
    );
}));

export default DefaultCity;