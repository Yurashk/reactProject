import React from 'react';
import './style.css';
// import {  Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navigation extends React.Component {

    state = {
        allData: this.props.renderData,
        orignCategories: this.props.renderData,
        filterData: []
    }

    componentDidMount() {
       
        this.setState({ filterData: this.orignCategoriess() });
    }


    orignCategoriess = () => {
       
        let filteredArr = [];

        if (this.state.orignCategories) {
            // for (let i = 0; i < this.state.orignCategories.length; i++) {
            //     filteredArr.push(this.state.orignCategories[i].bsr_category);
            //  }
            nextInput:
            for (let i = 0; i <this.state.orignCategories.length; i++) {
                var str = this.state.orignCategories[i].bsr_category;
                for (let j = 0; j < filteredArr.length; j++) 
                {
                    if (filteredArr[j] === str)continue nextInput;
                }
                filteredArr.push(str);
            }
            return filteredArr;
        }

    }
    render() {
        return ( 
            <Router>
        <div class="Navigation">
            <h2 class="text-light">
                Choose category
            </h2>

            {
                this.state.filterData.map((item, index) => {
                    return ( 
                        
                        <div class="mt-5">
                            <ul key = { index } >
                                 <Link to={`/${item}`}> <li class = "text-light " onClick={(evt) => this.props.takeValue(item)} > { item } </li> </Link>
                                
                            </ul>
                           
                        </div>
                    )
                })
            }
             <ul><Link to={`/all`}><li class = "text-light mt-5" onClick={(evt) => this.props.takeValue(0)}>All</li></Link></ul>
             
            </div>
            </Router>
        );
    }
}
export default Navigation;