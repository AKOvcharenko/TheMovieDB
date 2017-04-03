import Navigation from './Navigation.jsx';
import PersonsPage from './PersonsPage.jsx';
import React, { Component } from 'react';
import store from './../store/store.js';
import { Provider } from 'react-redux';


class App extends Component{


    render(){
        return (
            <Provider store={store}>
                <div>
                    <Navigation/>
                    <PersonsPage/>
                </div>
            </Provider>
        )
    }
}


export default App;