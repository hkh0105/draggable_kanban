import type { FC } from 'react';
import { InputProps } from '@src/types';

const Input: FC<InputProps> = ({
  placeholder = '입력해주세요',
  onChange,
  disabled,
  value,
  defaultValue,
  id,
  className,
}) => {
  return (
    <input
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      defaultValue={defaultValue}
      value={value}
      className={className}
    />
  );
};

export default Input;
