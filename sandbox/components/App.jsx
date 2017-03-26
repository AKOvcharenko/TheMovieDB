import Navigation from './Navigation.jsx';
import React, { Component } from 'react';
import store from './../store/store.js';
import { Provider } from 'react-redux';


class App extends Component{


    render(){
        return (
            <Provider store={store}>
                <Navigation/>
            </Provider>
        )
    }
}


export default App;