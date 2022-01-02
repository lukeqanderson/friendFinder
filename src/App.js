import React, { Component } from "react";
import CardList from "./CardList";
import { friends } from './friends';
import SearchBox from './SearchBox';

// creates a class App with a state containing friends and a searchfield
// which allows for the cardList and searchBox to communites and adjust.
class App extends Component {
    // creates the state in the constructor containing friends and 
    // searchfield.
    constructor () {
        // calls super to call the constructor of Component class
        super()
        this.state = {
            friends: friends,
            searchfield: '',
        }
    }

    // a function for when input changes, an event occurs that changes the 
    // state of searchfield to the value entered in the search bar. 
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        // filters and returns new card list based on whether they match
        // the searchfield state.
        const filteredFriends = this.state.friends.filter(friend => {
            return (
                // in order to parse through the friends list, check for
                // for search bar input (through searchfield) for matching
                // characters in name, email and phone.
                friend.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
                || friend.email.toLowerCase().includes(this.state.searchfield.toLowerCase())
                || friend.phone.toLowerCase().includes(this.state.searchfield.toLowerCase())
            );
        })
        return (
            <div className = "tc">
                {/* for the title of the Friend Finder App */}
                <h1 className ="ma0 pa3 f1">Friend Finder!</h1>
                {/* sets search change to onSearchChange to allows
                for the searchBox to adjust as input is entered. */}
                <SearchBox searchChange={this.onSearchChange} />
                <CardList friends={filteredFriends}/> 
            </div>
        );
    }
}

export default App;