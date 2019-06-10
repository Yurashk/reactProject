import React from 'react';
import Dashbord from './dashboard/dashboard'
import './App.css';
import { connect } from 'react-redux';
import { personsFetchData } from './dashboard/actions/persons'
import logo from './logo.svg';

class App extends React.Component {
  state = {
    localData: [],
  }
  componentDidMount() {
    this.props.fetchData(`https://demo8421975.mockable.io/products`);
    const data = this.props.data;
    this.setState({ localData: data });
  }
  render() {
    if (this.props.data) {


      return (
        <div>
          <Dashbord dataMethod={this.props.data.products} />
        </div>
      );
    }
    else {
      return (
        <div class="container">
          <div class="row justify-content-center mt-5">

            <img src={logo} className="App-logo" alt="logo" />
          </div>

        </div>
      )
    }

  }
}


const mapStateToProps = state => {
  return {
    data: state.products.data
  };
};

const mapDispatchToProps = dispatch => {

  return {
    fetchData: url => dispatch(personsFetchData(url))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
