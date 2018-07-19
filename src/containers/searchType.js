import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Radium from 'radium';

import Title from '../components/title';

import styles from '../styles/searchType'

class SearchType extends Component {
  render() {
    return (
      <div>
        <Title text={'Something2Watch'} header={true}/>
        <div>
          <p style={styles.mainTextStyles}>Do you want to watch a <span style={styles.overrideTextStyles} className={'falseNineFont'}>Film</span> or a <span style={styles.overrideTextStyles} className={'falseNineFont'}>TV Show</span> ?</p>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch)
}

function mapStateToProps(state) {
  return { }
}

SearchType = Radium(SearchType)
export default connect(mapStateToProps, mapDispatchToProps)(SearchType);