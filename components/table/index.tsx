import clsx from 'clsx';

export function Table({ children, className }: { children?: any; className?: string }) {
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
}

export function Th({ children, className }: { children?: any; className?: string }) {
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
}

export function Td({ children, className }: { children?: any; className?: string }) {
  return (
    <td className={clsx('border-b border-gray-700 text-xs  p-2 text-gray-400', className)}>
      {children}
    </td>
  );
}
