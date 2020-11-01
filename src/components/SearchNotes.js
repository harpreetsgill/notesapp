import React, { Component } from 'react';

class SearchNotes extends Component {

    render() {
        return (
            <div className="search-div">
                <input
                    type="text"
                    id="search-input"
                    placeholder="SEARCH"
                    onChange={e=>this.props.searchNotes(e.target.value)}
                />
            </div>
        );
    }
}

export default SearchNotes;