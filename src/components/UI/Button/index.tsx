import { FC } from 'react';
import styles from './styles.module.css';

interface ButtonProps {
  title: string;
  secondary?: boolean;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ title, secondary, onClick }) => {
  const buttonClass = secondary ? `${styles.roundButton} ${styles.secondary}` : styles.roundButton;

  return (
    <a className={buttonClass} onClick={onClick}>
      {title}
    </a>
  );
};

export default Button;
