import React from 'react';
import PropTypes from 'prop-types';

const WeatherView = (props) => {
    const {
        name,
        coord,
        wind,
        country,
        humidity,
        pressure,
        temperature
    } = props;

    return (
        <div className="weather-view">
            <div className="weather-view-group">
                <h3>
                    <i className="material-icons">
                        location_city
                    </i>
                    {name}, {country}
                </h3>
            </div>
            <div className="weather-view-group">
                <i className="material-icons">
                    explore
                </i>
                <span>
                    Coordinates: 
                </span>
                <span>
                    {coord.lat}&nbsp;
                    {coord.lon}
                </span>
            </div>
            <div className="weather-view-group">
                <i className="material-icons">
                    wb_sunny
                </i>
                <span>
                    Temperature: 
                </span>
                <span>
                    {temperature} &deg;C
                </span>
            </div>
            <div className="weather-view-group">
                <i className="material-icons">
                        cloud
                </i>
                <span>
                   Wind speed: 
                </span>
                <span>
                    {wind.speed} m/s
                </span>
            </div>
            <div className="weather-view-group">
                <i className="material-icons">
                        opacity
                </i>
                <span>
                   Humidity: 
                </span>
                <span>
                   {humidity} %
                </span>
            </div>
            <div className="weather-view-group">
                <i className="material-icons">
                    trip_origin
                </i>
                <span>
                    Pressure: 
                </span>
                <span>
                    {pressure}
                </span>
            </div>
            {props.children}
        </div>
    );
};

WeatherView.propTypes = {
    name: PropTypes.string.isRequired,
    coord: PropTypes.object.isRequired,
    wind: PropTypes.object.isRequired,
    country: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    pressure: PropTypes.number.isRequired,
    temperature: PropTypes.number.isRequired,
    children: PropTypes.any
}

export default WeatherView;

