import React, { ReactNode } from 'react';

interface ContainerProps {
  children?: ReactNode;  // Make children optional
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div  className='container mx-auto max-w-7xl pt-16 px-6 flex-grow'>
      {children}
    </div>
  );
}

export default Container;
