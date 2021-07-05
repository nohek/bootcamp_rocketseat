import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from './services/api';

interface Transaction {
  id: number;
  amount: number;
  category: string;
  createdAt: string;
  title: string;
  type: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({children}: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('./transactions', {
      ...transactionInput,
      createdAt: new Date()
     }) 
    const {transaction} = response.data

    setTransactions([
      ...transactions,
      transaction,
    ])
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}> 
      {children}
    </TransactionsContext.Provider>
  )
}