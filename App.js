import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { 
      id: 'e1',
      title: "Netflix", 
      amount: 39.90, 
      date: new Date(2022, 4, 7) 
    },
    { 
      id: 'e2',
      title: "Whey Protein", 
      amount: 139.90, 
      date: new Date(2022, 3, 26) 
    },
    { 
      id: 'e3',
      title: "Aluguel", 
      amount: 500, 
      date: new Date(2022, 4, 10) 
    },
    { 
      id: 'e4',
      title: "Uber", 
      amount: 165.90, 
      date: new Date(2022, 3, 28) 
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
        title={expenses[0].title} 
        amount={expenses[0].amount} 
        date={expenses[0].date}
      />
      <ExpenseItem 
        title={expenses[1].title} 
        amount={expenses[1].amount} 
        date={expenses[1].date}
      />
      <ExpenseItem 
        title={expenses[2].title} 
        amount={expenses[2].amount} 
        date={expenses[2].date}
      />
      <ExpenseItem 
        title={expenses[3].title} 
        amount={expenses[3].amount} 
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
