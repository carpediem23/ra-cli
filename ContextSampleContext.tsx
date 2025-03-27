import React, { createContext, useContext, ReactNode, useState } from 'react';

interface ContextSampleContextType {
  // Define your context state and functions here
  state: any;
  setState: (value: any) => void;
}

const ContextSampleContext = createContext<ContextSampleContextType | undefined>(undefined);

interface ContextSampleProviderProps {
  children: ReactNode;
}

export const ContextSampleProvider: React.FC<ContextSampleProviderProps> = ({ children }) => {
  const [state, setState] = useState<any>(null);

  const value = {
    state,
    setState,
  };

  return (
    <ContextSampleContext.Provider value={value}>
      {children}
    </ContextSampleContext.Provider>
  );
};

export const useContextSample = (): ContextSampleContextType => {
  const context = useContext(ContextSampleContext);
  if (context === undefined) {
    throw new Error('useContextSample must be used within a ContextSampleProvider');
  }
  return context;
};
