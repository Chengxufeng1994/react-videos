import React from 'react';

class SearchBar extends React.Component {
    state = { term: "" };

    handleChange = event => {
        // console.log(event.target.value)
        this.setState({ term: event.target.value })
    }

    onFormSubmit = event => {
        event.preventDefault()

        this.props.onTermSubmit(this.state.term)
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form action="" className="ui from" onSubmit={this.onFormSubmit}>
                    <div className="ui field">
                        <label htmlFor="">Video Search </label>
                        <div className="ui search">
                            <div className="ui fluid icon input">
                                <input
                                    className="prompt"
                                    placeholder="Search..."
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.term}
                                />
                                <i className="search icon"></i>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;