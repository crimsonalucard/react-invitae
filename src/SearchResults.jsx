import React, {Component} from 'react';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
    }

    componentWillReceiveProps = nextProps => this.setState({results: nextProps.searchResults});

    render = () => {
        const {results} = this.state;
        let output = null;
        if (results.length > 0) {
            const headers = Object.keys(results[0]);
            output = <table id="results">
                <tr>
                    {headers.map(header => <th>{header}</th>)}
                </tr>
                {results.map(data =>
                    <tr>{
                        headers.map(header => <td>
                            {data[header]}
                        </td>)
                    }
                    </tr>
                )}
            </table>
        }
        return output;
    }
}

export default SearchResults