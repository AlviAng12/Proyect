import React from 'react';
import { RadioGroup, Radio, Divider } from "@nextui-org/react";

const ViewSelector = ({ selected, onViewChange }) => {
  return (
    <div>
      <Divider className="my-4" />
      <RadioGroup
        value={selected}
        onValueChange={onViewChange}
        label="Select your view"
        orientation="horizontal"
      >
        <Radio value="Sites">Sites</Radio>
        <Radio value="Employee">Employee</Radio>
      </RadioGroup>
      <p className="text-default-500 text-small">Selected: {selected}</p>
    </div>
  );
};

export default ViewSelector;