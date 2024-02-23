import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'item1', label: 'Wallmart' },
  { value: 'item2', label: 'Casas Bahia' },
  { value: 'item3', label: 'Pernambucanas' },
  { value: 'item4', label: 'Magazine Luiza' },
];

export function MySelect() {
  const [selectedItems, setSelectedItems] = useState([]);

  // const handleChange = (selectedOptions: any) => {
  //   setSelectedItems(selectedOptions);
  // };

  return (
    <div>
      {/* <Select
        isMulti
        options={options}
        onChange={handleChange}
        value={selectedItems}
        className=''
      /> */}
    </div>
  );
}
