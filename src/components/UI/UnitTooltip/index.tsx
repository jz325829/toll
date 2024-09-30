/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import ButtonGroup from '../ButtonGroup';
import ArrowUpLeftIcon from '../SvgIcons/ArrowUpLeftIcon';

interface Props extends React.HTMLAttributes<HTMLElement> {
  title: string;
  label?: string;
  hoveredText: string;
  hoveredText2?: string;
  hoveredByDefault?: boolean
  isShowArrow?: boolean
  noHover?: boolean
}

const UnitTooltip: React.FC<Props> = ({
  title,
  label,
  hoveredText2,
  hoveredText,
  hoveredByDefault = false,
  isShowArrow,
  noHover,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box position="relative" left={hoveredByDefault ? '25px' : '0'}>
      <Button
        pointerEvents="auto"
        onMouseEnter={noHover ? undefined : handleMouseEnter}
        onMouseLeave={noHover ? undefined : handleMouseLeave}
        bgColor="#FFFFFF!important"
        color="#0C223F"
        fontSize="18px!important"
        fontWeight="700!important"
        borderRadius="16px!important"
        transform="translate(-80%, -100%)"
        p={isShowArrow ? '0px 0px 0 15px!important' : '16px!important'}
        position="relative"
        _hover={{ backgroundColor: '#fff', opacity: 1, cursor: noHover ? 'grab' : 'pointer' }}
        height={(hoveredByDefault || isHovered) ? isShowArrow ? '75px' : '98px' : '54px'}
        {...props}
      >
        <Box pr={(hoveredByDefault || isHovered) ? '17px' : 0}>
          <Text textAlign="left">{title}</Text>
          {(hoveredByDefault || isHovered) ? <Text color="#0C223F" fontSize="14px" lineHeight="20px" fontWeight={300} textAlign="left">{hoveredText}</Text> : null}
          {(hoveredText2 && isHovered) ? <Text color="#0C223F" fontSize="14px" lineHeight="20px" fontWeight={300} textAlign="left">{hoveredText2}</Text> : null}
        </Box>
        {((hoveredByDefault || isHovered) && !isShowArrow)
          ? <ButtonGroup icon={<ArrowUpLeftIcon />} />
          : null}
        <Box
          position="absolute"
          top="100%"
          left="70%"
          transform="translateX(-50%)"
          width="0"
          height="0"
          border="12px solid transparent"
          borderTopColor="#FFFFFF"
        />
      </Button>
    </Box>

  );
};

export default UnitTooltip;
