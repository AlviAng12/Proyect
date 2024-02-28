import React, { useState, useEffect } from 'react';
import { Select, SelectItem,CardBody,Card,RadioGroup, Radio,Divider } from "@nextui-org/react";
import ViewSelector from './ViewSelector';
import Customer_select from './Customer_select';
import Calendar from '../Calendar';

//!importacion de librerias papu


//-------------------------------------------------------------------------------
//? llamada a la API para proporcionar informacion acerca del objeto customer
const Initview = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [selected, setSelected] = React.useState("Sites");
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/customers')
      .then(response => response.json())
      .then(data => setCustomers(data))
      .catch(error => console.error('Error fetching customers:', error));
  }, []);


//? Vaina para el select box que me devuelva el objeto
  const handleSelectionChange = (e) => {
    const selectedId = e.target.value;
    const parsedId = parseInt(selectedId, 10);
  
    console.log("Tipo de parsedId:", typeof parsedId);
  
    const selectedCustomerObject = customers.find((customer) => customer.id === parsedId);
  
    if (selectedCustomerObject) {
      setSelectedCustomer(selectedCustomerObject);
    } else {
      setSelectedCustomer('none'); // o cualquier otro valor predeterminado
    }
  

  };
  
//? vaina para el radio box
const handleViewChange = (value) => {
  setSelected(value);
  // Aquí puedes realizar alguna lógica adicional si es necesario al cambiar la vista (Sites o Employee)
};  
// ! Estructura jodidamente desorganizada, pero ya mejora

return (
  <div>
    <Card>
      <CardBody>
        <Customer_select
          customers={customers}
          selectedCustomer={selectedCustomer}
          onSelectionChange={handleSelectionChange}
        />
        <p className="text-small text-default-500">Selected: {selectedCustomer ? selectedCustomer.name : 'None'}</p>
        {console.log(selectedCustomer)}

        <ViewSelector selected={selected} onViewChange={handleViewChange} />
      
      </CardBody>
    </Card>
    <Calendar sites={selectedCustomer ? selectedCustomer.sites : []} />

   
  </div>
);
};

export default Initview;

