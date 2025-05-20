import { createContext, useContext, useState } from 'react';

const AlertContext = createContext(undefined);

//Here we are creating a new context and exporting it.
//Children mean the components that are wrapped by this context. its iclude const AlertProvider,  state, isOpen, type, message.
//onOpen and onClose are functions that are used to open and close the alert.
//useAlertContext is a custom hook that we will use to consume the context.
//useContext is a react hook that we use to consume the context.
//useState is a react hook that we use to manage the state of the context.
export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    type: 'success',
    message: '',
  });

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message) => setState({ isOpen: true, type, message }),
        onClose: () => setState({ isOpen: false, type: '', message: '' }),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
