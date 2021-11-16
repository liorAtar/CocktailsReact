import React from 'react';
import SearchBar from "material-ui-search-bar";

const Search = ({ filtereDrinks, cancelSearch }) => {

    return (
        <SearchBar onRequestSearch={filtereDrinks} onCancelSearch={cancelSearch} style={{ height: 30, margin: 10 }} />
    )
}

export default Search;
