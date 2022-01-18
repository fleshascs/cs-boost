import { FC, ReactElement } from 'react';

export interface GeneralLoadingProps {
  error: Error;
  isLoading: boolean;
  children: ReactElement;
  fallback?: ReactElement;
}

const GeneralLoading: FC<GeneralLoadingProps> = ({ error, isLoading, children, fallback }) => {
  if (isLoading) return fallback ?? <div>Loading...</div>;
  if (error) return <div>An error has occurred</div>;
  return children;
};
export default GeneralLoading;
