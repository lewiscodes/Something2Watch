import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import { getGenres } from '../actions/meta'
import { getResultsApiId, getBaseShowGenres } from '../actions/baseShow'
import { getResults } from '../actions/results'

import CircularProgress from '@material-ui/core/CircularProgress';
import Title from '../components/title'

import styles from '../styles/results'

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      resultsLoaded: false
    }
  }

  componentWillMount() {
    this.redirectIfNeeded()
    this.getGenresFromResultsApi()
    this.getSelectedShowResultsApiId()
  }

  componentDidMount() {
    // getResults()
  }

  componentDidUpdate() {
    if (this.props.results) {
      this.setState({resultsLoaded: true})
    }

    if (this.props.baseShowResultsApiId !== null) {
      this.getSelectedShowDataFromResultsApi();
    }
  }

  redirectIfNeeded() {
    if (this.props.baseShowImdbId === null) {
      this.props.router.push('/')
    }
  }

  getGenresFromResultsApi() {
    const { baseRequestUrl, getFilmGenres, getTvGenres, key } = this.props.meta.resultsApi
    const genresUrl = this.props.meta.searchType === 'Tv' ? getTvGenres : getFilmGenres;
    const genresFromResultsApiUrl = `${baseRequestUrl}${genresUrl}${key}`
    this.props.getGenres(genresFromResultsApiUrl)
  }

  getSelectedShowResultsApiId() {
    const { baseShowImdbId } = this.props
    const { baseRequestUrl, key } = this.props.meta.resultsApi
    const selectedShowResultsApiIdUrl = `${baseRequestUrl}find/${baseShowImdbId}${key}&external_source=imdb_id`;
    this.props.getResultsApiId(selectedShowResultsApiIdUrl, this.props.meta.searchType);
  }

  getSelectedShowDataFromResultsApi() {
    const {baseShowResultsApiId} = this.props;
    const { baseRequestUrl, key } = this.props.meta.resultsApi;
    const searchType = this.props.meta.searchType === 'Tv' ? 'tv' : 'movie';
    const selectedShowDataFromResultsApiQuery = `${baseRequestUrl}${searchType}/${baseShowResultsApiId}${key}`;
    this.props.getBaseShowGenres(selectedShowDataFromResultsApiQuery);
  }

  getResults() {
    // build query string here
    // this.props.getResults('')
  }

  renderResults() {
    return null;
  }

  renderSpinner() {
    return (
      <div style={styles.results.spinner}>
        <CircularProgress color="secondary" />
      </div>
    )
  }

  render() {
    return (
      <div>
        <Title text={'Something2Watch'} header={true}/>
        { !this.state.resultsLoaded ? this.renderSpinner() : this.renderResults() }
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getResults, getGenres, getResultsApiId, getBaseShowGenres }, dispatch)
}

function mapStateToProps(state) {
  return { meta: state.meta, results: state.results.results, baseShowImdbId: state.baseShow.baseShowImdbId, baseShowResultsApiId: state.baseShow.baseShowResultsApiId }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));