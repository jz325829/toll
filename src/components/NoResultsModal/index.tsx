import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';
import Modal from '../UI/Modal';
import CancelIcon from '../UI/SvgIcons/CancelIcon';
import Button from '../UI/Button';
import styles from './styles.module.css';

interface Props {
  isOpen: boolean;
  togglePopup: () => void;
  toggleFilterModal: () => void
}

const NoResultModal: React.FC<Props> = ({ isOpen, togglePopup, toggleFilterModal }) => {
  const handleFilterModal = () => {
    toggleFilterModal();
    togglePopup();
  };

  return (
    <Modal isOpen={isOpen} togglePopup={togglePopup} isNoResModal>
      <Flex className={styles.container}>
        <CancelIcon className={styles.icon} onClick={togglePopup} />
        <Image src="images/no-results.png" />
        <Text fontWeight={700} fontSize="24px">
          No results found
        </Text>
        <Text fontWeight={500} fontSize="14px" color="#606A70" textAlign="center" lineHeight="20px">
          There are no results based on the filters you used to find the desired residence
        </Text>
        <Button title="Find other options" onClick={handleFilterModal} />
      </Flex>
    </Modal>
  );
};

export default NoResultModal;
