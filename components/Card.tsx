import { FC, ReactNode } from 'react';
import clsx from 'clsx';

const Card: FC<{ children: ReactNode; className?: string; innerPadding?: boolean }> = ({
  children,
  className,
  innerPadding = true
}) => {
  return (
    <div
      style={{ boxShadow: 'rgb(0 0 0 / 8%) 0px 1px 4px 0px', borderColor: '#cbd2d6' }}
      className={clsx(
        { 'p-2 sm:p-6': innerPadding },
        className,
        'border-collapse table-auto w-full text-md bg-white rounded-md border border-gray-200 mb-4'
      )}
    >
      {children}
    </div>
  );
};
export default Card;
