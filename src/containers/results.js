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

  componentDidUpdate() {
    if (this.props.basicResults !== {} && !this.state.resultsLoaded) {
      this.setState({resultsLoaded: true})
    }

    if (this.props.baseShow.baseShowResultsApiId !== null && !this.props.baseShow.gotBaseShowGenres) {
      this.getSelectedShowDataFromResultsApi();
    }

    if (this.props.baseShow.baseShowResultsApiGenres !== null && Object.keys(this.props.basicResults).length === 0) {
      // make sure to add a flag in redux and yest it here
      // so that this is only called once (like in the function above)
      this.getResults();
    }
  }

  redirectIfNeeded() {
    if (this.props.baseShow.baseShowImdbId === null) {
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
    const { baseShowImdbId } = this.props.baseShow
    const { baseRequestUrl, key } = this.props.meta.resultsApi
    const selectedShowResultsApiIdUrl = `${baseRequestUrl}find/${baseShowImdbId}${key}&external_source=imdb_id`;
    this.props.getResultsApiId(selectedShowResultsApiIdUrl, this.props.meta.searchType);
  }

  getSelectedShowDataFromResultsApi() {
    const {baseShowResultsApiId} = this.props.baseShow;
    const { baseRequestUrl, key } = this.props.meta.resultsApi;
    const searchType = this.props.meta.searchType === 'Tv' ? 'tv' : 'movie';
    const selectedShowDataFromResultsApiQuery = `${baseRequestUrl}${searchType}/${baseShowResultsApiId}${key}`;
    this.props.getBaseShowGenres(selectedShowDataFromResultsApiQuery);
  }

  getResults() {
    if (this.props.baseShow.baseShowResultsApiGenres && this.props.meta.genres) {
      const includeGenres = this.getGenreIDs(this.props.baseShow.baseShowResultsApiGenres);
      const { baseRequestUrl, key } = this.props.meta.resultsApi;
      const searchType = this.props.meta.searchType === 'Tv' ? 'tv' : 'movie';
      const resultsApiUrl = `${baseRequestUrl}discover/${searchType}${key}&with_genres=${includeGenres}`
      this.props.getResults(resultsApiUrl)
    }
  }

  getGenreIDs(genreObject) {
    if (genreObject) {
      let id = '';
      genreObject.map((genre) => {
        id = `${genre.id},${id}`
        return true;
      });
      id = id.substring(0, id.length - 1);
      return id;
    }
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
  return {
    meta: state.meta,
    basicResults: state.results.basicResults,
    baseShow: state.baseShow
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));