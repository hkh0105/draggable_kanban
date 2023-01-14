import type { FC } from 'react';
import { ButtonProps } from '@src/types';

const Button: FC<ButtonProps> = ({ label = 'Button', onClick, className }) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
