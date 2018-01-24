import React, {Component} from 'react'
import Axios from 'axios'


class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            suggestions: [],
            searchTerm: ''
        }
    }
    render = () =>  {
                    const {searchTerm} = this.state;
                    return  <form>
                                <input
                                    type="text"
                                    onChange={this.onTextChange}
                                    value={searchTerm}
                                    list="suggestions"
                                    id="search_bar"
                                    placeholder="Enter Gene Name..."
                                    onKeyDown={event=>{
                                            if (event.key === "Backspace"){
                                                return this.onTextChange(event)
                                            }
                                        }
                                    }
                                />{
                                    this.state.suggestions.length > 0 ?
                                    <datalist id="suggestions">{
                                        this.state.suggestions.map(
                                            suggestion =>
                                                <option value={suggestion}/>)
                                    }
                                    </datalist> : null}
                                <button onClick={this.search}>Search</button>

                            </form>};

    onTextChange = event => {
        this.setState({searchTerm: event.target.value});
        const url = "http://0.0.0.0:1337/word_suggestion/";
        Axios.get(url, {
            params: {
                word: event.target.value
            }
        }).then( response => {
            console.log(response);
            const data = response.data.map(obj=>obj.suggestion);
            this.setState({suggestions: data});
        });
    };

    search = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const url = "http://0.0.0.0:1337/gene_search/";
        const {passSearchResults} = this.props;
        Axios.get(url, {
            params: {
                gene: this.state.searchTerm
            }
        }).then( response => {
            const {data} = response;
            passSearchResults(data);

        })
    };

}

export default SearchBar