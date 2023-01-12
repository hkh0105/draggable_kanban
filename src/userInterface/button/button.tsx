import type { FC } from 'react';
import { ButtonProps } from '@src/types';

const Button: FC<ButtonProps> = ({ label = 'Button', onClick }) => {
  return (
    <button type='button' onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
