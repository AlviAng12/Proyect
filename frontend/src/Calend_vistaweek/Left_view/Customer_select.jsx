import React from 'react';
import { Select, SelectItem } from "@nextui-org/react";



const Customer_select = ({ customers, selectedCustomer, onSelectionChange }) => {
  return (
    <Select
    label="Customer"
    variant="bordered"
    placeholder="Select a Customer"
    value={selectedCustomer}

    className="max-w-xs"
    onChange={onSelectionChange}
  >
    {customers.map((customer) => (
      <SelectItem key={customer.id} value={customer.id.toString()}>
        {customer.name}
      </SelectItem>
    ))}
  </Select>
);
};

export default Customer_select