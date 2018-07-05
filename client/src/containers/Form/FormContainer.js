import React, { Component } from "react";
import { connect } from "react-redux";
import {dialogOpen, dialogCancel, dialogConfirm, saveConfig, loadConfig, exportConfig, testConfig, resetConfig, changeValue } from "../../redux/modules/formConfig";

import Sidebar from "../../components/Sidebar";
import Form from "../../components/Form";

class FormContainer extends Component {
  componentDidMount() {
    this.props.resetConfig();
  }

  handleChangeValue(e) {
    this.props.changeValue(e)
  }

  handleDialogConfirm(newField) {
    console.log('in container, newField=', newField)
    this.props.dialogConfirm(newField)
  }

  dialogHandleOpen() {
    console.log('dialogHandleOpen will be handled here');
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
          <div style={{display:'flex', flexDirection:'row-reverse', height: '100%'}}>
            <Sidebar
              handleExport={() => this.props.exportConfig()}
              handleSave={() => this.props.saveConfig()}
              handleLoad={() => this.props.loadConfig()}
              handleReset={() => this.props.resetConfig()}
              handleTest={() => this.props.testConfig()}
              errorMessage={this.props.error}
            />
            <Form
              formHeaderConfig={this.props.forms[currentPageArr[0]].header || {}}
              copyHeaderConfig={this.props.forms[currentPageArr[0]][currentPageArr[1]].header || {}}
              pageConfig={this.props.forms[currentPageArr[0]][currentPageArr[1]][currentPageArr[2]] || {}}
              handleChangeValue={e => this.handleChangeValue(e)}
              selectedFieldId={this.props.selectedFieldId}
              dialogOpen={fieldId => this.props.dialogOpen(fieldId)}
              dialogCancel={() => this.props.dialogCancel()}
              dialogConfirm={newField => this.handleDialogConfirm(newField)}
            />
          </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPageId: state.formConfig.currentPageId,
    forms: state.formConfig.forms,
    error: state.formConfig.error,
    isLoading: state.formConfig.isLoading,
    selectedFieldId: state.formConfig.selectedFieldId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeValue: e => dispatch(changeValue(e)),
    saveConfig: () => dispatch(saveConfig()),
    loadConfig: () => dispatch(loadConfig()),
    exportConfig: () => dispatch(exportConfig()),
    resetConfig: () => dispatch(resetConfig()),    
    testConfig: () => dispatch(testConfig()),
    dialogOpen: id => dispatch(dialogOpen(id)),
    dialogCancel: () => dispatch(dialogCancel()),
    dialogConfirm: newField => dispatch(dialogConfirm(newField))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
