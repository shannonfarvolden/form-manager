import React from "react";

const Page = () => {
  return (
    <div>
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
      <input
        type='text'
        name='full_name'
        id='ex_w8-1-1-full_name'
        value='John Doe'
        style={{
          position: 'absolute',
          top: '310px',
          left: '80px',
          width: '200px',
          backgroundColor: 'yellow'
        }}
      />
      <input
        type='text'
        name='citizenship'
        id='ex_w8-1-1-citizenship'
        value='Canada'
        style={{
          position: 'absolute',
          top: '310px',
          left: '500px',
          width: '100px',
          backgroundColor: 'yellow'
        }}
      />
      </div>
    </div>
  );
};

export default Page;
