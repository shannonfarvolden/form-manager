import React from "react";

import ConfigDialog from '../ConfigDialog'
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';

const Form = ({ formHeaderConfig, copyHeaderConfig, pageConfig, selectedFieldId, dialogOpen, dialogCancel, dialogConfirm }) => {

  const handleChange = (e) => {
    console.log('handling locally', e)
  }

  const pageHeaderStyle = {
    position: 'absolute',
    marginTop: '100px',
    top: 0,
    left: 0,
    width: pageConfig.width || copyHeaderConfig.width || formHeaderConfig.width || '100%'
  }

  return (
    (!pageConfig || pageConfig === {}) ?
    <p>Loading</p>
    :
    (<div>
      <img
        src={require('./../../images/' + ( pageConfig.bgImage || copyHeaderConfig.bgImage || formHeaderConfig.bgImage || 'blank.png' ))}
        alt=''
        style={pageHeaderStyle}
      />
      <div
        style={{
          position: 'absolute',
          marginTop: '100px',
          top: 0,
          left: 0,
          width: '800px'
        }}
      >
      {Object.keys(pageConfig).map((fieldId, index) => {
        const field = pageConfig[fieldId];
        return (
          <div
            key={index}
            style={{
              position: 'absolute',
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
                  id={`${'ex_w8'}-${'1'}}-${'1'}-${fieldId}`}
                  key={index}
                  value={field.defaultValue}
                  onChange={handleChange}
                  style={{
                    width: field.width,
                    height: field.height,
                    backgroundColor: '#ADD8E6',
                    border: '2px solid transparent',
                    padding: '1px'
                  }}
                />
              </Tooltip>
            </div>)
      })
      }
      </div>
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
