import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';
import { useState,useEffect } from 'react';
import Profile from './Profile';
import Avatar from './Avtar';
import AvatarProfile from './AvtarProfile';

function App() {
  const[changeSize,setChangeSize]=useState(20)
  useEffect(()=>{
    setTimeout(()=>{
      setChangeSize(300);
    },7000)
  },[])
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
    <AvatarProfile size={100
  } person={{name:"XYZ", imageId:"1bX5QH6"}}/>  
     <AvatarProfile
        size={changeSize}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <AvatarProfile
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <AvatarProfile
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