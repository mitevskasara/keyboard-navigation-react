import { useState } from 'react';

const options = ['Option 1', 'Option 2', 'Option 3'];

function Dropdown() {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  const toggleDropdown = () => setOpen((prev) => !prev);

  return (
    <div>
      <button onClick={toggleDropdown}>Options</button>
      {open && (
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            width: '200px',
            border: '1px solid gray',
          }}
        >
          {options.map((option, index) => (
            <li
              key={option}
              role="menuitem"
              tabIndex={-1}
              style={{
                background: index === selectedItem ? '#bde4ff' : 'transparent',
                padding: '4px 8px',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setSelectedItem(index)}
              onClick={() => {
                alert(`Selected ${option}`);
                setOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
