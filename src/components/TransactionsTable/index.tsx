
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles'

interface Transaction{
    id:number;
    title:string;
    type:string;
    category:string;
    amount:number;
    createdAt:string;
}

export function TransactionsTable(){
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions').then(response => setTransactions(response.data.transactions));
    },[])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transactionItem => { 
                        return (
                            <tr key={transactionItem.id}>
                                <td>{transactionItem.title}</td>
                                <td className={transactionItem.type === "deposit" ? "deposit" : "withdraw"}>
                                   {transactionItem.type === 'withdraw' && "- "}
                                   {new Intl.NumberFormat('pt-BR',{
                                        style:'currency',
                                        currency:'BRL',
                                    }).format(transactionItem.amount)}
                                </td>
                                <td>{transactionItem.type}</td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR').format(
                                        new Date(transactionItem.createdAt)
                                    )}
                                </td>
                            </tr>
                        )}
                    )}
                    
                </tbody>
            </table>

        </Container>

    );
}