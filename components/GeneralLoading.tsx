import { FC, ReactElement } from 'react';

export interface GeneralLoadingProps {
  error: Error;
  isLoading: boolean;
  children: ReactElement;
}

const GeneralLoading: FC<GeneralLoadingProps> = ({ error, isLoading, children }) => {
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred</div>;
  return children;
};
export default GeneralLoading;
