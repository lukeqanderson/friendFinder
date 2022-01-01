import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { friends } from './friends';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Card image ={friends[0].image} name={friends[0].name} email={friends[0].email} phone={friends[0].phone}/>  
      <Card image ={friends[1].image} name={friends[1].name} email={friends[1].email} phone={friends[1].phone}/>  
      <Card image ={friends[2].image} name={friends[2].name} email={friends[2].email} phone={friends[2].phone}/>  
      <Card image ={friends[3].image} name={friends[3].name} email={friends[3].email} phone={friends[3].phone}/>  
      <Card image ={friends[4].image} name={friends[4].name} email={friends[4].email} phone={friends[4].phone}/>  
      <Card image ={friends[5].image} name={friends[5].name} email={friends[5].email} phone={friends[5].phone}/>  
      <Card image ={friends[6].image} name={friends[6].name} email={friends[6].email} phone={friends[6].phone}/>  
      <Card image ={friends[7].image} name={friends[7].name} email={friends[7].email} phone={friends[7].phone}/>  
      <Card image ={friends[8].image} name={friends[8].name} email={friends[8].email} phone={friends[8].phone}/>  
      <Card image ={friends[9].image} name={friends[9].name} email={friends[9].email} phone={friends[9].phone}/>  
      <Card image ={friends[10].image} name={friends[10].name} email={friends[10].email} phone={friends[10].phone}/>  
    </div>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
