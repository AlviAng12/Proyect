import {Input} from '@nextui-org/react'

export default function TimeInput({ label, value, onChange }) {
    const handleWheel = (e) => {
      e.preventDefault();
      const newValue = parseInt(value || '0', 10) + (e.deltaY < 0 ? 1 : -1);
      if (newValue >= 0 && newValue <= 23) {
        onChange(newValue.toString().padStart(2, '0') + ':00');
      }
    };
  
    return (
      <Input
        label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onWheel={handleWheel}
      />
    );
  }
  