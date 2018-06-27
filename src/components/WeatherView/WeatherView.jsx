import React from 'react';

const WeatherView = (props) => {
    const {
        name,
        coord,
        wind,
        sys,
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
                    {name}, {sys.country}
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

export default WeatherView;

