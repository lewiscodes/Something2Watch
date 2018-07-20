import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Radium from 'radium';

import { setSearchType } from '../actions/meta'
import Title from '../components/title';
import styles from '../styles/searchType'

class SearchType extends Component {
  onLinkClick = (searchType) => {
    this.props.setSearchType(searchType)
    window.location.pathname = "/search"
  }

  render() {
    return (
      <div>
        <Title text={'Something2Watch'} header={true}/>
        <p style={styles.mainTextStyles}>Do you want to watch a <Link to={'/search'} onClick={() => {this.onLinkClick('Film')}} style={styles.overrideTextStyles} className={'falseNineFont'}>Film</Link> or a <Link to={'/search'} onClick={() => {this.onLinkClick('Tv')}} style={styles.overrideTextStyles} className={'falseNineFont'}>TV Show</Link> ?</p>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSearchType }, dispatch)
}

function mapStateToProps(state) {
  return { }
}

SearchType = Radium(SearchType)
export default connect(mapStateToProps, mapDispatchToProps)(SearchType);