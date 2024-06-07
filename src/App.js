import React, { Component } from "react";
import Cardlist from './Cardlist';
import robots from "./Robots";
import Search from "./Search";
import "./App.css";
import Scroll from "./Scroll";
class App extends Component {
    constructor() {
        super()
        this.state={
            robots: robots,
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render() {
        const filterrobots=this.state.robots.filter(robot => {
                                                      return (robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()))
        });
                                                    
        return(
            <div className="tc">
                <h1 className='f1'>ROBOFRIENDS</h1>
                <Search searchchange={this.onSearchChange}/>
                <Scroll>
                    <Cardlist robots={filterrobots}/>
                </Scroll>
            </div>
        )}
}
export default App;