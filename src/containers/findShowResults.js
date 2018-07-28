import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import { setBaseShow } from '../actions/baseShow';

import Card from '../components/card';
import CardScroller from '../components/cardScroller';

class FindShowResults extends Component {
  handleCardClick(selectedShowId) {
    this.props.setBaseShow(selectedShowId);
    this.props.router.push('/results');
  };

  renderResults() {
    return (
      <CardScroller>
        {this.props.resultsExtra.map((result) => {
          return (
            <Card
              show={{...result}}
              key={result.imdbID}
              handleClick={(selectedShowId) => {this.handleCardClick(selectedShowId)}}
            />
          )
        })}
      </CardScroller>
    );
  };

  render() {
    if (this.props.results.Response === 'True') {
      return (
        this.renderResults()
      );
    };

    return null;
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setBaseShow }, dispatch);
};

function mapStateToProps(state) {
  return { results: state.baseShow.searchResults, resultsExtra: state.baseShow.searchResultsExtra };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FindShowResults));
