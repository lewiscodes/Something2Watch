import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import { getResults } from '../actions/results';

import CircularProgress from '@material-ui/core/CircularProgress';
import Title from '../components/title';
import CardScroller from '../components/cardScroller';
import Card from '../components/card';

import styles from '../styles/results';

class Search extends Component {
  componentDidMount() {
    this.redirectIfNeeded();
    this.props.getResults(this.props.meta, this.props.baseShow);
  };

  redirectIfNeeded() {
    if (this.props.baseShow.baseShowImdbId === null) {
      this.props.router.push('/');
    };
  };

  renderResults() {
    return (
      <CardScroller>
        {this.props.results.map((result) => {
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

  renderSpinner() {
    return (
      <div style={styles.results.spinner}>
        <CircularProgress color="secondary" />
      </div>
    );
  };

  render() {
    return (
      <div>
        <Title text={'Something2Watch'} header={true}/>
        {this.props.results ? this.renderResults() : this.renderSpinner()}
      </div>
    );
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getResults }, dispatch);
};

function mapStateToProps(state) {
  return {
    meta: state.meta,
    baseShow: state.baseShow,
    results: state.results.fullResults
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));