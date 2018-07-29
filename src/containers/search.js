import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setSearchString, searchForBaseShow, resetSearch } from '../actions/baseShow';

import styles from '../styles/search';

import SearchBar from '../components/searchbar';
import Title from '../components/title';

class Search extends Component {
  constructor (props) {
    super(props);
    this.state = { searchString: '' };
  };

  _handleSearchChange = (e) => {
    this.setState({searchString: e.target.value});
  };

  _handleSearch = () => {
    this.props.resetSearch();
    const { baseRequestUrl, searchByTitle, searchForTvShow, searchForFilm, searchByImdbId } = this.props.api;
    const searchType = this.props.searchType === 'Film' ? searchForFilm : searchForTvShow;
    const searchUrl = `${baseRequestUrl}${searchByTitle}${this.state.searchString}${searchType}`;
    const extraInfoUrl = `${baseRequestUrl}${searchByImdbId}`;
    this.props.searchForBaseShow(searchUrl, extraInfoUrl);
  };

  _handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.props.setSearchString(this.state.searchString);
      this._handleSearch();
      e.target.blur();
    };
  };

  render() {
    const searchType = this.props.searchType === 'Film' ? 'Film' : 'Tv Show';
    const placeholder = this.props.results.Response === 'False' ? 'No results found.' : `Search for a ${searchType} you have seen.`;

    return (
      <div>
        <Title text={'Something2Watch'} header={true}/>
        <SearchBar
          styles={styles}
          onChange={this._handleSearchChange}
          onKeyPress={this._handleSearchKeyPress}
          placeholder={placeholder}
          error={this.props.results.Response === 'False'}
        />
      </div>
    );
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSearchString, searchForBaseShow, resetSearch }, dispatch);
};

function mapStateToProps(state) {
  return { api: state.meta.api, searchType: state.meta.searchType, results: state.baseShow.searchResults };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
