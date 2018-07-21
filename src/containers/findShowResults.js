import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setBaseShow } from '../actions/baseShow'

import Title from '../components/title';
import Card from '../components/card';
import CardScroller from '../components/cardScroller';

class FindShowResults extends Component {

  componentDidUpdate() {
    // if (this.props.resultsExtra.length > this.state.cardsAdded) {
    //   this.setState({ cardsAdded: this.props.resultsExtra.length })
    // }

    // if (this.state.cardsAdded === this.props.resultsExtra.length) {
    //   document.getElementById('card_tt1856010').scrollIntoView({ behavior: "smooth" })
    // }    
  }

  handleCardClick(selectedShowId) {
    this.props.setBaseShow(selectedShowId)
  }

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
  }

  render() {
    if (this.props.results.Response === 'True') {
      return (
        this.renderResults()
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
  return bindActionCreators({ setBaseShow }, dispatch)
}

function mapStateToProps(state) {
  return { results: state.baseShow.searchResults, resultsExtra: state.baseShow.searchResultsExtra }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindShowResults);
