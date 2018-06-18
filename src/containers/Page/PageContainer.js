import React, { Component } from "react";
import { connect } from "react-redux";
import { getForms, saveConfig } from "../../redux/modules/formConfig";

import Sidebar from "../../components/Sidebar";
import Page from "../../components/Page";

class PageContainer extends Component {
  componentDidMount() {
    this.props.getForms();
  }

  handleChange() {
    console.log('Changes will be handled here');
  }

  render() {
    const currentPageArr = this.props.currentPageId && this.props.currentPageId.split('-');
    return (
      this.props.isLoading  ?
        <p>Loading</p>
      :
        !(this.props.forms &&
          currentPageArr &&
          this.props.forms[currentPageArr[0]] &&
          this.props.forms[currentPageArr[0]][currentPageArr[1]] &&
          this.props.forms[currentPageArr[0]][currentPageArr[1]][currentPageArr[2]] ) ?
          (<p>Error loading forms</p>)
        :
          <div>
            <Sidebar
              handleSave={() => this.props.saveConfig()}
            />
            <Page
              pageConfig={this.props.forms[currentPageArr[0]][currentPageArr[1]][currentPageArr[2]] || {}}
              handleChange={e => this.handleChange(e)}
            />
          </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPageId: state.formConfig.currentPageId,
    forms: state.formConfig.forms,
    errors: state.formConfig.errors,
    isLoading: state.formConfig.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getForms: () => dispatch(getForms()),
    saveConfig: () => dispatch(saveConfig())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
