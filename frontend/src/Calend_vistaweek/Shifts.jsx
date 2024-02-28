import React from 'react'
import { useState, useEffect } from 'react';
import { Input, Select, Button,Card,CardBody,SelectItem } from '@nextui-org/react';
import TimeInput from './TimeInput.jsx'
function shifts() {
  const [timeStart, setTimeStart] = useState('');
  const [timeFinish, setTimeFinish] = useState('');
  const [employees, setEmployees] = useState([]);
  const [role, setRole] = useState('');
  const [rate, setRate] = useState('');
  const [employee, setEmployee] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario
  };
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/employees')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error('Error fetching Employees:', error));
  }, []);
  return (
    <div>
    <Card>
      <CardBody>
    <form onSubmit={handleSubmit}>
    <TimeInput label="Time Start" value={timeStart} onChange={(value) => setTimeStart(value)} />
      <TimeInput label="Time Finish" value={timeFinish} onChange={(value) => setTimeFinish(value)} />
    <Select 
    label="Role" 
    onChange={(value) => setRole(value)}>
            <SelectItem
        key="Changer"
      >
        Argentina
      </SelectItem>
      {/* Aquí puedes agregar las opciones para el rol */}
    </Select>
    <Select label="Rate" value={rate} onChange={(value) => setRate(value)}>
      {/* Aquí puedes agregar las opciones para la tarifa */}
    </Select>

     

    <Select
    label="Employee"
    variant="bordered"
    placeholder="Select a Employee"
    value={employee}

    className="max-w-xs"
 
  >
    {employees.map((employee) => (
      <SelectItem key={employee.id} value={employee.id.toString()}>
        {employee.name}
      </SelectItem>
    ))}
  </Select>
    <Button type="success" htmlType="submit">Submit</Button>
  </form>
  </CardBody>
  </Card>
  </div>
  )
}

export default shifts
