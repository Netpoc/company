import React from 'react';

const SelectOption = ({ options, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="selectOption">Select an item:</label>
      <select
        className="form-control"
        id="selectOption"
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">-- Select --</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOption;
