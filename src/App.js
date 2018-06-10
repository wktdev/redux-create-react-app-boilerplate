import React, { Component } from 'react';
import SomeFakeComponent from './components/SomeFakeComponent';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import combinedReducers from "./reducers"


// , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(combinedReducers);

class App extends Component {

    render() {

       
       
        return ( 
          <Provider store = { store }>
            <div className = "App" >
            <SomeFakeComponent/>
            </div> 
          </Provider>
        );
    }
}

export default App;