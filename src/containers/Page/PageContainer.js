import React, { Component } from "react";
import { connect } from "react-redux";
import { getConfig } from "../../redux/modules/formConfig";

import Page from "../../components/Page";

class PageContainer extends Component {
  componentDidMount() {
    this.props.getConfig();
  }

  render() {
    return this.props.isLoading ? (
      <p>Loading</p>
    ) : (
      <Page config={this.props.config} />
    );
  }
}

const mapStateToProps = state => {
  return {
    config: state.formConfig.config,
    errors: state.formConfig.errors,
    isLoading: state.formConfig.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getConfig: () => dispatch(getConfig())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
