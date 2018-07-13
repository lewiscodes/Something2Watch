import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class AnotherContainer extends Component {
  render() {
    return (
      <div>AnotherContainer!</div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({  }, dispatch)
}

function mapStateToProps(state) {
  return {  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnotherContainer);
