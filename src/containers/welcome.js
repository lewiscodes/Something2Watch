import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Welcome extends Component {
  render() {
    return (
      <div>Welcome!</div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({  }, dispatch)
}

function mapStateToProps(state) {
  return {  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
