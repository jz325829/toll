import React from 'react';
import {
  Tag,
  TagLabel,
  TagCloseButton,
  Flex,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import { FilterKeys } from '../../../constants/filters';
import { compareAndUpdateFilters } from '../../../store/filter/filterSlice';
import styles from './styles.module.css';

interface Props {
  title: string;
  stateName: FilterKeys;
  primary?: boolean
}

const FilterTag: React.FC<Props> = ({ title, stateName, primary }) => {
  const dispatch = useDispatch();

  const selectedFilters = useSelector((state: RootState) => {
    const { isFilterStarted, ...filteredFilters } = state.filters;
    return filteredFilters;
  });

  const onClickHandler = () => {
    const updatedFilter = { ...selectedFilters, [`${stateName}`]: null };
    dispatch(compareAndUpdateFilters(updatedFilter));
  };

  return (
    <Tag
      borderRadius="full"
      variant="solid"
      backgroundColor={primary ? '#fff' : '#0C223F'}
      color={!primary ? '#fff' : '#0C223F'}
      gap="10px"
      fontWeight={400}
      padding="16px 22px"
      fontSize="14px"
      lineHeight="19.6px"
      display="inline-flex"
      justifyContent="space-between"
      width={primary ? '231px' : '247px'}
    >
      <TagLabel fontWeight={primary ? 800 : 500}>{title}</TagLabel>
      <Flex
        onClick={onClickHandler}
        borderRadius="16px"
        bgColor={primary ? '#1e5785' : '#fff'}
        justifyContent="center"
        alignItems="center"
        className={styles['svg-wrapper']}
      >
        <TagCloseButton
          opacity={1}
          margin={0}
          color={primary ? '#fff' : 'black'}
        />
      </Flex>
    </Tag>
  );
};

export default FilterTag;
