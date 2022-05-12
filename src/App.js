import { useEffect, useState } from 'react'
import { Container, Statistic } from 'semantic-ui-react'
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import ModalEdit from './components/ModalEdit';
import NewEntryForm from './components/NewEntryForm';

function App() {

  const [entries, setEntries] = useState(initialEntries);
  const [isExpense, setIsExpense] = useState(true);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex(entry => entry.id === entryId)
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;

      setEntries(newEntries);
      resetEntry();
    }
  }, [isOpen]);

  useEffect(() => {

    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpenses += Number(entry.value));
      }
        return (totalIncomes += Number(entry.value));
    });

    setTotal(totalIncomes - totalExpenses);
    setTotalExpense(totalExpenses);
    setTotalIncome(totalIncomes);

  }, entries);

  // Init element data
  function resetEntry() {
    setDescription('');
    setValue('');
    setIsExpense(true);
  }

  // delete entry
  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    console.log(`entries`, entries);
    console.log(`result`, result);
    setEntries(result);
  }


  // add entry
  function addEntry() {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense
    });

    console.log(`result`, result);
    console.log(`entries`, entries);
    setEntries(result);
    resetEntry();
  }


  // edit entry
  function editEntry(id) {
    console.log(`edit entry with id ${id}`);
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense)
      setIsOpen(true);
    }
  }

  return (
    <Container>
      <MainHeader title={'Budget'} />
      <Statistic size='small'>
        <DisplayBalance title={'Your Balance'} value={`$ ${total}`} size={'small'} />
      </Statistic>
      <DisplayBalances totalIncome={totalIncome} totalExpenses={totalExpense}/>
      <MainHeader title={'History'} type='h3' />
      <EntryLines entries={entries} deleteEntry={deleteEntry} editEntry={editEntry} />
      <MainHeader title={'Add new transaction'} type='h3' />

      <NewEntryForm
        addEntry={addEntry}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense} />

      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        editEntry={editEntry}
        addEntry={addEntry}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense} />
    </Container>
  );
}

export default App;

var initialEntries = [

  {
    id: 1,
    description: "Work income",
    value: 1000.00,
    isExpense: false
  },
  {
    id: 2,
    description: "Work income",
    value: 1000.00,
    isExpense: true
  },
  {
    id: 3,
    description: "Water bill",
    value: 200.00,
    isExpense: false
  },
  {
    id: 4,
    description: "Rent",
    value: 50,
    isExpense: true
  },
  {
    id: 5,
    description: "Water bill",
    value: 20.00,
    isExpense: true
  }
];
