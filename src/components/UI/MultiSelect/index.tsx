import { FC, useEffect, useState } from 'react';
import {
  Flex, Text, VStack, useMediaQuery,
} from '@chakra-ui/react';

interface Props {
  items: Array<string | number>,
  title: string,
  onValueChange: (options: string[]) => void;
  defaultValue: Array<string | number> | null;
  isBothBorder?: boolean
}

const MultiSelect: FC<Props> = ({
  items,
  title,
  onValueChange,
  defaultValue,
  isBothBorder,
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(['Any']);
  const [isSmallerThan844] = useMediaQuery('(max-width: 844px)');
  const [isSmallerThan480] = useMediaQuery('(max-width: 480px)');
  const isStories = items.length === 3;

  let padding: string;

  switch (title) {
    case 'Bedrooms':
      padding = isSmallerThan480 ? '9px 35px 14px 28px' : '9px 10px 14px 20px';
      break;
    case 'Bathrooms':
      padding = isSmallerThan480 ? '9px 35px 14px 28px' : '9px 20px 14px 10px';
      break;
    case 'Stories':
      padding = isSmallerThan480 ? '9px 20px 14px 28px' : '9px 20px 14px';
      break;
    default:
      padding = '7px 31px 15px';
  }

  useEffect(() => {
    if (defaultValue === null) {
      setSelectedValues(['Any']);
    }
  }, [defaultValue]);

  const handleOptionClick = (optionValue: string | number) => {
    const stringValue = optionValue.toString();
    const isOptionSelected = selectedValues.includes(stringValue);
    let newOptions: string[] = [];
    if (isOptionSelected) {
      const updatedOptions = selectedValues.filter((value) => value !== stringValue);
      if (!selectedValues.includes('Any') && updatedOptions.length === 0) {
        newOptions = ['Any'];
        setSelectedValues(newOptions);
      } else {
        newOptions = updatedOptions;
        setSelectedValues(newOptions);
      }
    } else if (!isOptionSelected) {
      if (stringValue === 'Any') {
        newOptions = ['Any'];
        setSelectedValues(newOptions);
      } else if (selectedValues.includes('Any')) {
        newOptions = [...selectedValues, stringValue].slice(1);
        setSelectedValues(newOptions);
      } else {
        newOptions = [...selectedValues, stringValue];
        setSelectedValues(newOptions);
      }
    }
    onValueChange(newOptions);
  };

  return (
    <Flex
      flexDirection="column"
      width="100%"
      fontFamily="GothamSSm"
      padding={isSmallerThan844 ? padding : '7px 31px 15px'}
      borderTop="1px solid #E9EDF0"
      borderBottom={isBothBorder ? '1px solid #E9EDF0' : 'none'}
    >
      <Text fontWeight={700} padding="10px 5px" fontSize="16px" lineHeight="22.4px">
        {title}
      </Text>
      <Flex
        flexDirection="row"
        gap={(isSmallerThan844 && !isStories) ? '3px' : '7px'}
        justifyContent={isStories ? 'flex-start' : 'space-between'}
      >
        {items.map((option) => {
          const isChecked = selectedValues.includes(option.toString());
          const isFirst = option === 'Any';
          return (
            <Flex
              onClick={() => handleOptionClick(option)}
              key={option}
              style={{
                cursor: 'pointer',
                width: '64px',
                height: '48px',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '32px',
                backgroundColor: isChecked ? '#0070CD' : '#fff',
                color: isChecked ? '#fff' : 'black',
                border: isChecked ? 'none' : ' 1px solid #E9EDF0',
                paddingBottom: '2px',
                padding: isFirst ? '0 0 2px 0' : '2px 0 3px 2px',
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: 500,
              }}
              _hover={{ opacity: 0.8 }}
            >
              {option !== 'Any' ? (
                <>
                  <Text>
                    {option}
                  </Text>
                  <Text pt="0.5px" pl="0.5px">+</Text>
                </>
              ) : option}
            </Flex>
          );
        })}
      </Flex>

    </Flex>
  );
};

export default MultiSelect;
