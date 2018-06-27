import React from 'react';
import { observer } from 'mobx-react';

import Store from '../../stores/Store';

const Search = observer((props) => {

    let handleClick = (event) => {
        event.preventDefault();

        let formData = new FormData(event.target)

        Store.fetchCityWeather(formData.get('city'))
    }
    
    return (
        <div>
            <form className="input-group mb-3" onSubmit={handleClick}>
                <input className="form-control" type="text" name="city" placeholder="Enter city"/>
                <div className="input-group-append">
                    <input className="btn btn-primary" type="submit" value="Show weather"/>
                </div>
            </form>
            { Store.fetchCity.error && <div className="invalid-feedback">{Store.fetchCity.error}</div>}
        </div>
    );
});

export default Search;