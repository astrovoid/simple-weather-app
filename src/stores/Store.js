import { observable, action } from 'mobx';
import api from '../config/config';
class Store {
    @observable fetchCity = {
        error: '',
        status: 'Pending'
    };

    @observable updateDefaultCity = {
        error: '',
        status: 'Pending'
    }

    @observable activeCity;
    @observable defaultCity = JSON.parse(localStorage.getItem('defaultCity')) || null;
    @observable citiesList = JSON.parse(localStorage.getItem('сitiesList')) || [];

    constructor() {
        this.autoupdateDefaultCity(60000)
    }

    @action('Fetch city weather')
    fetchCityWeather = async (city) => {
        this.fetchCity.error = '';
        this.fetchCity.status = 'Loading';

        try {
            let response = await fetch(`${api.URL}q=${city}&units=${api.metric}&appid=${api.API_KEY}`);
            let json = await response.json();

            let responseCode = +json.cod;

            switch (responseCode) {
                case (404):
                    this.fetchCity.error = json.message;
                    this.fetchCity.status = 'Failure';
                    break;
                case (200):
                    this.activeCity = json;
                    this.fetchCity.status = 'Success';
                    localStorage.setItem('lastActiveCity', JSON.stringify(this.activeCity));
                    
                    break;
                case (400):
                    this.fetchCity.error = 'Incorrect request';
                    this.fetchCity.status = 'Failure';
                    break;
                default:
                    this.fetchCity.error = 'Something went wrong';
                    this.fetchCity.status = 'Failure';
            }
            console.log(this.fetchCity.error)
        } catch (err) {
            throw err;
        }
    };

    @action('Autoupdate default city')
    autoupdateDefaultCity = (timeout) => {
        if (this.defaultCity)
            setTimeout(() => this.updateDateDefaultCity(this.defaultCity.name), timeout)
    }

    @action('Update date default city')
    updateDateDefaultCity = async () => {
        if (this.defaultCity) {
            try {
                let city = this.defaultCity.name;
                let response = await fetch(`${api.URL}q=${city}&units=${api.metric}&appid=${api.API_KEY}`);
                let json = await response.json();

                let responseCode = +json.cod;

                switch (responseCode) {
                    case (404):
                        this.fetchCity.error = json.message;
                        this.fetchCity.status = 'Failure';
                        break;
                    case (200):
                        this.defaultCity = json;
                        this.fetchCity.status = 'Success';
                        localStorage.setItem('defaultCity', JSON.stringify(this.defaultCity));
                        break;
                    default:
                        console.log('Something went wrong')
                }
            }
            catch (err) {
                throw err;
            }
        }
    }


    @action('Add city to list')
    addCityToList = () => {
        let exists = this.citiesList.findIndex(({ id }) => id === this.activeCity.id);

        if (exists) {
            this.citiesList.push(this.activeCity);
            localStorage.setItem('сitiesList', JSON.stringify(this.citiesList))
        } else {
            return;
        }
    }

    @action('Delete a city from list')
    deleteCityFromList = (id) => {
        this.citiesList = this.citiesList.filter(city => city.id !== id)
        localStorage.setItem('сitiesList', JSON.stringify(this.citiesList))
    }

    @action('Set default city')
    setDefaultCity = () => {
        this.defaultCity = this.activeCity;
        localStorage.setItem('defaultCity', JSON.stringify(this.defaultCity))
        this.autoupdateDefaultCity(60000)
    }
}

export default new Store();