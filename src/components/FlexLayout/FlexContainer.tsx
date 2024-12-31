import { ReactNode } from 'react';

interface Props {
  children: ReactNode
}
const FlexContainer = ({ children }: Props) => {
  return (
    <div className="flex">
      {children}
    </div>
  );
};

export default FlexContainer;
