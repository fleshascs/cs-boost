import { FC, ReactNode } from 'react';
import clsx from 'clsx';

const Card: FC<{ children: ReactNode; className?: string }> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        className,
        'border-collapse table-auto w-full text-sm text-gray-400 border border-gray-800  bg-gray-900 mb-4'
      )}
    >
      {children}
    </div>
  );
};
export default Card;
