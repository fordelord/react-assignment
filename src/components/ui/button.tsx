import React from 'react';
import classNames from 'classnames';

interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<IProps> = ({ children, onClick, className }) => {
  return (
    <button
      className={classNames(
        'bg-[#171717] text-[#fafafa] hover:bg-[#171717e6] border-none rounded-[6px] px-[8px] py-[6px] transition-all duration-200 cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
