import React, {createContext, useContext, useState} from 'react';

const SheetContext = createContext();

export const useSheetContext = () => useContext(SheetContext);

export const SheetProvider = ({children}) => {
  const [sheets, setSheets] = useState({});
  const [modals, setModals] = useState({});

  const openSheet = (id, side = 'bottom') => {
    setSheets(prev => ({...prev, [id]: {visible: true, side}}));
  };

  const closeSheet = id => {
    setSheets(prev => ({...prev, [id]: {...prev[id], visible: false}}));
  };

  const openModal = id => {
    setModals(prev => ({...prev, [id]: true}));
  };

  const closeModal = id => {
    setModals(prev => ({...prev, [id]: false}));
  };

  return (
    <SheetContext.Provider
      value={{openSheet, closeSheet, sheets, modals, openModal, closeModal}}>
      {children}
    </SheetContext.Provider>
  );
};
