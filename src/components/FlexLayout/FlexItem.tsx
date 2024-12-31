import { ReactNode } from 'react';

interface Props {
  children: ReactNode
}

const FlexItem = ({ children }: Props) => {
  return (
    <div className="flex-1 overflow-hidden px-2 break-all">
      {children}
    </div>
  );
};

export default FlexItem;
