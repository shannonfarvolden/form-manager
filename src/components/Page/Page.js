import React from "react";

import ConfigDialog from '../ConfigDialog'

const Page = ({ pageConfig, selectedFieldId, dialogOpen, dialogCancel, dialogConfirm }) => {

  const newField = {...pageConfig}

  const handleChange = (e) => {
    console.log('handling locally', e)
  }

  return (
    (!pageConfig || pageConfig === {}) ? 
    <p>Loading</p>
    :
    (<div>
      <img
        src={require('./../../images/ex_w8_1.png')}
        alt=''
        style={{
          position: 'absolute',
          marginTop: '100px',
          top: 0,
          left: 0,
          width: '800px'
        }}
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
          <input
              type='text'
              name={fieldId}
              id={`${'ex_w8'}-${'1'}}-${'1'}-${fieldId}`}
              key={index}
              value={field.defaultValue}
              onChange={e => this.handleChange(e)}
              onClick={() => dialogOpen(fieldId)}
              style={{
                position: 'absolute',
                top: field.top,
                left: field.left,
                width: field.width,
                height: field.height,
                backgroundColor: 'beige'
              }}
            />)
      })
      }
      </div>
      <ConfigDialog
          fieldId={selectedFieldId}
          field={pageConfig[selectedFieldId]}
          open={!!selectedFieldId}
          dialogCancel={() => dialogCancel()}
          dialogConfirm={() => dialogConfirm(newField)}
        />
    </div>)
  );
};

export default Page