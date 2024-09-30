/* eslint-disable no-nested-ternary */
import {
  FC, ReactNode, HTMLAttributes,
  useEffect,
} from 'react';
import classNames from 'classnames';
import {
  Box, useMediaQuery,
} from '@chakra-ui/react';
import styles from './styles.module.css';

interface Props extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  isHoveredOver?: boolean
  togglePopup: () => void;
  onClose?: () => void;
  children: ReactNode;
  isUsingScrollBar?: boolean;
  isModalMobileOpen: boolean;
  setIsModalMobileOpen: (open: boolean) => void
  isUnitCar?: boolean
}

const SideBar: FC<Props> = ({
  isOpen,
  togglePopup,
  onClose,
  isHoveredOver,
  children,
  isUsingScrollBar,
  isModalMobileOpen,
  setIsModalMobileOpen,
  isUnitCar,
  ...props
}) => {
  const [isSmallerThan844] = useMediaQuery('(max-width: 844px)');
  const [isSmallerThan480] = useMediaQuery('(max-width: 480px)');

  const modalClassNames = classNames('modal', styles['popup-container'], {
    [styles['bottom-modal']]: true,
    [styles.open]: isOpen,
  });

  const popupClassNames = classNames(styles.popup, {
    [styles['hidden-scrollbar']]: !isUsingScrollBar,
  }, {
    [styles['open-bottom']]: isModalMobileOpen,
  });

  const handleOpenBottomModel = () => {
    setIsModalMobileOpen(true);
  };

  useEffect(() => {
    if (isUnitCar && isSmallerThan844) {
      setIsModalMobileOpen(false);
    }
  }, [isOpen]);

  const handleSwipe = (event: React.TouchEvent<HTMLDivElement>) => {
    const deltaY = event.touches[0].clientY;
    const threshold = 0;
    if (deltaY > threshold) {
      setIsModalMobileOpen(true);
    }
  };

  return (
    <section
      className={modalClassNames}
      style={{ zIndex: isHoveredOver ? 10 : 9 }}
      onTouchMove={handleSwipe}
    >
      <Box
        className={popupClassNames}
        overflowY={(isModalMobileOpen || !isSmallerThan844) ? 'auto' : 'hidden'}
        {...props}
      >
        {(!isModalMobileOpen) && (
          <Box
            onClick={handleOpenBottomModel}
            onTouchMove={handleSwipe}
            style={{ zIndex: 9999, position: 'relative' }}
          >
            <span className={styles['top-line']} />
          </Box>

        )}

        {/* {(isSmallerThan844 && !isUsingScrollBar && isModalMobileOpen) && (
          <Box
            opacity={1}
            position="absolute"
            top={!isSmallerThan480 ? isSmallerThan844 ? '6%' : '4%' : isUnitCar ? '5%' : '8%'}
            right={!isSmallerThan480 ? '4%' : '8%'}
            zIndex={99999}
          >
            <CancelIcon onClick={hadnleToggleClosePopup} cursor="pointer" />
          </Box>
        )} */}
        {children}
      </Box>
    </section>

  );
};

export default SideBar;
