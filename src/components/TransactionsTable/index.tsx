import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { TransactionContext } from "../../TransactionContext";
import { Container } from "./styles";


export function TransactionsTable() {
  const transactions = useContext(TransactionContext)

  console.log(transactions)

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
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat("PT-BR", {
                    style: "currency",
                    currency: "BRL"
                  }).format(transaction.amount)}
                  </td>
                <td>{transaction.category}</td>
                <td>
                {new Intl.DateTimeFormat("PT-BR", {
                  }).format(new Date(transaction.createdAt))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
