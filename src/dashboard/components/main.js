import React from 'react';
import './style.css';
// import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class Main extends React.Component {
    state = {
        allData: this.props.renderData,
        orignData: this.props.renderData,
        categoriesToShow: 'all'
    }
    filterData = (e) => {
       
        let filteredList = this.state.orignData.filter(x => x.brand.toLowerCase().includes(e.target.value.toLowerCase()));
        this.setState({ allData: filteredList });
        if (this.props.putValue) this.setState({ categoriesToShow: this.props.putValue })
        
    }
    componentDidUpdate(prevProps, _) {
        if (prevProps.putValue.length !== this.props.putValue.length) {
            this.filterList();
            
            
            
        }
    }
    filterList = () => {
        if (this.props.putValue) {
            let filteredList = this.state.orignData.filter(x => x.bsr_category === this.props.putValue);
            this.setState({ allData: filteredList });
            this.setState({ categoriesToShow: this.props.putValue }) 
            
            
        }
        else {
            let filteredList = this.state.orignData;
            this.setState({ allData: filteredList });
           
        }
    }
    render() {
    
        return (
            <Router >
            <div class="container ">
                <div class="row mt-3 mb-3 justify-content-center">
                    <div class="col-10">      
                        <input placeholder="brand" onChange={this.filterData} />
                    </div>
                </div>
                <div class="row justify-content-center">
                    <table class="col-10  bg-light ">
                        <tbody class="rounded">
                            <tr class="border ">
                                <th class="border">Country</th>
                                <th class="border">Brand</th>
                                <th class="border">Price</th>
                                <th class="border">Mark</th>
                                <th class="border">Category</th>
                            </tr>
                            {
                                this.state.allData.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                             <td class="border">{item.domain}</td>
                                            <td class="border">{item.brand}</td>
                                            <td class="border">{item.price}</td>
                                            <td class="border">{item.stars}</td>
                                            <td class="border">{item.bsr_category}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
             </Router>
        );

    }
}
export default Main;