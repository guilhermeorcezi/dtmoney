
import { useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';
import { Container } from './styles'


export function TransactionsTable(){
    const { transactions } = useContext(TransactionsContext)

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