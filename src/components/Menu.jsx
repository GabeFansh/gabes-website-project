import React, { useState } from 'react';

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [submenuItems, setSubmenuItems] = useState([]);
  const [submenuTimeout, setSubmenuTimeout] = useState(null);

  const originalMenuItems = [
    { label: 'Option 1', submenuItems: ['Submenu 1A', 'Submenu 1B', 'Submenu 1C'], submenuDelay: 0 },
    { label: 'Option 2', submenuItems: ['Submenu 2A', 'Submenu 2B'], submenuDelay: 0 },
    { label: 'Option 3', submenuItems: ['Submenu 3A', 'Submenu 3B', 'Submenu 3C'], submenuDelay: 0 },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setSelectedMenuItem(null);
    setSubmenuOpen(false);
    setSubmenuItems([]);
    clearTimeout(submenuTimeout);
  };

  const handleOriginalMenuItemClick = (menuItem) => {
    setMenuOpen(!menuOpen); 
    setSelectedMenuItem(menuItem.label);
    setSubmenuOpen(false);
    setSubmenuItems([]);
    clearTimeout(submenuTimeout);

    // Open submenu with a delay if there are submenu items
    if (menuItem.submenuItems.length > 0) {
      const timeoutId = setTimeout(() => {
        setSubmenuOpen(true);
        setSubmenuItems(menuItem.submenuItems);
      }, menuItem.submenuDelay);

      setSubmenuTimeout(timeoutId);
    }
  };

  return (
    <div>
      {menuOpen && (
        <div>
          <p>Choose an option:</p>
          <ul>
            {originalMenuItems.map((menuItem) => (
              <li key={menuItem.label} onClick={() => handleOriginalMenuItemClick(menuItem)}>
                {menuItem.label}
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedMenuItem && !submenuOpen && (
        <div>
          <p>You selected: {selectedMenuItem}</p>
          <button onClick={toggleMenu}>Back to Menu</button>
        </div>
      )}
      {submenuOpen && (
        <div>
          <p>Submenu:</p>
          <ul>
            {submenuItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button onClick={toggleMenu}>Back to Menu</button>
        </div>
      )}
    </div>
  );
};
export default Menu;