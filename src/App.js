import React, { Component } from 'react';
import './App.css';
import { Provider } from 'mobx-react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

import Store from './stores/Store';

const stores = { Store };

class App extends Component {
    render() {
        return (
            <Provider {...stores}>
                <div className="App">
                    <Header />
                    <Main />
                </div>
            </Provider>
        );
    }
}

export default App;
