import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';

import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [isNewItemAdded, setIsNewItemAdded] = useState(false);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);

    setIsNewItemAdded(false);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
    setIsNewItemAdded(true);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>
          Sistema Financeiro
        </C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        <InputArea onAdd={handleAddItem} />

        <TableArea list={filteredList} isNewItemAdded={isNewItemAdded} onEdit={(item) => {
        // Lógica para editar o item
        console.log('Editar item:', item);
    }}
    onDelete={(index) => {
      const newList = [...list];
      newList.splice(index, 1); // Remove o item com o índice especificado
      setList(newList); // Atualiza a lista
    }} />        
      </C.Body>
    </C.Container>
  );
}

export default App;