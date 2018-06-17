import React from "react";

const TestFieldConfig = (field) => {
  return (
    <div>
      <p>Test FieldConfig, takes field with the configs (for now):</p>
      <ul>
        Object.keys(key => <li key={key}>field[key]</li>)
      </ul>
    </div>
  )
};

export default TestFieldConfig;