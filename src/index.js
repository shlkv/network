import store from './data/store.js';
// import store from './data/Data.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


export let rerenderTree = (state) => {
ReactDOM.render(
      <React.StrictMode>
        <App 
          state = {state}
          dispatch={store.dispatch.bind(store)}
        //   addPost={store.addPost.bind(store)} 
        //   onPostChange={store.onPostChange.bind(store)}
        //   sendMessage={store.sendMessage.bind(store)}
        //   onMessageChange={store.onMessageChange.bind(store)}
        />
      </React.StrictMode>,
      document.getElementById('root')
      );      
    }
    
    rerenderTree(store.getState())
    store.subscribe(()=>{

        rerenderTree(store.getState())
        
        }) 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();















