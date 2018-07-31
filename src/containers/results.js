import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import { getResults, resetResults } from '../actions/results';

import CircularProgress from '@material-ui/core/CircularProgress';
import Title from '../components/title';
import CardScroller from '../components/cardScroller';
import Card from '../components/card';
import Dialog from '../components/dialog';

import styles from '../styles/results';

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dialogOpen: false,
      dialogTitle: null,
      dialogCopy: null
    }
  }

  componentDidMount() {
    this.props.resetResults();
    this.redirectIfNeeded();
    this.props.getResults(this.props.meta, this.props.baseShow);
  };

  redirectIfNeeded() {
    if (this.props.baseShow.baseShowImdbId === null) {
      this.props.router.push('/');
    };
  };

  dialogClose() {
    this.setState({dialogOpen: false});
  }

  selectCard(imdbId) {
    const result = this.props.results.filter((result) => {
      return result.imdbID === imdbId;
    })

    this.setState(
      {
        dialogOpen: true,
        dialogTitle: result[0].Title,
        dialogCopy: result[0].Plot
      }
    );
  }

  renderResults() {
    return (
      <CardScroller>
        {this.props.results.map((result) => {
          if (result.imdbID === this.props.baseShow.baseShowImdbId) {
            return null;
          }
            return (
            <Card
              searchType={this.props.meta.searchType}
              show={{...result}}
              key={result.imdbID}
              handleClick={(result) => {this.selectCard(result)}}
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
        <Dialog
          open={this.state.dialogOpen}
          closeHandler={() => {this.dialogClose()}}
          title={this.state.dialogTitle}
          plot={this.state.dialogCopy}
        />
        {this.props.results ? this.renderResults() : this.renderSpinner()}
      </div>
    );
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getResults, resetResults }, dispatch);
};

function mapStateToProps(state) {
  return {
    meta: state.meta,
    baseShow: state.baseShow,
    results: state.results.fullResults
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));