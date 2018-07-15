import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setSearchString, searchForBaseShow, resetSearch } from '../actions/baseShow';

import SearchBar from '../components/searchbar';
import Title from '../components/title';

const titleStyles = {
  fontSize: '24px'
};

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = { searchString: '' }
  }

  _handleSearchChange = (e) => {
    this.setState({searchString: e.target.value})
  }

  _handleSearch = () => {
    this.props.resetSearch();

    const { baseRequestUrl, searchByTitle, searchForTvShow, searchByImdbId } = this.props.api;
    const searchUrl = `${baseRequestUrl}${searchByTitle}${this.state.searchString}${searchForTvShow}`
    const extraInfoUrl = `${baseRequestUrl}${searchByImdbId}`
    this.props.searchForBaseShow(searchUrl, extraInfoUrl)
  }

  _handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.setSearchString(this.state.searchString)
      this._handleSearch()
    }
  }

  render() {
    return (
      <div>
        <Title text={'Search!'} styles={titleStyles}/>
        <SearchBar
          onChange={this._handleSearchChange}
          onKeyPress={this._handleSearchKeyPress}
          placeholder={"Search for a TV Show you have seen."}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSearchString, searchForBaseShow, resetSearch }, dispatch)
}

function mapStateToProps(state) {
  return { api: state.meta.api }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
