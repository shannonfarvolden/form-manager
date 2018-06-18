import React, { Component } from "react";
import { connect } from "react-redux";
import { getForms } from "../../redux/modules/formConfig";

import Home from "../../components/Home";

class HomeContainer extends Component {
  
  componentDidMount() {
    this.props.getForms();
  }

  render() {
    return this.props.isLoading ? (
      <p>Loading</p>
    ) : (
      <Home config={this.props.forms} />
    );
  }
}

const mapStateToProps = state => {
  return {
    forms: state.formConfig.forms,
    errors: state.formConfig.errors,
    isLoading: state.formConfig.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getForms: () => dispatch(getForms())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
