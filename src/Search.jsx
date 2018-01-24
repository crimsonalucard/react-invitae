import React, {Component} from 'react'
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: []
        }
    }

    render = () => <div>
        <SearchBar passSearchResults={searchResults => this.setState({searchResults: searchResults})}/>
        <SearchResults searchResults={this.state.searchResults}/>
    </div>;
}

export default Search;
