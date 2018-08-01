const styles = {
  card: {
    cursor: 'pointer',
    background: '#FAFAFA',
    width: '75%',
    padding: '0px 10px',
    margin: '0 0 15px 15px',
    flex: '0 0 auto',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    '@media (min-width: 641px)' : {
      width: 'auto'
    }
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
    margin: 'auto',
    '@media (min-width: 641px)' : {
      maxHeight: 'none',
    },
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
  '@media (min-width: 641px)' : {},
  '@media (min-width: 1025px)': {}
};

export default styles;