import type { FC } from 'react';
import { InputProps } from '@src/types';

const Input: FC<InputProps> = ({ placeholder = '입력해주세요' }) => {
  return <input placeholder={placeholder} />;
};

export default Input;
