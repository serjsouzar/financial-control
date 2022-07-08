import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./services/api";

interface TransactionProps{
  id: number,
  title: string,
  category: string,
  amount: number,
  type: string,
  createdAt: string
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext<TransactionProps[]>([]);

export function TransactionsProvider({children}: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    api.get("transactions")
    .then((response) => setTransactions(response.data.transactions));
  }, []);
  
  return (
    <TransactionContext.Provider value={transactions}>
      {children}
    </TransactionContext.Provider>
  )
}