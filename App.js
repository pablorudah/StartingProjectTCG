import Expenses from "./components/Expenses";

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
      <Expenses items={expenses}></Expenses>      
    </div>
  );
}

export default App;
