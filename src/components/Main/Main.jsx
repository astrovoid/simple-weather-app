import React from 'react';

import Search from '../Search/Search';
import WeatherView from '../WeatherView/WeatherView';
import CitiesList from '../CitiesList/CitiesList';
import DefaultCity from '../DefaultCity/DefaultCity';

import CircularProgress from '@material-ui/core/CircularProgress';
import { observer, inject } from 'mobx-react';

const Main = inject('Store')(observer(({ Store }) => {
    let activeCity = Store.activeCity,
        errorOnRequest = Store.fetchCity.error,
        fetchCityWeather = Store.fetchCityWeather;
    
    return (
        <div className="main">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="search-bar">
                            <Search 
                                errorOnRequest={errorOnRequest}
                                fetchCityWeather={fetchCityWeather}
                            />
                        </div>
                        <div className="main-content">
                            {Store.fetchCity.status === 'Loading' ?
                                <CircularProgress />
                                : Store.fetchCity.status === 'Success' && Store.activeCity ?
                                    <WeatherView
                                        name={activeCity.name}
                                        wind={activeCity.wind}
                                        coord={activeCity.coord}
                                        country={activeCity.sys.country}
                                        humidity={activeCity.main.humidity}
                                        pressure={activeCity.main.pressure}
                                        temperature={activeCity.main.temp}
                                    >
                                        <div className="btn-group weather-btn-group ">
                                            <button className="btn btn-warning btn-sm" onClick={Store.addCityToList} title="Add to favorite">
                                                <i className="material-icons">star</i>
                                            </button>
                                            <button className="btn btn-success btn-sm" onClick={Store.setDefaultCity}>
                                                <i className="material-icons">home</i>
                                            </button>
                                        </div>
                                    </WeatherView>
                                    :
                                    <div>Nothing to show</div>
                            }
                        </div>
                    </div>
                    <div className="col-4">
                        <DefaultCity/>
                        <CitiesList/>
                    </div>
                </div>
            </div>
        </div>
    );
}));

export default Main;