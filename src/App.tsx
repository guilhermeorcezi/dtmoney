import { NewTransactionModal } from "./components/NewTransactionModal";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

import { GlobalStyle } from "./styles/global";
import { useCallback, useState } from "react";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransacionModalOpen] = useState(false);

  const handleOpenNewTransactionModal = useCallback(() => {
      setIsNewTransacionModalOpen(true);
  },[]);

  const handleCloseNewTransactionModal = useCallback(() => {
      setIsNewTransacionModalOpen(false);
  },[]);

  return (
    <>
    <Header onOpenNewTransaction={handleOpenNewTransactionModal} />
    <Dashboard/>
    <GlobalStyle/>
    <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
    </>
  );
}

export default App;
