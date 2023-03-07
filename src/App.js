import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';
import { useState,useEffect } from 'react';
import Profile from './Profile';
import Avatar from './Avtar';

function App() {
  // const[counter,setCounter]=useState(0)
  // useEffect(()=>{
  //   console.log("use effect called");
  //   const timer=setTimeout(() => {
  //     setCounter(counter+1)
  //   },15000);
  //   return()=>{
  //     clearTimeout(timer)
  //     console.log("unmounting ");
  //   }
  // },[counter])
  return (
    <div className="App">
       <header className="App-header">
        <h1>GREATEST SCIENTISTS</h1> 
  {/* //       <img src={logo} className="App-logo" alt="logo" /> */}
  {/* //       <p> */}
  {/* //         Edit <code>src/App.js</code> and save to reload. */}
  {/* //       </p> */}
  {/* //       <a */}
  {/* //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  {/* //       > */}
  {/* //         Learn React */} 
  {/* //       </a> */}
    {/* <Profile/> */}
    <Avatar size={100
  } person={{name:"XYZ", imageId:"1bX5QH6"}}/>  
     <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
      </header>
    </div>
  );
}
export default App; 