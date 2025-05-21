import React, { ChangeEvent } from 'react';
import classNames from 'classnames';

interface IProps {
  value: string;
  handleChangeValue: (value: string) => void;
  type: string;
  className?: string;
}

const Input: React.FC<IProps> = ({
  type,
  value,
  handleChangeValue,
  className,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    handleChangeValue(event.target?.value);
  };

  return (
    <input
      className={classNames(
        'max-w-[400px] border-[#000000] rounded-[6px] bg-[#ffffff] text-[#000000] p-[4px]',
        className
      )}
      value={value}
      onChange={handleChange}
      type={type}
    />
  );
};

export default Input;
