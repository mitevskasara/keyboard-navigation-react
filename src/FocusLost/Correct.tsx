import { useState, useRef, useEffect } from 'react';

const options = ['Option 1', 'Option 2', 'Option 3'];

function Dropdown() {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const [message, setMessage] = useState('');
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const toggleDropdown = () => setOpen((prev) => !prev);

  const handleKeyDown: React.KeyboardEventHandler<HTMLUListElement> = (e) => {
    if (!open) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedItem((i) => (i + 1) % options.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedItem((i) => (i - 1 + options.length) % options.length);
    } else if (e.key === 'Escape') {
      setOpen(false);
      buttonRef.current?.focus();
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setMessage(`You selected: ${options[selectedItem]}`);
      setOpen(false);
      buttonRef.current?.focus();
    } else if (e.key === 'Tab') {
      e.preventDefault();
      setMessage(`You selected: ${options[selectedItem]}`);
      setOpen(false);
      buttonRef.current?.focus();
    }
  };

  useEffect(() => {
    if (open && listRef.current) {
      const item = listRef.current.children[selectedItem] as HTMLElement;
      item?.focus();
    }
  }, [selectedItem, open]);

  return (
    <div>
      <button
        ref={buttonRef}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={toggleDropdown}
      >
        Options
      </button>

      {open && (
        <ul
          role="menu"
          ref={listRef}
          onKeyDown={handleKeyDown}
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
                buttonRef.current?.focus();
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      <p>
        {message}
      </p>
    </div>
  );
}

export default Dropdown;
