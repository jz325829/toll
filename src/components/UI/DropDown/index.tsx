import React, { useState } from 'react';

import classNames from 'classnames';
import { Box, Text } from '@chakra-ui/react';
import styles from './styles.module.css';
import ArrowDownIcon from '../SvgIcons/ArrowDownIcon';

interface Props {
  items: Array<string>
  defaulValue: string;
  callback: (value: string) => void
}

const Dropdown: React.FC<Props> = ({
  items, defaulValue, callback,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelectItem = (value: string) => {
    setSelectedItem(value);
    setIsDropdownOpen(false);
    callback(value);
  };

  const setDefaultValue = () => {
    if (selectedItem) {
      return `Sort by ${selectedItem}`;
    }
    if (defaulValue) return `Sort by ${defaulValue}`;

    return `Sort by ${items[0]}`;
  };

  return (
    <Box className={classNames(styles.dropdown, { [styles.active]: isDropdownOpen })}>

      <button className={classNames('btn', styles.trigger)} type="button" onClick={toggleDropdown}>
        {/* {selectedItem ? selectedItem.label : defaulValue.label || defaulValue} */}
        <Text className={styles['show-option']}>{setDefaultValue()}</Text>
        <ArrowDownIcon />
      </button>

      {isDropdownOpen && (
        <ul className={styles['dropdown-content']}>
          {items.map((item) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <li
              key={item}
              onClick={() => handleSelectItem(item)}
              className={styles['dropdown-item']}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </Box>
  );
};

export default Dropdown;
