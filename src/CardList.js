import React from "react";
import Card from "./Card";

// creates a list of cards with each card representing a friend from 
// friends.js array
const CardList = ({friends}) => {
    return (
        <div>  
            {      
                friends.map((friend,i) => {
                    return (
                        <Card 
                        // creates a key prop set to the index incase of deleted card
                        key={friends[i].id} 
                        image ={friends[i].image} 
                        name={friends[i].name} 
                        email={friends[i].email} 
                        phone={friends[i].phone}
                        />
                    );
                })
            }
        </div>
    )
}

export default CardList;