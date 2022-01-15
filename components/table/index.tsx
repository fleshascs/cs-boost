import clsx from 'clsx';
import { FC } from 'react';

export const Table: FC<{ className?: string }> = ({ children, className }) => {
  return (
    <table
      className={clsx(
        className,
        'border-collapse table-auto w-full text-sm rounded-xl text-gray-400 border border-gray-800  bg-gray-900 mb-4'
      )}
    >
      {children}
    </table>
  );
};

export const Th: FC<{ className?: string }> = ({ children, className }) => {
  return (
    <th
      className={clsx(
        className,
        // 'border-b border-gray-600 font-medium p-0 sm:p-3 pt-0 pb-3 text-gray-200 text-left'
        'border-b border-gray-600 text-xs p-0 sm:p-3 pt-0 pb-3 text-gray-200 text-left uppercase'
      )}
    >
      {children}
    </th>
  );
};

export const Td: FC<{ className?: string }> = ({ children, className }) => {
  return (
    <td className={clsx('border-b border-gray-700 text-xs  p-2 text-gray-400', className)}>
      {children}
    </td>
  );
};
