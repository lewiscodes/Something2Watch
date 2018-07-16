const styles = {
  card: {
    background: '#fff',
    width: '75%',
    padding: '0px 10px',
    margin: '15px 0 15px 15px',
    flex: '0 0 auto',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
  },
  cardHeader: {
    display: 'flex',
    flexWrap: 'noWrap',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: '8px'
  },
  title: {
    margin: '0 0'
  }, 
  poster: {
    maxWidth: '90%',
    maxHeight: '400px',
    display: 'block',
    margin: 'auto'
  },
  extraInfo: {
    textAlign: 'center',
    marginBottom: '10px'
  },
  actors: {
    margin: '10px 0 10px',
    fontSize: ''
  },
  genre: {
    margin: '10px 0 10px',
    fontSize: ''
  },
  year: {
    fontSize: '12px'
  },
  seasons: {
    margin: '10px 0 10px',
    fontSize: ''
  },
  '@media (min-width: 641px)' : {
    card: {
      maxWidth: '400px'
    }, cardHeader: {
    },title: {
    }, poster: {
    }, actors: {
    }, genre: {
    }, year: {
    }, imdbRating: {
    }, seasons: {
    }
  },
  '@media (min-width: 1025px)': {
    card: {
    }, cardHeader: {
    }, title: {
    }, poster: {
    }, actors: {
    }, genre: {
    }, year: {
    }, imdbRating: {
    }, seasons: {
    }
  }
}

export default styles