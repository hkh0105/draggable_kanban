import type { FC } from 'react';
import { ButtonProps } from '@src/types';

const Button: FC<ButtonProps> = ({ label = 'Button' }) => {
  return <button type='button'>{label}</button>;
};

export default Button;
