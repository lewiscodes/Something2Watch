import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Title from '../components/title';
import Card from '../components/card';
import CardScroller from '../components/cardScroller';

class FindShowResults extends Component {
  renderResults() {
    return (
      <CardScroller>
        {this.props.resultsExtra.map((result) => {
          return <Card {...result} key={result.imdbID}/>
        })}
      </CardScroller>
    );
  }

  render() {
    if (this.props.results.Response === 'True') {
      return (
        <div>
          <Title text={'Results!'} />
          {this.renderResults()}
        </div>
      );
    }

    if (this.props.results.Response === 'False') {
      return (
        <div>
          <Title text={'No Results!'} />
        </div>
      );
    }

    return null;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch)
}

function mapStateToProps(state) {
  return { results: state.baseShow.searchResults, resultsExtra: state.baseShow.searchResultsExtra }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindShowResults);
