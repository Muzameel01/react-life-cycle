import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends Component{
  constructor(){
    super();
    console.log(this.props);
    this.setState({
      clor:"red"
    })
    console.log("constructor methiod");
  }
  static getDerivedStateFromProps()
  {
    console.log("getDerivedStateFromnProps called");
  }
  shouldComponentUpdate(){
    console.log("shouldcomponetupdate");
    return true
  }
  getSnapshotBeforeUpdate(){
    console.log("getSnapshotBeforeUpdate");
  }
  componentDidUpdate(){
    console.log("componentDidUpdate");
  }
  componentWillUnmount(){
    console.log("componentWillUnmount");
  }
  componentDidMount(){
    console.log("componentrDidMount called");
    setTimeout(()=>{
      this.setState({...this.state, color:"yellow"})
    },15000)
  }
render(){
  console.log("render method");
return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
