import incomesImg from '../../assets/incomes.svg'
import expensesImg from '../../assets/expenses.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext';
import { useContext } from 'react';

import {Container} from './styles'

export function Summary() {
  const data = useContext(TransactionsContext);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomesImg} alt="Entradas" />
        </header>
        <strong> R$ 1.000,00 </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={expensesImg} alt="Saidas" />
        </header>
        <strong> - R$ 500,00 </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong> R$ 500,00 </strong>
      </div>
    </Container>
  )
}