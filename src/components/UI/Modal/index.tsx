import {
  FC, ReactNode, HTMLAttributes, useEffect, useState,
} from 'react';
import classNames from 'classnames';
import {
  Box,
  useMediaQuery,
} from '@chakra-ui/react';
import styles from './styles.module.css';
import useOrientation from '../../../hooks/useOrientation';
import WhiteCancelIcon from '../SvgIcons/WhiteCloseIcon.svg';

interface Props extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  togglePopup: () => void;
  onClose?: () => void;
  children: ReactNode;
  styleModal?: string;
  isFilter?: boolean;
  isCard?: boolean;
  isNoResModal?: boolean;
  isHelpModal?: boolean;
  closeButton?: boolean;
  isModalInModal?: boolean
}

const Modal: FC<Props> = ({
  isOpen,
  togglePopup,
  onClose,
  children,
  styleModal,
  isFilter = false,
  isCard = false,
  isNoResModal = false,
  isHelpModal,
  closeButton,
  isModalInModal,
  ...props
}) => {
  const orientation = useOrientation();
  const [isSmallerThan480] = useMediaQuery('(max-width: 480px)');
  const [isSmallerThan900] = useMediaQuery('(max-width: 900px)');
  const [isSmallerThan820] = useMediaQuery('(max-width: 820px)');

  const [isSmallerThan1024] = useMediaQuery('(max-width: 1023px)');

  const [isVisibleOverlay, setIsVisibleOverlay] = useState(false);

  const isDeviceRotated = orientation === 'Landscape';

  const modalClassNames = classNames('modal', styles['popup-container'], {
    [styles['bottom-modal']]: true,
    [styles.open]: isOpen,
  });

  const overlayClassNames = classNames(
    styles['popup-overlay'],
    {
      [styles.open]: isOpen,
    },
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsVisibleOverlay(true);
      }, 300);
    } else {
      setIsVisibleOverlay(false);
    }
  }, [isOpen]);

  return (
    <section className={modalClassNames}>
      <Box
        className={overlayClassNames}
        onClick={togglePopup || onClose}
        display={(isVisibleOverlay && isOpen) ? 'block' : 'none'}
        opacity={isModalInModal ? 0 : 1}
        backgroundColor="rgba(0, 0, 0, 0.70)"
      />

      {(closeButton && !isSmallerThan820)
        && (
          <Box opacity={1} position="absolute" top={isDeviceRotated ? '9%' : '2%'} right={isDeviceRotated ? '7%' : '10px'} zIndex={99999}>
            <WhiteCancelIcon fill="#fff" stroke="white" onClick={togglePopup} cursor="pointer" />
          </Box>
        )}
      <Box
        className={classNames(styleModal, styles.popup)}
        margin={{ base: isFilter ? '0' : '0 20px', md: isFilter ? '0' : '0 20px', lg: '0px' }}
        borderBottomRadius={(isFilter && (isSmallerThan480 || isDeviceRotated)) || (isCard && isSmallerThan900) ? 0 : '16px'}
        maxHeight={(isDeviceRotated || isSmallerThan480) ? 'calc(100% - 40px)' : '100vh'}
        position={(isFilter && (isDeviceRotated || isSmallerThan480) && isSmallerThan900) || (isCard && isSmallerThan900) ? 'fixed' : 'relative'}
        bottom={0}
        padding={isCard ? 0 : '0 22px 22px 22px'}
        width={(isDeviceRotated || (isCard && isSmallerThan900)) && isSmallerThan1024 && !isNoResModal ? '100%' : 'auto'}
        maxWidth={isHelpModal ? '430px' : '100%'}
        {...props}
      >
        {children}
      </Box>
    </section>
  );
};

export default Modal;
