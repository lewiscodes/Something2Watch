import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import { setBaseShow } from '../actions/baseShow';

import Card from '../components/card';
import CardScroller from '../components/cardScroller';
import Title from '../components/title';

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
              searchType={this.props.searchType}
              show={{...result}}
              key={result.imdbID}
              handleClick={(selectedShowId) => {this.handleCardClick(selectedShowId)}}
            />
          )
        })}
      </CardScroller>
    );
  };

  renderHeader() {
    const searchType  = this.props.searchType === 'Tv' ? 'tv show' : 'film';
    return <Title text={`Select the ${searchType} you enjoyed from the cards below.`} />
  }

  render() {
    if (this.props.results.Response === 'True') {
      return (
        <div>
          {this.renderHeader()}
          {this.renderResults()}
        </div>
      );
    };

    return null;
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setBaseShow }, dispatch);
};

function mapStateToProps(state) {
  return { results: state.baseShow.searchResults, resultsExtra: state.baseShow.searchResultsExtra, searchType: state.meta.searchType };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FindShowResults));
