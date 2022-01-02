import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div>
            <input className="ma3 pa3 bw1 br3 ba b--black" type="search" placeholder="search friends..." onChange={searchChange}/>
        </div>
    );
}

export default SearchBox;