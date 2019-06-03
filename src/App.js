import React from 'react';
import Dashbord from './dashboard/dashboard'
import './App.css';
// import { async } from 'q';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 



class App extends React.Component{
  state = {
    localData: [],
}
    async componentDidMount(){
    
    const api_url = await 
    fetch(`https://demo8421975.mockable.io/products`);
    const data=await api_url.json();
    this.setState({ localData: data });
   
  }
  render(){
    return(
      <div>
        <Dashbord dataMethod={this.state.localData.products} />
      </div>
    );
  }
}

export default App;
