import React from 'react';
import Main from './components/main'
import Navigation from './components/navigation';
import logo from '../logo.svg';
import './mainStyle.css';

class Dashboard extends React.Component {
    constructor(){
        super();
        this.output = this.output.bind(this)
    }
    state={
        category:0,
        categoryToShow:''
    }
    output(evt) {
        this.setState({category: this.state.category + evt});
        var d;
        if(evt!==d){
            this.setState({ categoryToShow: evt }); 
        }
        d=evt;
    }
    render() {
        if (this.props.dataMethod) {
            return (
                <div class="container-fluid" >
                    <div class="row">
                        <div class="col-3 bg-dark nav" >
                            <Navigation renderData={this.props.dataMethod} takeValue={this.output} />
                        </div>
                        <div class="col-9 border-left">
                            <Main renderData={this.props.dataMethod} putValue={this.state.categoryToShow} />
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div class="container">
                <div class="row justify-content-center mt-5"> 
                    <img src={logo}  className="App-logo" alt="logo" />
                </div>  
            </div>
            );
        }
    }
}

export default Dashboard;