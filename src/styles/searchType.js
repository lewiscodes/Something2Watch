const styles = {
  mainTextStyles: {
    fontSize: '40px',
    textAlign: 'center',
    minWidth: '75%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '@media (min-width: 641px)' : {
      fontSize: '65px'
    },
  },
  overrideTextStyles: {
    color: '#e50914',
    textDecoration: 'underline',
    whiteSpace: 'nowrap'
  },
  '@media (min-width: 1025px)': {}
};

export default styles;