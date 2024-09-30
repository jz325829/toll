import React from 'react';
import {
  Flex,
  Text,
} from '@chakra-ui/react';
import { FilterKeys } from '../../../constants/filters';
import styles from './styles.module.css';

interface Props {
  title: string;
  stateName: FilterKeys;
  primary?: boolean
}

const FilterInfo: React.FC<Props> = ({ title }) => {
  const splitedTitle = title.split(' ');
  let filterInfo: string;

  let firstTitle: string;
  let secondTitle: string;

  switch (true) {
    case title.startsWith('Square feet from'):
      firstTitle = 'Result for square feet';
      secondTitle = splitedTitle.slice(3, 6).join('');
      break;

    case title.startsWith('Priced from'):
      firstTitle = 'Result for pricing';
      secondTitle = splitedTitle.slice(2, 5).join('');
      break;

    case title.startsWith('Bedrooms from'):
      firstTitle = 'Result for bedrooms';
      secondTitle = splitedTitle.slice(2, 5).join('');
      break;
    case title.startsWith('Bathrooms from'):
      firstTitle = 'Result for bathrooms';
      secondTitle = splitedTitle.slice(2, 5).join('');
      break;

    case title.startsWith('Floors from'):
      firstTitle = 'Result for floors';
      secondTitle = splitedTitle.slice(2, 5).join('');
      break;

    default:
      firstTitle = 'Result for squaring';
      secondTitle = splitedTitle.slice(3, 6).join('');
      break;
  }

  return (
    <Flex
      backgroundColor="#fff"
      color="#0C223F"
      flexDirection="column"
      padding="8px 0"
      gap="3px"
      fontSize="18px"
      lineHeight="22px"
      display="inline-flex"
      justifyContent="space-between"
      fontWeight={700}
    >
      <Text>{firstTitle}</Text>
      <Text>{secondTitle}</Text>
    </Flex>
  );
};

export default FilterInfo;
