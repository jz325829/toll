import { ReactNode, HTMLAttributes } from 'react';
import { Button } from '@chakra-ui/react';
import styles from './styles.module.css';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  icon?: ReactNode;
  title?: string;
  secondary?: boolean;
  onClick?: () => void;
  isFilterButton?: boolean;
}

const ButtonGroup = ({
  primary = false, icon, title, secondary, onClick, isFilterButton = false, ...props
}: Props) => {
  let classNames = styles['btn-circle'];

  switch (true) {
    case primary:
      classNames += ` ${styles.primary}`;
      break;
    case secondary:
      classNames += ` ${styles.secondary}`;
      break;
    default:
      break;
  }
  const buttonStyle: React.CSSProperties = {
    width: title ? '119px' : isFilterButton ? '38px' : '52px',
    borderRadius: title ? '30px' : '50%',
    height: isFilterButton ? '38px' : '52px',
    backgroundColor: isFilterButton ? '#fff' : primary ? '#0C223F' : secondary ? '#fff' : '#E9EDF0',
  };

  return (
    <Button
      className={classNames}
      style={buttonStyle}
      onClick={onClick}
      padding={0}
      {...props}
    >
      {icon}
      {title && <span className={styles.title}>{title}</span>}
    </Button>
  );
};

export default ButtonGroup;
