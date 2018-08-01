const styles = {
  title: {
    header: {
      color: '#e50914',
      fontSize: '35px',
      paddingBottom: '20px',
      textAlign: 'center',
      textDecoration: 'underline',
      borderBottom: '1px solid #717171',
      '@media (min-width: 641px)' : {
        fontSize: '60px'
      },
      '@media (min-width: 1025px)': {}
    },
    standard: {
      color: '#616161',
      fontSize: '16px',
      maxWidth: '80%',
      margin: '1em auto',
      '@media (min-width: 641px)' : {
        maxWidth: '100%',
        margin: '1em 1em'
      }
    },
    link: {

    }
  }
};

export default styles;