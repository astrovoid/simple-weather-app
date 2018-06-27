import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

const Search = observer((props) => {
    const {
        errorOnRequest,
        fetchCityWeather
    } = props;


    let handleClick = (event) => {
        event.preventDefault();

        let formData = new FormData(event.target)

        fetchCityWeather(formData.get('city'))
    }
    
    return (
        <div>
            <form className="input-group" onSubmit={handleClick}>
                <input className="form-control" type="text" name="city" placeholder="Enter city"/>
                <div className="input-group-append">
                    <input className="btn btn-primary" type="submit" value="Show weather"/>
                </div>
            </form>
            { errorOnRequest && <div className="request-error">{errorOnRequest}</div>}
        </div>
    );
});

Search.propTypes = { 
    errorOnRequest: PropTypes.string,
    fetchCityWeather: PropTypes.func.isRequired
}

export default Search;