import React, { Component } from "react";
import CardList from "./CardList";
import { friends } from './friends';
import SearchBox from './SearchBox';

class App extends Component {
    constructor () {
        super()
        this.state = {
            friends: friends,
            searchfield: '',
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredFriends = this.state.friends.filter(friend => {
            return (
                friend.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
                || friend.email.toLowerCase().includes(this.state.searchfield.toLowerCase())
                || friend.phone.toLowerCase().includes(this.state.searchfield.toLowerCase())
            );
        })
        return (
            <div className = "tc bg-blue">
                <h1 className ="ma0 pa3 f1 ">Friend Finder!</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList friends={filteredFriends}/> 
            </div>
        );
    }
}

export default App;