import React from "react";

const Page = ({ pageConfig, handleChange }) => {

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
      {Object.keys(pageConfig).map((name, index) => {
        const field = pageConfig[name];
        return (
          <input
              type='text'
              name={name}
              id='ex_w8-1-1-full_name'
              key={index}
              value={field.defaultValue}
              onChange={e => handleChange(e)}
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
    </div>)
  );
};

export default Page