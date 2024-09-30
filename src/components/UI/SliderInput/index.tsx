import React from 'react';
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Text,
} from '@chakra-ui/react';
import styles from './styles.module.css';
import ButtonGroup from '../ButtonGroup';
import MenuIcon from '../SvgIcons/MenuIcon';
import { formatNumberWithCommas } from '../../../helpers/formatNumberWithCommas';

interface Props {
  min: number;
  max: number;
  minValue: number;
  maxValue: number;
  onChange: (value: [number, number]) => void
  isSquareInput?: boolean;
}

const SliderInput: React.FC<Props> = ({
  min,
  max,
  minValue,
  maxValue,
  onChange,
  isSquareInput,
}) => {
  const showingMinValue = isSquareInput ? formatNumberWithCommas(minValue.toString()) : `$${formatNumberWithCommas(minValue.toString())}`;
  const showingMaxValue = isSquareInput ? formatNumberWithCommas(maxValue.toString()) : `$${formatNumberWithCommas(maxValue.toString())}`;
  return (
    <RangeSlider
      // eslint-disable-next-line jsx-a11y/aria-proptypes
      aria-label={['min', 'max']}
      value={[minValue, maxValue]}
      min={min}
      max={max}
      onChange={onChange}
      ml="5px"
    >
      <RangeSliderTrack bg="#8195A2" height="2.5px">
        <RangeSliderFilledTrack borderTopWidth="3px" borderColor="#0070CD" borderStyle="solid" />
      </RangeSliderTrack>
      <RangeSliderThumb _focusVisible={{ outline: 'none' }} boxSize="42px" index={0} border="1px solid #0C223F" _active={{ transform: 'translateY(-50%) scale(1.05)' }}>
        <ButtonGroup icon={<MenuIcon />} isFilterButton />
        <Text className={styles.value}>{showingMinValue}</Text>
      </RangeSliderThumb>
      <RangeSliderThumb _focusVisible={{ outline: 'none' }} boxSize="42px" index={1} border="1px solid #0C223F" _active={{ transform: 'translateY(-50%) scale(1.05)' }}>
        <ButtonGroup icon={<MenuIcon />} isFilterButton />
        <Text className={styles.value}>{showingMaxValue}</Text>
      </RangeSliderThumb>
    </RangeSlider>

  );
};
export default SliderInput;
