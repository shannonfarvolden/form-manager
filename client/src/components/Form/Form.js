import React from "react";

import ConfigDialog from '../ConfigDialog'
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';

const Form = ({ formHeaderConfig, copyHeaderConfig, pageConfig, selectedFieldId, dialogOpen, dialogCancel, dialogConfirm, handleChangeValue }) => {

  const pageHeaderStyle = {
    width: pageConfig.width || copyHeaderConfig.width || formHeaderConfig.width || '100%'
  }

  return (
    (!pageConfig || pageConfig === {}) ?
    <p>Loading</p>
    :
    (<div style={{margin: 'auto', marginTop:'10px', height: '100%', overflow: 'scroll'}}>
      <img
        src={require('./../../images/' + ( pageConfig.bgImage || copyHeaderConfig.bgImage || formHeaderConfig.bgImage || 'blank.png' ))}
        alt=''
        style={pageHeaderStyle}
      />

      {Object.keys(pageConfig).map((fieldId, index) => {
        const field = pageConfig[fieldId];
        let isValid = true;
        if (field.valid) {
          const body = `return ${field.valid}`;
          const fn = new Function('val', body);
          const fnVal = fn(field.value);
          if (fnVal === true || fnVal === false) isValid = fnVal;
        }
        let invalid = ((field.mandatory && field.value === '' ) || !isValid);

        return (
          <div
            key={index}
            style={{
              position: 'relative',
              width: 'fit-content',
              top: field.top,
              left: field.left
            }}
          >
            <Tooltip id="tooltip-top-end" title="Click to edit field configs" placement="top-end">
              <EditIcon
                style={{
                  float:'right',
                  cursor: 'pointer',
                  width: field.height,
                  height: field.height,
                  backgroundColor: '#ADD8E6',
                  border: '1px solid #000',
                  padding: '2px'
                }}
                onClick={e => {e.preventDefault(); dialogOpen(fieldId)}}
              />
            </Tooltip>
            <Tooltip id="tooltip-top-end" title="Simulated field with default" placement="top-end">
              <input
                  type='text'
                  name={fieldId}
                  id={`${'ex_w8'}-${'1'}-${'1'}-${fieldId}`}
                  key={index}
                  value={field.value}
                  onChange={handleChangeValue}
                  disabled={field.disabled}
                  style={{
                    width: field.width,
                    height: field.height,
                    backgroundColor: field.disabled ? '	#D3D3D3' : (invalid ? '#FFFF00' : '#ADD8E6'),
                    border: '2px solid transparent',
                    padding: '1px'
                  }}
                />
              </Tooltip>
            </div>)
      })
      }

      {
        selectedFieldId &&
        <ConfigDialog
            fieldId={selectedFieldId}
            field={pageConfig[selectedFieldId]}
            open={!!selectedFieldId}
            dialogCancel={() => dialogCancel()}
            dialogConfirm={(newField) => dialogConfirm(newField)}
          />
        }
    </div>)
  );
};

export default Form
